import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDNfsUc0pXZf3PHRXPgxzCJ3I9ZQy9HrBY",
  authDomain: "lootclubauth.firebaseapp.com",
  projectId: "lootclubauth",
  storageBucket: "lootclubauth.firebasestorage.app",
  messagingSenderId: "655993053395",
  appId: "1:655993053395:web:3019fd2271c33377aaf426"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, googleProvider as provider, facebookProvider };
