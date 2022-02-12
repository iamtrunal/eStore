import { toast } from "react-toastify";
import { db } from "../../Firebase";
import {
  ADD_CART_FAILED,
  FETCH_CART,
  REMOVE_CART,
  REMOVE_CART_FAILED,
  UPDATE_CART_FAILED,
} from "../const/actionConst";

export const fetchCart = (items) => {
  return async (dispatch, getState) => {
    await db
      .collection("cartItems")
      .get()
      .then((querySnapshot) => {
        let products = [];
        querySnapshot.forEach((doc) => {
          let prod = {
            id: doc.id,
            productId: doc.data().productId,
            name: doc.data().name,
            description: doc.data().description,
            image: doc.data().image,
            qty: doc.data().qty,
            totalPrice: doc.data().totalPrice,
            unitPrice: doc.data().unitPrice,
          };

          products.push(prod);
        });

        dispatch({ type: FETCH_CART, payload: products });
      })
      .catch((error) => toast.error("Failed to fetch cart"));
  };
};

export const addToCart = (item) => {
  return async (dispatch, getState) => {
    const itemObj = {
      ...item,
      productId: item.id,
      qty: 1,
      totalPrice: item.unitPrice,
    };
    const allItems = getState().addCartReducer.cartItems;
    const index = allItems.findIndex((i) => i.productId === item.id);

    if (index >= 0) {
      toast.info("Item already added in cart");
    } else {
      try {
        await db.collection("cartItems").doc().set(itemObj);
        dispatch(fetchCart());
      } catch {
        dispatch({ type: ADD_CART_FAILED });
      }
    }
  };
};

export const updateCart = (item, action) => {
  return async (dispatch, getState) => {
    const allItems = getState().addCartReducer.cartItems;
    const selectedItem = allItems.find((i) => i.id === item.id);
    const itemObj = {
      ...item,
    };

    if (action === "add") {
      itemObj.qty = selectedItem.qty + 1;
      itemObj.totalPrice = selectedItem.totalPrice + selectedItem.unitPrice;
    } else {
      itemObj.qty = selectedItem.qty - 1;
      itemObj.totalPrice = selectedItem.totalPrice - selectedItem.unitPrice;
    }
    if (itemObj.qty <= 0) {
      toast.info("Item removed from cart");
      dispatch(removeItemFromCart(item.id));
    } else {
      try {
        await db.collection("cartItems").doc(item.id).update(itemObj);
        dispatch(fetchCart());
      } catch {
        dispatch({ type: UPDATE_CART_FAILED });
      }
    }
  };
};

export const removeItemFromCart = (id) => {
  return async (dispatch, getState) => {
    try {
      await db.collection("cartItems").doc(id).delete();
      dispatch(fetchCart());
    } catch {
      dispatch({ type: REMOVE_CART_FAILED });
    }
  };
};

export const removeAction = {
  type: REMOVE_CART,
};
