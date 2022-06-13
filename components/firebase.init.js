// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_KGfcPgREcmWiIH-BGRAfomlT6EHEE90",
  authDomain: "clone-41b20.firebaseapp.com",
  projectId: "clone-41b20",
  storageBucket: "clone-41b20.appspot.com",
  messagingSenderId: "231267212908",
  appId: "1:231267212908:web:b1f9bee49843cbb37f8249",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
