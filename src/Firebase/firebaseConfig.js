import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyAUcrP0xf7tG3r9CJoe-15eUS6aza__-dw",
  authDomain: "estore-9e27c.firebaseapp.com",
  projectId: "estore-9e27c",
  storageBucket: "estore-9e27c.appspot.com",
  messagingSenderId: "496996202110",
  appId: "1:496996202110:web:66c3afd1b155ef48154a2f",
  measurementId: "G-PGBBTBTG1T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
