import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { firebaseConfig } from "./firebaseConfig";

/* Initialize Firebase */
firebase.initializeApp(firebaseConfig);
/* Initialize DB */
export const db = firebase.firestore();
/* Initialize auth */
export const auth = firebase.auth();
