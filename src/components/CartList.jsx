import React, {Fragment} from "react";
import "./CartList.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {removeAction, addAction} from "../redux/actions/actionType";

const CartList = () => {


    const dispatch = useDispatch();
    
    const products = useSelector((state)=>state.addCartReducer);


    const remove = () => {
        dispatch(removeAction);
    }


    return(
        <Fragment>
            <div className="cartlist poeition-relative">
                <h3>Total Products : {products} </h3>
                <button className="btn btn-danger position-absolute" style={{bottom:"10px", width:"100%"}} onClick={remove}>Remove</button>
            </div>
        </Fragment>
    );
}

export default CartList;