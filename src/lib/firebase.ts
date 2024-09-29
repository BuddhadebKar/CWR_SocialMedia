
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDQuDiIAviukdW62bSSoaDgYir65Wh0Op0",
  authDomain: "social-media-cfe7b.firebaseapp.com",
  projectId: "social-media-cfe7b",
  storageBucket: "social-media-cfe7b.appspot.com",
  messagingSenderId: "288424138564",
  appId: "1:288424138564:web:9f6353680574255c8c2911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const bucket = getStorage(app);