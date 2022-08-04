import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {FacebookAuthProvider, getAuth, GoogleAuthProvider} from "firebase/auth"
import { useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAZh_7DxuZIOwRrN-4CrrJPw-KznKMogwA",
  authDomain: "react-learning-53abc.firebaseapp.com",
  projectId: "react-learning-53abc",
  storageBucket: "react-learning-53abc.appspot.com",
  messagingSenderId: "431007478799",
  appId: "1:431007478799:web:39a0f72f52fe9d80469f7a",
  measurementId: "G-JWE53L2LG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth(app)
export const googleprovider = new GoogleAuthProvider()
export const facebookprovider = new FacebookAuthProvider()


