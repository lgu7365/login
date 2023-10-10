import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBBh2vZhDRqQxAkK0YwSR7W8Sb5roDciRg",
  authDomain: "login-2559a.firebaseapp.com",
  projectId: "login-2559a",
  storageBucket: "login-2559a.appspot.com",
  messagingSenderId: "1048703529117",
  appId: "1:1048703529117:web:ee06875bb5111962c22474"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();