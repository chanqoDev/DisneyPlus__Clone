import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATWidi2vH2X2OvBbJLAyG6mhAwLysyrGE",
  authDomain: "disneyplus-clone-3aef7.firebaseapp.com",
  projectId: "disneyplus-clone-3aef7",
  storageBucket: "disneyplus-clone-3aef7.appspot.com",
  messagingSenderId: "1022525256841",
  appId: "1:1022525256841:web:46f88f9809c85c59054258",
  measurementId: "G-CWF7QF8CCL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
