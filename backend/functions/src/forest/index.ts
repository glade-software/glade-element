import * as functions from "firebase-functions/v2";
import * as admin from "firebase-admin";
import * as sha256 from "crypto-js/sha256";

interface Forest {
  ownerUid: string;
  shouldNotify: boolean;
}

const servePublicly = {
  cors: true,
};

export const validateAPIKey = functions.https.onCall(
  servePublicly,
  async (request) => {
    const { apiKey } = request.data;
    try {
      const db = admin.firestore();
      const forest = await db.collection("forests").doc(apiKey).get();
      if (forest.exists) {
        const { ownerUid, shouldNotify } = forest.data() as Forest;
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
  },
);

export const getFreeAPIKeyForUser = functions.https.onCall(
  servePublicly,
  async (request) => {
    const context = {
      auth: request.auth,
    };
    const db = admin.firestore();
    if (context.auth) {
      const { uid } = context.auth;
      const { email } = context.auth.token;
      const source = `v0/free/users/${uid}`;
      const apiKey = `v0fu.${sha256(source).toString()}`;
      try {
        await Promise.all([
          db.collection("users").doc(uid).update({ apiKey }),
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
          errorSettingKeyOnU,
        );
      }
    } else {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "You need to be authenticated to get an API Key!",
      );
    }
  },
);
