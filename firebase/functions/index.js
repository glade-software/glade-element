const functions = require('firebase-functions');
const admin = require('firebase-admin');
const remark = require('remark');
const htmlify = require('remark-html');
const remarkEmbedder = require('@remark-embedder/core');
const oembedTransformer = require('@remark-embedder/transformer-oembed');

admin.initializeApp();

const db = admin.firestore();

exports.addUserToFirestore = functions.auth.user().onCreate(async (user) => {
  try {
    await db.collection('users').doc(user.uid).set({displayName: ''});
  } catch (error) {
    console.log('error persisting user to firestore:\n', error);
  }
});

exports.getHTMLFromMarkdown = functions.https.onCall(
  async ({markdownStrings}, context) => {
    let htmlStrings = [];

    if (!context.auth) {
      // Throwing an HttpsError so that the client gets the error details.
      throw new functions.https.HttpsError(
        'failed-precondition',
        'The function must be called while authenticated.'
      );
    }

    if (Array.isArray(markdownStrings)) {

      markdownStrings.forEach((markdownString, index) => {
        // Checking attribute.
        if (
          !(typeof markdownString === 'string') ||
          markdownString.length === 0
        ) {
          // Throwing an HttpsError so that the client gets the error details.
          throw new functions.https.HttpsError(
            'invalid-argument',
            'The "markdownStrings" Array items each must be non-empty strings'
          );
        }

        try {
          // convert the current markdownString into an htmlString
          const htmlResult = remark()
            .use(remarkEmbedder, {
              transformers: [oembedTransformer],
            })
            .use(htmlify)
            .processSync(markdownString);
            // add the new htmlString to the response Array
            htmlStrings.push(htmlResult.toString())
        } catch (error) {
          throw new functions.https.HttpsError('internal', `markdownString[${index}]\n ${error}`);
        }
      });
    }

    if(htmlStrings.length != markdownStrings.length){
      throw new functions.https.HttpsError('internal', `failed to process all markdownStrings`);
    }
    // return all new htmlStrings
    return {htmlStrings};
  }
);
