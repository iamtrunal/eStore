import React, { Fragment, useState, useEffect } from "react";
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





const Main = (props) => { 




  const[cartlist, setCartlist] = useState(false);

const open=() => {
setCartlist(true);
}
  const carttog = () => {
    setCartlist(!cartlist);
  }

  return (
    <Fragment>
      <Header />
      <SubHeader fun={carttog} />
{ cartlist && <CartList fun={carttog}/>}
       <NewArrivals fun={open} />
    </Fragment>
  );
};

export default Main;
