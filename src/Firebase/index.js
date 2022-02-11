import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";



// import firebase from "firebase/app";
//  import "firebase/dstorage"



 const firebaseConfig = {
    apiKey: "AIzaSyBY7ZZgIDmUN4n3tXYsQXglzqr7MEXniZo",
    authDomain: "estore-30f5b.firebaseapp.com",
    projectId: "estore-30f5b",
    storageBucket: "estore-30f5b.appspot.com",
    messagingSenderId: "852152653152",
    appId: "1:852152653152:web:a005406d2e02d31f7fba05"
  };
  

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);