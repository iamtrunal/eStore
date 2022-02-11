import React, { Fragment } from "react";
import "./FlashDeal.css";

const FlashDeal = () => {
  const info = [
    {
      id:0,
      img: "./images/sofa1.png",
      name: "Sofa Furniture",
      price: 500,
      desc: "Confortable for seatting & Looking good in your interior",
      off: 20,
    },
    {
      id:1,
      img: "./images/s11.png",
      name: "Men's Shoe",
      price: 100,
      desc: "Looking well in your feet & comfortable for Running.",
      off: 25,
    },
    {
      id:2,
      img: "./images/s22.png",
      name: "Men's Shoe",
      price: 70,
      desc: "Looking well in your feet & comfortable for Running.",
      off: 15,
    },
    {
      id:3,
      img: "./images/w44.png",
      name: "Watch",
      price: 50,
      desc: "Beautify your hand & manage time",
      off: 10,
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
                  <i className="fas fa-bolt"></i>Flash Deal
                </h2>
                <div className="col-12 position-relative flashline">
                <i className="fas fa-chevron-circle-left position-absolute changer pre"></i>
                <i className="fas fa-chevron-circle-right position-absolute changer next"></i>
                      <div className="row">
                {info.map((ele, i) => {
                  return (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3 flashbox" key={ele.id}>
            
                     <div className="row">
                     <div className="col-11 m-auto">
                     <div className="row maincard d-flex position-relative">
                        <div className="flashoff position-absolute">
                          {ele.off}% off
                        </div>
                        <div className="col-12 my-2 m-auto flashcard p-4 imgbox overflow-hidden">
                          <img src={ele.img} alt="product" />
                        </div>
                        <div className="col-12 d-flex px-3 justify-content-between align-items-center detail">
                          <p>{ele.name}</p>
                          <p>${ele.price}</p>
                        </div>

                        <div className="col-12 d-flex px-3 justify-content-between align-items-center">
                          <p style={{ color: "#377A98" }}>{ele.desc}</p>
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

export default FlashDeal;
