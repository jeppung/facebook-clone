// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeoZNFhAhe42nWFn-nb9PT1Xbtpb80fis",
  authDomain: "facebook-clone-cd1ea.firebaseapp.com",
  projectId: "facebook-clone-cd1ea",
  storageBucket: "facebook-clone-cd1ea.appspot.com",
  messagingSenderId: "841545443622",
  appId: "1:841545443622:web:b7a953ad4fb0c5675a39e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export {
    auth, db, storage
};
