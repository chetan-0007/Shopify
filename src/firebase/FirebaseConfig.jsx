// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZU_bwiCsYgzBo3bMqkcewkybWFeIWXGQ",
  authDomain: "ecommerceapp-1151c.firebaseapp.com",
  projectId: "ecommerceapp-1151c",
  storageBucket: "ecommerceapp-1151c.appspot.com",
  messagingSenderId: "856373569",
  appId: "1:856373569:web:59ff7ae4496f58f287c9c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB= getFirestore(app);
const auth=getAuth(app);

export {fireDB, auth}