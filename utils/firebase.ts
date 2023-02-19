import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0Qlf1D9kdHwnJzz515aFNROU62ja2tXA",
  authDomain: "questionnaire-a98e5.firebaseapp.com",
  projectId: "questionnaire-a98e5",
  storageBucket: "questionnaire-a98e5.appspot.com",
  messagingSenderId: "765323306422",
  appId: "1:765323306422:web:9704170a533e20afa34d17",
  measurementId: "G-VMHJ2WEMZS"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();
export const storage = getStorage();