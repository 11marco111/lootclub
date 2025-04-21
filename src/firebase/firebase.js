import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

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
const provider = new GoogleAuthProvider();

export { auth, provider };
