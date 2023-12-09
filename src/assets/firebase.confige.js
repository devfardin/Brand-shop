// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwCKARxFMDGWapYEP1IqDUqLtEtIZJH9M",
  authDomain: "assignment10-834fd.firebaseapp.com",
  projectId: "assignment10-834fd",
  storageBucket: "assignment10-834fd.appspot.com",
  messagingSenderId: "420521487137",
  appId: "1:420521487137:web:a8bb5132b44a7e6e0bec60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
