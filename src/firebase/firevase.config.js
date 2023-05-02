// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuqBK4ivWRTCY9VBZjiXNeWl-lDiBcyK0",
  authDomain: "kitchenise-web.firebaseapp.com",
  projectId: "kitchenise-web",
  storageBucket: "kitchenise-web.appspot.com",
  messagingSenderId: "632284862118",
  appId: "1:632284862118:web:36fc2f75c4b3d4eee9c667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;