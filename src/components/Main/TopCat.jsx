import React, { Fragment } from "react";
import "./TopCat.css";

const TopCat = () => {
  const info = [
    {
      id:0,
      img1: "./images/lip1.png",
      img2: "./images/lip2.png",
      img3: "./images/lip3.png",
      name: "Lipstics",
      order: "2K order this week",
    },
    {
      id:1,
      img1: "./images/w11.png",
      img2: "./images/w22.png",
      img3: "./images/w33.png",
      name: "Watches",
      order: "3K order this week",
    },
    {
      id:2,
      img1: "./images/s11.png",
      img2: "./images/s22.png",
      img3: "./images/44.png",
      name: "Shoes",
      order: "1K order this week",
    },
  ];

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "#3f51b51a" }}>
          <div className="col-12">
            <div className="container">
              <div className="row">
                <h2 className="my-3 flashtitle pt-4">
                  <i className="fas fa-th-large"></i>Top Categories
                </h2>
                <div className="col-12 position-relative flashline">
                  <i className="fas fa-chevron-circle-left position-absolute changer pre"></i>
                  <i className="fas fa-chevron-circle-right position-absolute changer next"></i>
                  <div className="row">
                    {info.map((ele, i) => {
                      return (
                        <div className="col-lg-4 col-md-6 col-sm-10 col-12 my-3 px-2 m-auto flashbox" key={ele.id}>
                          <div className="row topcatecard d-flex">
                            <div className="col-12 my-2 m-auto p-2  d-flex justify-content-center align-items-center overflow-hidden overflow-hidden">
                              <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-11 imgbox m-0 p-0">
                                  <img src={ele.img1} alt="product" />
                                  <img src={ele.img2} alt="product" />
                                  <img src={ele.img3} alt="product" />
                                  <div className="overlay m-auto"></div>
                                  <div className="name position-absolute  d-flex justify-content-center align-items-center">{ele.name}</div>
                                  <div className="order position-absolute  d-flex justify-content-center align-items-center">{ele.order}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TopCat;
