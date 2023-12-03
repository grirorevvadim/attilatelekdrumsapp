// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH4fh1GgnU0ZJKTsrw3ZKOeSpwBtoU8ZA",
  authDomain: "attilatelekdrums.firebaseapp.com",
  projectId: "attilatelekdrums",
  storageBucket: "attilatelekdrums.appspot.com",
  messagingSenderId: "999186059714",
  appId: "1:999186059714:web:913ac8851c8fcbde34865b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;