import { toast } from "react-toastify";
import { db } from "../../Firebase";
import {
  ADD_CART,
  ADD_CART_FAILED,
  FETCH_CART,
  REMOVE_CART,
  REMOVE_CART_FAILED,
} from "../const/actionConst";

export const fetchCart = (items) => {
  return { type: FETCH_CART, payload: items };
};

export const addToCart = (item) => {
  return async (dispatch, getState) => {
    const itemObj = {
      productId: item.id,
      name: item.name,
      description: item.desc,
      qty: 1,
      totalPrice: item.unitPrice,
      unitPrice: item.unitPrice,
    };
    const allItems = getState().addCartReducer.cartItems;
    const index = allItems.findIndex((i) => i.productId === item.id);

    if (index >= 0) {
      toast.info("Item already added in cart");
    } else {
      try {
        await db.collection("cartItems").doc().set(itemObj);
        dispatch({ type: ADD_CART, payload: itemObj });
      } catch {
        dispatch({ type: ADD_CART_FAILED });
      }
    }
  };
};

export const removeItemFromCart = (id) => {
  return async (dispatch, getState) => {
    try {
      await db.collection("cartItems").doc(id).delete();
      dispatch({ type: REMOVE_CART, payload: id });
    } catch {
      dispatch({ type: REMOVE_CART_FAILED });
    }
  };
};

export const removeAction = {
  type: REMOVE_CART,
};
