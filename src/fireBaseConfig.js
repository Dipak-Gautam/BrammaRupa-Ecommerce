// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXEJ1M5c8vVbl4Tg28WAuCI5xQBV6wo5s",
  authDomain: "ecommercebr-aa441.firebaseapp.com",
  projectId: "ecommercebr-aa441",
  storageBucket: "ecommercebr-aa441.firebasestorage.app",
  messagingSenderId: "1019893324725",
  appId: "1:1019893324725:web:7313d2fec04375100057fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
