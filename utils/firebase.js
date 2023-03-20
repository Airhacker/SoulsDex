import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt9bvX1Sd-ESBLpJnBqzEvN_FJ0mSgm38",
  authDomain: "souls-dex-e1cbd.firebaseapp.com",
  projectId: "souls-dex-e1cbd",
  storageBucket: "souls-dex-e1cbd.appspot.com",
  messagingSenderId: "560084281840",
  appId: "1:560084281840:web:a3229b90596ccf34dc9535",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
