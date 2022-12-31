// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm94mvXf_JbfslHhjMG4JuXD3_doFayTE",
  authDomain: "todo-32852.firebaseapp.com",
  projectId: "todo-32852",
  storageBucket: "todo-32852.appspot.com",
  messagingSenderId: "417295560502",
  appId: "1:417295560502:web:eca6357024c089a1f0cd97",
  measurementId: "G-RRLYM1Y446"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);