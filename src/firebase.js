import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   check the app on the hosted site; code is for demonstration purposes
};
//initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize the DB
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
