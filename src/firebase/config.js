import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMPpoU2Rq1l7jgXaceajyfAjJd_E4tCWE",
  authDomain: "vinyas-firegram.firebaseapp.com",
  databaseURL: "https://vinyas-firegram.firebaseio.com",
  projectId: "vinyas-firegram",
  storageBucket: "vinyas-firegram.appspot.com",
  messagingSenderId: "147516953509",
  appId: "1:147516953509:web:b5f4fb680958eba2080e4c",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
