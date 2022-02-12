import React, { Fragment } from "react";
import "./CartList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItemFromCart, updateCart } from "../redux/actions/actionType";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartList = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.addCartReducer);

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const addOrRemoveItems = (item, action) => {
    dispatch(updateCart(item, action));
  };

  const totalProuctdetails = () => {
    var totalPrice = 0;
    var totalProuct = 0;
    cartItems.forEach((item) => {
      totalPrice += item.totalPrice;
      totalProuct += item.qty;
    });
    return {
      totalPrice,
      totalProuct,
    };
  };

  return (
    <Fragment>
      <div className="cartlist poeition-relative">
        <h3>Total Products :{totalProuctdetails().totalProuct} </h3>
        {cartItems.map((item, i) => {
          return (
            <div className="row" key={item.id}>
              <div className="col-6 m-auto">
                <img
                  src={`./images/${item.image}`}
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
                <div className="d-flex justify-content-between">
                  <p className="m-auto"> ${item.totalPrice}</p>
                  <IconButton
                    aria-label="add"
                    color="primary"
                    onClick={() => {
                      addOrRemoveItems(item, "add");
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                  <p className="m-auto"> {item.qty}</p>
                  <IconButton
                    aria-label="remove"
                    color="primary"
                    onClick={() => {
                      addOrRemoveItems(item, "remove");
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>
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
        <h3>Total Price : ${totalProuctdetails().totalPrice}</h3>
      </div>
    </Fragment>
  );
};

export default CartList;
