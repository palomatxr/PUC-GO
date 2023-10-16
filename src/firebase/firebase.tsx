// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu_6FkE1arqNoVuPfhQ9iuXPgvR1mD-xY",
  authDomain: "puc-go-31451.firebaseapp.com",
  projectId: "puc-go-31451",
  storageBucket: "puc-go-31451.appspot.com",
  messagingSenderId: "6055345224",
  appId: "1:6055345224:web:ae3d9b33f8ec73d95bac7d",
  measurementId: "G-J6Y66406J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}