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

export const getCartItems = (db) => {
  return new Promise((resolve, reject) => {
    db.collection("cartItems")
      .get()
      .then((querySnapshot) => {
        let products = [];
        querySnapshot.forEach((doc) => {
          let prod = {
            id: doc.id,
            productId: doc.data().productId,
            name: doc.data().name,
            desc: doc.data().description,
            qty: doc.data().qty,
            totalPrice: doc.data().totalPrice,
            unitPrice: doc.data().unitPrice,
          };

          products.push(prod);
        });
        resolve(products);
      })
      .catch((error) => reject(error));
  });
};
