// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyALZS7bEJk33NAI1mr9BShqnjM5TRHscDE",
  authDomain: "rockshield-mfb.firebaseapp.com",
  projectId: "rockshield-mfb",
  storageBucket: "rockshield-mfb.appspot.com",
  messagingSenderId: "354641952527",
  appId: "1:354641952527:web:8610a175ab2eb0bdf8487a",
  measurementId: "G-WE9306101P"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {firebaseApp, analytics, db, auth};