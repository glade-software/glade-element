import * as admin from "firebase-admin";

admin.initializeApp();


import {getHTMLFromMarkdownStringArray, getAnnotations, deleteAnnotation, publishAnnotation} from "./annotation";
import {validateAPIKey, getFreeAPIKeyForUser} from "./forest";
import {addUserToFirestore, checkUsernameAvailability} from "./user";

export {
  getHTMLFromMarkdownStringArray,
  getAnnotations,
  deleteAnnotation,
  publishAnnotation,
  validateAPIKey,
  getFreeAPIKeyForUser,
  addUserToFirestore,
  checkUsernameAvailability,
};
