import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCP3QXqOAiuzTuGOQCM5PiM6rs4a32Fv-4",
    authDomain: "clone-c945b.firebaseapp.com",
    projectId: "clone-c945b",
    storageBucket: "clone-c945b.appspot.com",
    messagingSenderId: "179592944974",
    appId: "1:179592944974:web:f2087686c846e89c06921f",
    measurementId: "G-WGMSHWVBP6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }