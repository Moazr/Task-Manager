// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDun5EMWpZm4KQqyoKYi8vvwaP0UKxAN5E",
  authDomain: "task-manger-moa.firebaseapp.com",
  projectId: "task-manger-moa",
  storageBucket: "task-manger-moa.appspot.com",
  messagingSenderId: "918022654408",
  appId: "1:918022654408:web:2fba438a41f0ba6d13d8fd"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const googleProvider = new GoogleAuthProvider(); 
export const db = getFirestore(app); 