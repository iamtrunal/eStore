

import { addCartReducer } from "./reducers/cartReducer";
import {combineReducers,createStore} from 'redux';

const rootReducer = combineReducers({addCartReducer})
const store = createStore(rootReducer);

export default store;