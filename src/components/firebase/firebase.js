import {getFirestore} from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUJopZzEKxsySBYhA_IyVzxUaaVCYRv3A",
  authDomain: "vue-firebase-crud-a2046.firebaseapp.com",
  projectId: "vue-firebase-crud-a2046",
  storageBucket: "vue-firebase-crud-a2046.appspot.com",
  messagingSenderId: "1094365634516",
  appId: "1:1094365634516:web:b0e62ffae04b11e6c2c041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = getFirestore(app)


export {db, app}