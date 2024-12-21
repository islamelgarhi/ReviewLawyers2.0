import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcjPy2bpwij_job36ZVoBt-OW-0z6Dak4",
  authDomain: "review-lawyers.firebaseapp.com",
  projectId: "review-lawyers",
  storageBucket: "review-lawyers.firebasestorage.app",
  messagingSenderId: "606784720838",
  appId: "1:606784720838:web:518ea9b3e089ff8b272cc7",
  measurementId: "G-5M6KQQ499M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();