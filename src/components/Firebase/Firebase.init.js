// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOvYhlTRef06riN1DNZIr1_XK1vUAVW-Y",
  authDomain: "fir-rotuerproject.firebaseapp.com",
  projectId: "fir-rotuerproject",
  storageBucket: "fir-rotuerproject.firebasestorage.app",
  messagingSenderId: "138901459448",
  appId: "1:138901459448:web:76ab46892456a28222060d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
