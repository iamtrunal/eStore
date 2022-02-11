import React, { Fragment, useState } from "react";
import Fab from "@mui/material/Fab";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const SubHeader = (props) => {
  const { cartItems } = useSelector((state) => state.addCartReducer);

  const showcart = () => {
    props.fun();
  };

  return (
    <Fragment>
      <div className="container-fluid py-2 subhead">
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-7 m-0 p-0 d-flex justify-content-end menu">
                  <p className="mx-4 m-0 p-0">All</p>
                  <p className="mx-4 m-0 p-0">Today's deals</p>
                  <p className="mx-4 m-0 p-0">Mobile</p>
                  <p className="mx-4 m-0 p-0">Fashion</p>
                  <p className="mx-4 m-0 p-0">Appliances</p>
                </div>
                <div className="col-3 m-0 p-0">
                  <Badge badgeContent={cartItems.length} color="secondary">
                    <Fab
                      color="primary"
                      aria-label="add"
                      size="small"
                      title="Add To Cart"
                    >
                      <ShoppingCartIcon onClick={showcart} />
                    </Fab>
                  </Badge>
                  <Fab
                    color="primary"
                    aria-label="add"
                    size="small"
                    className="mx-2"
                    title="My Orders"
                  >
                    <ShoppingBagIcon />
                  </Fab>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SubHeader;
