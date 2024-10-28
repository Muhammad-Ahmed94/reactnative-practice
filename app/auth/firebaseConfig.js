// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyAA5hahI1gX6APVlizWORWmR_Xq700prh4",
  authDomain: "aora-prac.firebaseapp.com",
  projectId: "aora-prac",
  storageBucket: "aora-prac.appspot.com",
  messagingSenderId: "422534008070",
  appId: "1:422534008070:web:fb48566e09ac3fa1416287",
  measurementId: "G-RXY5GKT83J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signin = signInWithPopup();
export { app, auth, googleProvider };
