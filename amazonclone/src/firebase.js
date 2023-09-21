import firebase from 'firebase/compat/app'; // Import Firebase's compat/app module
import 'firebase/compat/auth'; // Import the Firebase authentication module
import 'firebase/compat/firestore'; // Import the Firebase Firestore module


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuVcplEqFRrDFd3XPIceob1XpFGFl3CoU",
  authDomain: "clone-7095d.firebaseapp.com",
  projectId: "clone-7095d",
  storageBucket: "clone-7095d.appspot.com",
  messagingSenderId: "419091646943",
  appId: "1:419091646943:web:7f14dd17828bda4d8ddc6a",
  measurementId: "G-3Z5FWZ1ZRM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };