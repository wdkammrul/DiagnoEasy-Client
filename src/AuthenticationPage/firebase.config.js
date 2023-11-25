// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvBnqj8VhhEzbUeOIjemsjiRqwYMTWBT4",
  authDomain: "diagnoeasy-7c73c.firebaseapp.com",
  projectId: "diagnoeasy-7c73c",
  storageBucket: "diagnoeasy-7c73c.appspot.com",
  messagingSenderId: "745263898969",
  appId: "1:745263898969:web:55fe7f046f9a2c4e016c48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
