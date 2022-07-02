// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGluqype4AphvEAdePjDq2CeDzec-7xcc",
  authDomain: "to-do-list-20811.firebaseapp.com",
  projectId: "to-do-list-20811",
  storageBucket: "to-do-list-20811.appspot.com",
  messagingSenderId: "1002551056344",
  appId: "1:1002551056344:web:1d0bb17f3060fb1934c4ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
