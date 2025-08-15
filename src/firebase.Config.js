// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-880JWGcvG6GtUES-vvGX5_eJgPwlwWM",
  authDomain: "awera-comments.firebaseapp.com",
  projectId: "awera-comments",
  storageBucket: "awera-comments.firebasestorage.app",
  messagingSenderId: "1078298226134",
  appId: "1:1078298226134:web:857be06d93c8ed58adc877"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
