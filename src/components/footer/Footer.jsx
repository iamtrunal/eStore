import React, { Fragment } from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 footerbody py-5" >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="row d-flex justify-content-between align-items-flex-start">
                    <div className="col-md-5 my-2">
                      <div className="row">
                      <div className="col-12 title d-flex flex-column justify-content-flex-start align-items-center">
                        <h1 className="text-center">eStore</h1>
                      </div>
                      <div className="col-12 description">
                        <p>
                          We <span>eStore</span> is well known leading estore in india. We provides all types of Goods &
                          Services you need in daily life. Like Electronics,
                          Clothes, Cosmetics and special need for children toys and
                          clothes as well...
                        </p>
                      </div>
                      </div>
                    </div>

                    <div className="col-md-3 my-3">
                        <div className="row">
                            <div className="col-12 menulink">
                              <h3>Links</h3> <br />
                              <p>Home</p>
                              <p>Services</p>
                              <p>About Us</p>
                              <p>Join With Us</p>
                              <p>Why Us?</p>
                              <p>Our Best Schems</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 my-3">
                        <div className="row">
                            <div className="col-12 menulink">
                                <h3>Other</h3>
                                <p>Our Team</p>
                                <p>About Us</p>
                                <p>My Account</p>
                                <p>Order Tracking</p>
                                <p>FAQs</p>                            
                            </div>
                            <div className="col-12 social d-flex justify-content-center">
                            <i className="bi bi-whatsapp mx-2"></i>
                            <i className="bi bi-instagram mx-2"></i>
                            <i className="bi bi-envelope mx-2"></i>
                            <i className="bi bi-twitter mx-2"></i>

                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footerrights">
          <div className="row">
          <div className="col-12 rights py-1">
              <p className="m-0 text-center">Copyright © 2022 eStore. All rights reserved.</p>
          </div>
          </div>
      </div>
    </Fragment>
  );
};

export default Footer;
