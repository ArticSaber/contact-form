
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBfgcUNhQtOz24YVR2nK2n4l2JuVVPlSJ4",
  authDomain: "contactform-5cfa5.firebaseapp.com",
  projectId: "contactform-5cfa5",
  storageBucket: "contactform-5cfa5.appspot.com",
  messagingSenderId: "957132515298",
  appId: "1:957132515298:web:d19ce1c30a76f1d10cfbbb"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);