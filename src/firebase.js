// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtRGmHOuUfwfPJveN_LwaENeZov-ecZJ8",
  authDomain: "buddy-9bac1.firebaseapp.com",
  projectId: "buddy-9bac1",
  storageBucket: "buddy-9bac1.appspot.com",
  messagingSenderId: "501094089101",
  appId: "1:501094089101:web:fd01425cdaf9b255457dc4",
  measurementId: "G-EPP2Z0XCFC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
