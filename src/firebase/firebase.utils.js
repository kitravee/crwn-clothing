import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBBLL21gVuPtIC5kgIiwStTsIHDKsSHDEc",
  authDomain: "crwn-db-5bc4f.firebaseapp.com",
  databaseURL: "https://crwn-db-5bc4f.firebaseio.com",
  projectId: "crwn-db-5bc4f",
  storageBucket: "crwn-db-5bc4f.appspot.com",
  messagingSenderId: "163208792545",
  appId: "1:163208792545:web:74d5fdc4c31483367faaa0",
  measurementId: "G-VFXKJ14CL2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
