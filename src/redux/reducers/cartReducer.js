import {
  ADD_CART,
  ADD_CART_FAILED,
  FETCH_CART,
  REMOVE_CART,
  REMOVE_CART_FAILED,
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
    case ADD_CART:
      return {
        cartItems: [...state.cartItems, action.payload],
      };
    case ADD_CART_FAILED:
      console.log("faild to add");
      return state;
    case REMOVE_CART:
      const newItems = state.cartItems.filter(
        (item, id) => item.id !== action.payload
      );
      return {
        cartItems: newItems,
      };
    case REMOVE_CART_FAILED:
      console.log("faild to remove");
      return state;
    default:
      return state;
  }
};
