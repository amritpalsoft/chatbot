// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC67pC8o60qszcWhEGropBrgaOs6m4g6oo",
  authDomain: "react-chatbot-38f20.firebaseapp.com",
  projectId: "react-chatbot-38f20",
  storageBucket: "react-chatbot-38f20.appspot.com",
  messagingSenderId: "630691897648",
  appId: "1:630691897648:web:995fdad75274c3cb88a8f5",
  measurementId: "G-7BB5E3RQL7"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const goggleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { auth, goggleAuthProvider, db };
