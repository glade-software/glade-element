import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import * as sha256 from "crypto-js/sha256";

const db = admin.firestore();

interface Forest {
  ownerUid: string;
  shouldNotify: boolean;
}

export const validateAPIKey = functions.https.onCall(async ({apiKey}) => {
  try {
    const forest = await db.collection("forests").doc(apiKey).get();
    if (forest.exists) {
      const {ownerUid, shouldNotify} = forest.data() as Forest;
      return {
        isValid: true,
        forest: {
          ownerUid,
          shouldNotify,
        },
      };
    }
  } catch (errorFindingForest) {
    throw new functions.https.HttpsError("internal", `${errorFindingForest}`);
  }
  return {
    isValid: false,
  };
});

export const getFreeAPIKeyForUser = functions.https.onCall(
    async (_, context) => {
      if (context.auth) {
        const {uid} = context.auth;
        const {email} = context.auth.token;
        const source = `v0/free/users/${uid}`;
        const apiKey = `v0fu.${sha256(source).toString()}`;
        try {
          await Promise.all([
            db.collection("users").doc(uid).update({apiKey}),
            db.collection("forests").doc(apiKey).set({
              ownerUid: uid,
              ownerEmail: email,
              shouldNotify: false,
            }),
          ]);
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
            "You need to be authenticated to get an API Key!"
        );
      }
    }
);
