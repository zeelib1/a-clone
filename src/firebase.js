// import firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu4lbS5klRKnV2gfCTyTE7B-jD6FIqDfE",
  authDomain: "clone-7c690.firebaseapp.com",
  projectId: "clone-7c690",
  storageBucket: "clone-7c690.appspot.com",
  messagingSenderId: "859923958345",
  appId: "1:859923958345:web:3ca628a29c2ea116cecd98",
  measurementId: "G-Y9Y597YMSP"
};
//initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize the DB
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
