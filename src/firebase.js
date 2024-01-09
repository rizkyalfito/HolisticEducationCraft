// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChM732aBuOv3Nd9hx13uP0UsoVlmadgAI",
  authDomain: "backvurner.firebaseapp.com",
  projectId: "backvurner",
  storageBucket: "backvurner.appspot.com",
  messagingSenderId: "771082228449",
  appId: "1:771082228449:web:c8231363abe05be5091da0",
  measurementId: "G-CJ1PRKKY4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)