import {onCall} from "firebase-functions/v2/https";
import * as f1 from "firebase-functions/v1";
import * as admin from "firebase-admin";

import {
  adjectives,
  animals,
  uniqueNamesGenerator,
} from "unique-names-generator";

const servePublicly = { cors: true };

export const addUserToFirestore = f1.auth
  .user()
  .onCreate(async (user) => {
    const db = admin.firestore();
    const auth = admin.auth();
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
        "🎉",
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

export const checkUsernameAvailability = onCall(servePublicly,
  async (request) => {
    const usernameToCheck = request.data;
    try {
      const db = admin.firestore();
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
      throw new f1.https.HttpsError(
        "internal",
        "failed to check username availability",
        { firestoreError },
      );
    }
  },
);
