// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Y8FFM_yYbVLtbhkqAIcvIM20u4sHHeA",
  authDomain: "travel-guru-b7ad7.firebaseapp.com",
  projectId: "travel-guru-b7ad7",
  storageBucket: "travel-guru-b7ad7.firebasestorage.app",
  messagingSenderId: "806064023960",
  appId: "1:806064023960:web:17cacf242ae9df23f623ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;