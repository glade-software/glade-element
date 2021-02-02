const functions = require('firebase-functions');
const admin = require('firebase-admin');
const remark = require('remark');
const htmlify = require('remark-html');
const {default: remarkEmbedder} = require('@remark-embedder/core');
const {
  default: oembedTransformer,
} = require('@remark-embedder/transformer-oembed');
const {
  uniqueNamesGenerator,
  adjectives,
  animals,
} = require('unique-names-generator');

admin.initializeApp();

const db = admin.firestore();
const auth = admin.auth();

exports.addUserToFirestore = functions.auth.user().onCreate(async (user) => {
  // we are persisting user profile information here, if the user is not anon, we leave an empty record only in firestore
  let displayName = '';
  try {
    // if the user is anon, we create a username for them
    // optimistically: scandalous-anonymous-rhinocerous
    if (user.isAnonymous) {
      displayName = uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        style: 'lowerCase',
        separator: '-anonymous-',
        length: 2,
      }); 
      await auth.updateUser(user.uid, {displayName});
    }

    console.log(
      'initializing user',
      user.uid,
      ' in firestore with displayName',
      displayName || null,
      '🎉'
    );

    await db.collection('users').doc(user.uid).set({displayName});
  } catch (error) {
    console.log('error persisting user to firestore:\n', error);
  }
});

exports.getHTMLFromMarkdown = functions.https.onCall(
  async ({markdownStrings}, context) => {
    let htmlStrings = [];

    if (Array.isArray(markdownStrings)) {
      for (let index = 0; index < markdownStrings.length; index++) {
        let markdownString = markdownStrings[index];
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
          const htmlResult = await remark()
            .use(remarkEmbedder, {
              transformers: [[oembedTransformer, {params: {maxwidth: 800}}]],
            })
            .use(htmlify)
            .process(markdownString);
          // add the new htmlString to the response Array
          htmlStrings.push(htmlResult.toString());
        } catch (error) {
          throw new functions.https.HttpsError(
            'internal',
            `markdownString[${index}]\n ${error}`
          );
        }
      }
    }

    if (htmlStrings.length !== markdownStrings.length) {
      throw new functions.https.HttpsError(
        'internal',
        `failed to process all markdownStrings \nm${markdownStrings.length}\nh${htmlStrings.length}`
      );
    }
    // return all new htmlStrings
    return {htmlStrings};
  }
);
