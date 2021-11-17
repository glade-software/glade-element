import "firebase/firestore";
import "firebase/auth";
import { Fuego, FuegoProvider } from "@nandorojo/swr-firestore";
import {firebaseConfig} from "../firebase-app";

import initAuth from "../lib/initAuth";
initAuth();

// https://github.com/nandorojo/swr-firestore#set-up
const fuego = new Fuego(firebaseConfig);

function MyApp({ Component, pageProps }) {
  return (
    <FuegoProvider fuego={fuego}>
      <Component {...pageProps} />
    </FuegoProvider>
  );
}

export default MyApp;
