import { addCartReducer } from "./reducers/cartReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ addCartReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
