import * as admin from "firebase-admin";

admin.initializeApp()

import {
  getAnnotations,
  deleteAnnotation,
  publishAnnotation,
} from "./annotation";

import { validateAPIKey, getFreeAPIKeyForUser } from "./forest";
import { addUserToFirestore, checkUsernameAvailability } from "./user";

export {
  getAnnotations,
  deleteAnnotation,
  publishAnnotation,
  validateAPIKey,
  getFreeAPIKeyForUser,
  addUserToFirestore,
  checkUsernameAvailability,
};
