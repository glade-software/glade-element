import { init } from "next-firebase-auth";
import { firebaseConfig } from "../firebase-app";

const initAuth = () => {
  let firebasePrivateKey;

  try {
    // for vercel, i guess
    firebasePrivateKey = JSON.parse(process.env.FIREBASE_PRIVATE_KEY);
  } catch {
    firebasePrivateKey = process?.env?.FIREBASE_PRIVATE_KEY;
  }

  console.log(firebasePrivateKey);

  init({
    authPageURL: "/login",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login", // required
    logoutAPIEndpoint: "/api/logout", // required
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: firebaseConfig.projectId,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // The private key must not be accesssible on the client side.
        privateKey: firebasePrivateKey,
      },
      databaseURL: firebaseConfig.databaseURL,
    },
    firebaseClientInitConfig: {
      apiKey: firebaseConfig.apiKey, // required
      authDomain: firebaseConfig.authDomain,
      databaseURL: firebaseConfig.databaseURL,
      projectId: firebaseConfig.projectId,
    },
    cookies: {
      name: "GladeApp", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  });
};

export default initAuth;
