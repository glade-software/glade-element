const functions = require("firebase-functions");
const admin = require("firebase-admin");
const remark = require("remark");
const htmlify = require("remark-html");
const { default: remarkEmbedder } = require("@remark-embedder/core");
const {
  default: oembedTransformer,
} = require("@remark-embedder/transformer-oembed");
const SHA256 = require("crypto-js/sha256");
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
const ROOT_API_KEY =
  "v0ru.379031335f10b4cb40cff8f6feeb3d598db6529d52aa98637549ca8b63694c10";

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
      db
        .collection("users")
        .doc(user.uid)
        .set({ displayName, isAnonymous: true }),
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
    } catch (firestoreError) {
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
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        `You need to be authenticated to getHTMLFromMarkdown!`
      );
    }

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

exports.getAnnotationsV2 = functions.https.onCall(async (query, context) => {
  if (query.gladeDocumentHash) {
    // get all annotations for tree

    const annotationsSnapshot = await db
      .collection("forests")
      .doc(query.gladeAPIKey || ROOT_API_KEY) // a bad gladeAPIKey *should* just explode
      .collection("trees")
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
        annotations.push({
          ...doc.data(),
          uid: doc.id,
        });
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

exports.getFreeAPIKeyForUser = functions.https.onCall(async (_, context) => {
  if (context.auth) {
    const { uid } = context.auth;
    const { email } = context.auth.token;
    const source = `v0/free/users/${uid}`;
    const apiKey = `v0fu.${SHA256(source).toString()}`;
    try {
      await db.collection("users").doc(uid).update({ apiKey });
      await db.collection("forests").doc(apiKey).set({
        ownerUid: uid,
        ownerEmail: email,
        shouldNotify: false,
      });
      return apiKey;
    } catch (errorSettingKeyOnU) {
      throw new functions.https.HttpsError(
        "internal",
        "error setting apiKey on user",
        errorSettingKeyOnU
      );
    }
  } else {
    throw new functions.https.HttpsError(
      "unauthenticated",
      `You need to be authenticated to get an API Key!`
    );
  }
});
exports.publishAnnotation = functions.https.onCall(
  async (annotation, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        `You need to be authenticated to post an annotation!`
      );
    }

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

exports.validateAPIKey = functions.https.onCall(async ({ apiKey }, context) => {
  try {
    const forest = await db.collection("forests").doc(apiKey).get();
    if (forest.exists) {
      return {
        isValid: true,
        forest: {
          ownerUid: forest.data().ownerUid,
          shouldNotify: forest.data().shouldNotify,
        },
      };
    }
  } catch (errorFindingForest) {
    throw new functions.https.HttpsError("internal", errorFindingForest);
  }
  // Else
  return {
    isValid: false,
  };
});

// Delete just sets the "hidden" property, if this is bad for you leave an issue on GitHub please
exports.deleteAnnotation = functions.https.onCall(
  async ({ annotationUid, gladeAPIKey, gladeDocumentHash }, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        `You need to be authenticated to delete an annotation!`
      );
    }

    if (!annotationUid) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        'You need to specify an "annotationUid" for the annotation you want to delete.'
      );
    }

    if (!gladeDocumentHash) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        'You need to specify an "gladeDocumentHash" for the annotation you want to delete.'
      );
    }

    const forest = await db.collection("forests").doc(gladeAPIKey).get();
    
    if(!forest.exists){
      throw new functions.https.HttpsError(
        "invalid-argument",
        `"gladeAPIKey is invalid`
      );
    }

    let isForestOwner = forest.data().ownerUid === context.auth.uid

    let annotationRef = db
      .collection("forests")
      .doc(gladeAPIKey)
      .collection("trees")
      .doc(`${gladeDocumentHash}`)
      .collection("annotations")
      .doc(annotationUid);

    if (doc.exists) {
      const { postedBy } = doc.data();
      if (postedBy.uid === auth.context.uid || isForestOwner) {
        const now = admin.firestore.Timestamp.now();
        await annotationRef.update({
          hidden: true,
          deletedAt: now,
          updatedAt: now,
        });
        return { deletedAt: now };
      } else {
        throw new functions.https.HttpsError(
          "permission-denied",
          `You can not delete this annotation, you don't own it.`
        );
      }
    }
  }
);

exports.publishAnnotationV2 = functions.https.onCall(
  async (annotation, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        `You need to be authenticated to post an annotation!`
      );
    }

    const {
      postedBy, // displayName
      plainTextBody,
      htmlString,
      gladeDOMNodeHash,
      gladeDocumentHash,
      gladeAPIKey,
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

    // the user has supplied an API key
    if (gladeAPIKey) {
      // if key is valid and there is an entry in the DB save the annotation under the key

      const forest = await db.collection("forests").doc(gladeAPIKey).get();

      if (forest.exists) {
        console.log(`forest "${gladeAPIKey}" exists`);
        let response = await db
          .collection("forests")
          .doc(gladeAPIKey)
          .collection("trees")
          .doc(`${gladeDocumentHash}`)
          .collection("annotations")
          .add({
            postedBy: {
              displayName: postedBy.displayName,
              uid: context.auth.uid,
            },
            plainTextBody,
            htmlString,
            gladeDOMNodeHash,
            updatedAt: admin.firestore.Timestamp.now(),
          });
        return { response };
      } else {
        console.log(`forest "${gladeAPIKey}" does not exist`);
        throw new functions.https.HttpsError(
          "invalid-argument",
          `Invalid "gladeAPIKey"!`,
          { gladeAPIKey }
        );
      }
    } else {
      try {
        let response = await db
          .collection("forests")
          .doc(ROOT_API_KEY)
          .collection("trees")
          .doc(`${gladeDocumentHash}`)
          .collection("annotations")
          .add({
            postedBy: {
              displayName: postedBy,
              uid: context.auth.uid,
            },
            plainTextBody,
            htmlString,
            gladeDOMNodeHash,
            updatedAt: admin.firestore.Timestamp.now(),
          });
        return { response };
      } catch (errorSavingToRoot) {
        throw new functions.https.HttpsError(errorSavingToRoot);
      }
    }
  }
);
