import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
import "@firebase/functions";

export default async function () {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return firebase;
}
