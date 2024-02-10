// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA7JTSd9vwlIgZjYFqSRAvtDo6EcXGUA-k",
  authDomain: "socialmedia-c7091.firebaseapp.com",
  projectId: "socialmedia-c7091",
  storageBucket: "socialmedia-c7091.appspot.com",
  messagingSenderId: "493297432997",
  appId: "1:493297432997:web:f5b05d78be8c992ee1d04c",
  measurementId: "G-CJLMDB4VRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();