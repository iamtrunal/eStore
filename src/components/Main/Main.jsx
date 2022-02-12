import React, { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader";
import "./Main.css";
import SofaSlide from "./LapSlide";
import WatchSlide from "./WatchSlide";
import ShoeSlide from "./shoeSlide";
import TogMenu from "./TogMenu";
import FlashDeal from "./FlashDeal";
import NewArrivals from "./NewArrivals";
import CartList from "../CartList";
import { fetchCart } from "../../redux/actions/actionType";

const Main = () => {
  const [cartlist, setCartlist] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const open = () => {
    setCartlist(true);
  };
  const carttog = () => {
    setCartlist(!cartlist);
  };

  return (
    <Fragment>
      <Header />
      <SubHeader fun={carttog} />
      {cartlist && <CartList fun={carttog} />}
      <NewArrivals fun={open} />
      <ToastContainer />
    </Fragment>
  );
};

export default Main;
