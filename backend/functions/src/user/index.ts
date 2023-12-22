import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";


const db = admin.firestore();
const auth = admin.auth();

import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from "unique-names-generator";

export const addUserToFirestore = functions.auth
    .user()
    .onCreate(async (user) => {
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
          auth.updateUser(user.uid, {displayName}),
          db
              .collection("users")
              .doc(user.uid)
              .set({displayName, isAnonymous: true}),
        ]);
      } catch (error) {
        console.log("error persisting user to firestore:\n", error);
      }
    });

export const checkUsernameAvailability = functions.https.onCall(
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
        return {usernameAvailable};
      } catch (firestoreError) {
        throw new functions.https.HttpsError(
            "internal",
            "failed to check username availability",
            {firestoreError}
        );
      }
    }
);
