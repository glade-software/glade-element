import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";

import remarkEmbedder from '@remark-embedder/core'
import oembedTransformer from '@remark-embedder/transformer-oembed'
// or, if you're using CommonJS require:
import remark from 'remark'
import htmlify from 'remark-html'


import { ANNOTATION_LIMIT, ROOT_API_KEY } from "../util/config";

import { validateAnnotation } from "./validateAnnotation";

const db = admin.firestore();

interface GetHTMLFromMarkdownArgs {
  markdownStrings: string[];
}

type PostedBy = {
  uid: string;
  displayName: string;
};

interface Annotation {
  uid: string;
}

export const getHTMLFromMarkdownStringArray = functions.https.onCall(
  async ({ markdownStrings }: GetHTMLFromMarkdownArgs, context) => {
    // this Array has one entry when we are creating a new annotation or displaying a preview
    // it contains one per annotation when we are reading an entire list

    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "You need to be authenticated to getHTMLFromMarkdown!"
      );
    }

    if (!Array.isArray(markdownStrings)) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        '"markdownStrings" must be an array of strings!'
      );
    }

    const htmlStrings = [];

    if (Array.isArray(markdownStrings)) {
      for (let index = 0; index < markdownStrings.length; index++) {
        const markdownString = markdownStrings[index];
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
        `failed to process all markdownStrings \n
            m${markdownStrings.length}\nh${htmlStrings.length}`
      );
    }
    // return all new htmlStrings
    return { htmlStrings };
  }
);

export const getAnnotations = functions.https.onCall(async (query) => {
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

    if (annotationsSnapshot.empty) return { annotations: [] };

    const annotations: Array<Annotation> = [];

    annotationsSnapshot.forEach((doc) => {
      const annotation = { ...doc.data(), uid: doc.id };
      annotations.push(annotation);
    });

    return { annotations };
  }

  throw new functions.https.HttpsError(
    "invalid-argument",
    "you need to specify query.gladeDocumentHash!",
    query
  );
});

// Delete just sets the "hidden" property, if this is bad for you leave an issue on GitHub please
export const deleteAnnotation = functions.https.onCall(
  async ({ annotationUid, gladeAPIKey, gladeDocumentHash }, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "You need to be authenticated to delete an annotation!"
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

    if (!forest.exists) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        '"gladeAPIKey is invalid'
      );
    }

    const isForestOwner = forest.data()?.ownerUid === context.auth.uid;

    const annotationRef = db
      .collection("forests")
      .doc(gladeAPIKey)
      .collection("trees")
      .doc(`${gladeDocumentHash}`)
      .collection("annotations")
      .doc(annotationUid);

    const doc = await annotationRef.get();

    if (doc.exists) {
      const { postedBy } = doc.data() as { postedBy: PostedBy };
      if (postedBy.uid === context.auth.uid || isForestOwner) {
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
          "You can not delete this annotation, you don't own it."
        );
      }
    }
    throw new functions.https.HttpsError(
      "invalid-argument",
      `No annotation found with the uid "${annotationUid}"`
    );
  }
);

export const publishAnnotation = functions.https.onCall(
  async (annotation, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "You need to be authenticated to post an annotation!"
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
        const response = await db
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
        return { uid: response.id };
      } else {
        console.log(`forest "${gladeAPIKey}" does not exist`);
        throw new functions.https.HttpsError(
          "invalid-argument",
          'Invalid "gladeAPIKey"!',
          { gladeAPIKey }
        );
      }
    } else {
      try {
        const response = await db
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
        return { uid: response.id };
      } catch (errorSavingToRoot) {
        throw new functions.https.HttpsError(
          "internal",
          `unable to save annotation to root forest: ${errorSavingToRoot}`
        );
      }
    }
  }
);
