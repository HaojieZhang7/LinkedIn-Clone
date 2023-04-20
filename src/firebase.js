import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAf0krRDwEWKTVRiDZxBDh6rrscjt9iWAw",
  authDomain: "linkedin-clone1-beeac.firebaseapp.com",
  projectId: "linkedin-clone1-beeac",
  storageBucket: "linkedin-clone1-beeac.appspot.com",
  messagingSenderId: "960670113950",
  appId: "1:960670113950:web:544dfe3cd8c92eb3055b8f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};