// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzwr5vRh9rpXt-CjWdLBDK03OOpSvttzo",
  authDomain: "reactlearning-694e3.firebaseapp.com",
  projectId: "reactlearning-694e3",
  storageBucket: "reactlearning-694e3.appspot.com",
  messagingSenderId: "47862539611",
  appId: "1:47862539611:web:e5e7c2d887741f8b5c667e",
  measurementId: "G-02ZF8PSDPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);