// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALXIRlAOUv4FowgpV61jrzTpL4Y0mMJZo",
  authDomain: "authentication-568a2.firebaseapp.com",
  projectId: "authentication-568a2",
  storageBucket: "authentication-568a2.firebasestorage.app",
  messagingSenderId: "734350944333",
  appId: "1:734350944333:web:de993cc42738f64cbbd404",
  measurementId: "G-V7Y7680XE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const db=getFirestore(app)