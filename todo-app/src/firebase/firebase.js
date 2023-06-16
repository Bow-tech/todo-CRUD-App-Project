// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTHDOMAIN,
  projectId: YOUR_PROJECTID,
  storageBucket: YOUR_STORAGEBUCKET,
  messagingSenderId: YOUR_MESSAGING_SENDER_ID,
  appId: YOUR_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//

export const db =getFirestore(app)
