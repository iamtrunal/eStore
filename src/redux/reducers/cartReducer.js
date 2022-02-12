import { toast } from "react-toastify";
import {
  ADD_CART_FAILED,
  FETCH_CART,
  REMOVE_CART,
  REMOVE_CART_FAILED,
  UPDATE_CART_FAILED,
} from "../const/actionConst";

const initialState = {
  cartItems: [],
};

export const addCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART:
      return {
        cartItems: action.payload,
      };
    case ADD_CART_FAILED:
      toast.error("Failed to add item in cart");
      return state;
    case REMOVE_CART:
      const newItems = state.cartItems.filter(
        (item, id) => item.id !== action.payload
      );
      return {
        cartItems: newItems,
      };
    case REMOVE_CART_FAILED:
      toast.error("Failed to remove item in cart");
      return state;
    case UPDATE_CART_FAILED:
      toast.error("Failed to update item in cart");
      return state;
    default:
      return state;
  }
};
