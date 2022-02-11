import React, { Fragment } from "react";
import "./CartList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/actions/actionType";

const CartList = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.addCartReducer);

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <Fragment>
      <div className="cartlist poeition-relative">
        <h3>Total Products : </h3>
        {cartItems.map((item, i) => {
          return (
            <div className="row" key={item.id}>
              <div className="col-6 m-auto">
                <img
                  src={item.img}
                  alt="product"
                  style={{ transition: "0.5s" }}
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="col-6 m-auto">
                <p className="m-0 mx-2">{item.name}</p>
                <p className="m-0 mx-2">${item.unitPrice}</p>
                <p className="m-0 mx-2">QTY : {item.qty}</p>
                <button
                  className="btn btn-danger "
                  style={{ bottom: "10px", width: "100%" }}
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CartList;
