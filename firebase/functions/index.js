const functions = require("firebase-functions");
const admin = require("firebase-admin");
const remark = require("remark");
const htmlify = require("remark-html");
const { default: remarkEmbedder } = require("@remark-embedder/core");
const {
  default: oembedTransformer,
} = require("@remark-embedder/transformer-oembed");

const {
  uniqueNamesGenerator,
  adjectives,
  animals,
} = require("unique-names-generator");

const validateAnnotation = require("./validateAnnotation");

admin.initializeApp();

const db = admin.firestore();
const auth = admin.auth();

const ANNOTATION_LIMIT = 10000; // I guess?

exports.addUserToFirestore = functions.auth.user().onCreate(async (user) => {
  try {
    // as a placeholder we create a username for the new user
    // optimistically: scandalous-anonymous-rhinocerous
    const displayName = uniqueNamesGenerator({
      dictionaries: [adjectives, animals],
      style: "lowerCase",
      separator: "-anonymous-",
      length: 2,
    });

    console.log(
      "initializing user",
      user.uid,
      " in firestore with displayName",
      displayName,
      "🎉"
    );
    await Promise.all([
      auth.updateUser(user.uid, { displayName }),
      db.collection("users").doc(user.uid).set({ displayName }),
    ]);
  } catch (error) {
    console.log("error persisting user to firestore:\n", error);
  }
});

exports.checkUsernameAvailability = functions.https.onCall(
  async (usernameToCheck) => {
    try {
      const userQuerySnapshot = await db
        .collection("users")
        .where("displayName", "==", usernameToCheck)
        .get();
      let usernameAvailable = true;
      userQuerySnapshot.forEach(() => {
        usernameAvailable = false;
      });
      return { usernameAvailable };
    } catch (firestorError) {
      throw new functions.https.HttpsError(
        "internal",
        "failed to check username availability",
        { firestoreError }
      );
    }
  }
);

exports.getHTMLFromMarkdown = functions.https.onCall(
  async ({ markdownStrings }, context) => {
    let htmlStrings = [];

    if (Array.isArray(markdownStrings)) {
      for (let index = 0; index < markdownStrings.length; index++) {
        let markdownString = markdownStrings[index];
        if (
          !(typeof markdownString === "string") ||
          markdownString.length === 0
        ) {
          // Throwing an HttpsError so that the client gets the error details.
          throw new functions.https.HttpsError(
            "invalid-argument",
            'The "markdownStrings" Array items each must be non-empty strings'
          );
        }

        try {
          // convert the current markdownString into an htmlString
          const htmlResult = await remark()
            .use(remarkEmbedder, {
              transformers: [
                [oembedTransformer, { params: { maxwidth: 800 } }],
              ],
            })
            .use(htmlify)
            .process(markdownString);
          // add the new htmlString to the response Array
          htmlStrings.push(htmlResult.toString());
        } catch (error) {
          throw new functions.https.HttpsError(
            "internal",
            `markdownString[${index}]\n ${error}`
          );
        }
      }
    }

    if (htmlStrings.length !== markdownStrings.length) {
      throw new functions.https.HttpsError(
        "internal",
        `failed to process all markdownStrings \nm${markdownStrings.length}\nh${htmlStrings.length}`
      );
    }
    // return all new htmlStrings
    return { htmlStrings };
  }
);

exports.getAnnotations = functions.https.onCall(async (query, context) => {
  if (query.gladeDocumentHash) {
    // get all annotations for tree
    const annotationsSnapshot = await db
      .collection("glade-trees")
      .doc(`${query.gladeDocumentHash}`)
      .collection("annotations")
      .orderBy("updatedAt", "desc")
      .limit(query.limit || ANNOTATION_LIMIT)
      .get();

    if (annotationsSnapshot.empty) {
      return {
        annotations: [],
      };
    } else {
      let annotations = [];
      annotationsSnapshot.forEach((doc) => {
        annotations.push(doc.data());
      });
      return { annotations };
    }
  } else {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "you need to specify query.gladeDocumentHash!",
      query
    );
  }
});

exports.modifyAllAnnotations = functions.https.onCall(
  async ({ gladeDocumentHash, newProperties }, context) => {
    const annotationsSnapshot = await db
      .collection("glade-trees")
      .doc(`${gladeDocumentHash}`)
      .collection("annotations")
      .get();
    const response = {
      edited: [],
    };
    annotationsSnapshot.forEach(async (snap) => {
      const data = snap.data();
      snap.ref.update({ gladeDOMNodeHash: data.gladeDomNodeHash });
    });
    return response;
  }
);

exports.publishAnnotation = functions.https.onCall(
  async (annotation, context) => {
    const {
      postedBy,
      plainTextBody,
      htmlString,
      gladeDOMNodeHash,
      gladeDocumentHash,
    } = annotation;

    const validationErrors = validateAnnotation({
      postedBy,
      plainTextBody,
      htmlString,
      gladeDOMNodeHash,
      gladeDocumentHash,
    });

    if (validationErrors.length) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `Annotaion failed ${validationErrors.length} validation check(s)!`,
        { validationErrors }
      );
    }

    try {
      const response = await db
        .collection("glade-trees")
        .doc(`${gladeDocumentHash}`)
        .collection("annotations")
        .add({
          postedBy,
          plainTextBody,
          htmlString,
          gladeDOMNodeHash,
          updatedAt: admin.firestore.Timestamp.now(),
        });
      return { response };
    } catch (firestoreError) {
      console.log("⚠️ failed to persist annotation to firestore");
      throw new functions.https.HttpsError(firestoreError);
    }
  }
);
