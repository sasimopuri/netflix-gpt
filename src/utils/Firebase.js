// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg6QNQ3HUy96FYrkkDrP28rr9mWTrXrBE",
  authDomain: "netflix-gpt-45478.firebaseapp.com",
  projectId: "netflix-gpt-45478",
  storageBucket: "netflix-gpt-45478.firebasestorage.app",
  messagingSenderId: "534127334309",
  appId: "1:534127334309:web:9519b29489cbd86a30ce4c",
  measurementId: "G-MT86GRW9WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);