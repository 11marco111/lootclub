import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNfsUc0pXZf3PHRXPgxzCJ3I9ZQy9HrBY",
  authDomain: "lootclubauth.firebaseapp.com",
  projectId: "lootclubauth",
  storageBucket: "lootclubauth.firebasestorage.app",
  messagingSenderId: "655993053395",
  appId: "1:655993053395:web:3019fd2271c33377aaf426"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
