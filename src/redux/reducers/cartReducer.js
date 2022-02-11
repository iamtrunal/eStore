import { ADD_CART, REMOVE_CART } from "../const/actionConst"

const initialState = 0;

export const addCartReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_CART : return state + 1;        
        case REMOVE_CART : return state - 1;
        default: return state;
    }
}