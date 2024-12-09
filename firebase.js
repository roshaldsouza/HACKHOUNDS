// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_3WORLAMql5AOHiit_PqNo39dyM88o1Q",
  authDomain: "mindcare-9db1e.firebaseapp.com",
  projectId: "mindcare-9db1e",
  storageBucket: "mindcare-9db1e.firebasestorage.app",
  messagingSenderId: "577320992768",
  appId: "1:577320992768:web:65989e6499255542bb18e5",
  measurementId: "G-4EXL1FWX2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
