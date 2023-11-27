// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDoN9hc94RIeaIEHB9CLI9CQjx7tKES3OE",
  authDomain: "rockshield-67f0a.firebaseapp.com",
  projectId: "rockshield-67f0a",
  storageBucket: "rockshield-67f0a.appspot.com",
  messagingSenderId: "685150980006",
  appId: "1:685150980006:web:aa51f0f927445924ea3167",
  measurementId: "G-TVB8XFCSLE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {firebaseApp, analytics};