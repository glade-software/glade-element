import * as firebase from 'firebase';
import 'firebase/auth';

function getFirebaseInstance () {
  const firebaseConfig = {
    apiKey: "AIzaSyAtc2ed5rsHT7IOF9E1psFhkqtCqKib25U",
    authDomain: "glade-software-firebase.firebaseapp.com",
    databaseURL: "https://glade-software-firebase.firebaseio.com",
    projectId: "glade-software-firebase",
    storageBucket: "glade-software-firebase.appspot.com",
    messagingSenderId: "527964919900",
    appId: "1:527964919900:web:dc1ffc9e14a70b08b3ae99",
  };

  if(firebase.apps.length < 1){
    return firebase.initializeApp(firebaseConfig);
  }
  
  return firebase;
}

const instance = getFirebaseInstance();

export default instance;