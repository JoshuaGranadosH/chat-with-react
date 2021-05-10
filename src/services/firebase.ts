import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const { REACT_APP_APIKEY } = process.env;

firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINSENDERID,
  appId: process.env.REACT_APP_APPID,
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, firestore, googleProvider, firebase };
