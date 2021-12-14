// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH58410kL7xLllRNLRbSYWxn8UqxVbKlY",
  authDomain: "drink-coffee-web.firebaseapp.com",
  projectId: "drink-coffee-web",
  storageBucket: "drink-coffee-web.appspot.com",
  messagingSenderId: "528972108036",
  appId: "1:528972108036:web:75ce2998ec41d358ae0051"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
