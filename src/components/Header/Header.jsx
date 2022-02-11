import React, { Fragment, useState } from "react";
import "./Header.css";
import { Button } from "@material-ui/core";
// import CustomerProfile from "../Overlay/CustomerProfile";
// import VendorProfile from "../Overlay/VenderProfile";
import Fab from "@mui/material/Fab";
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Header = (props) => {

 


  return (
    <Fragment>


     
     <div className="container-fluid header">
         <div className="col">
         <div className="container">
        <div className="row d-flex justify-content-between align-items-center ">
          <div className="col-2">
            <h1 className="logo">eStore</h1>
          </div>
          <div className="search col-8 m-0 p-0">
            <i className="fas fa-search mx-2"></i>
            <input type="text" placeholder="Searching for..." />
            <Button color="primary" variant="contained" className="searchbtn">
              Search
            </Button>
          </div>
          <div className="col-2 d-flex justify-content-evenly align-items-center opt position-relative">
        
       
          

         
          </div>
        </div>
      </div>
         </div>
     </div>
    </Fragment>
  );
};

export default Header;
