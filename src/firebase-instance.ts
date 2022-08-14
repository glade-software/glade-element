import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAtc2ed5rsHT7IOF9E1psFhkqtCqKib25U",
  authDomain: "glade-software-firebase.firebaseapp.com",
  databaseURL: "https://glade-software-firebase.firebaseio.com",
  projectId: "glade-software-firebase",
  storageBucket: "glade-software-firebase.appspot.com",
  messagingSenderId: "527964919900",
  appId: "1:527964919900:web:dc1ffc9e14a70b08b3ae99",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const functions = getFunctions(app);

// do we get weird behavior by importing these in different components?
export {
  app, auth, functions,
}
