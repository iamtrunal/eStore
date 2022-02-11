import React, { Fragment } from "react";
import "./NewArrival.css";
import { useDispatch } from 'react-redux';
import {addAction} from "../../redux/actions/actionType";




const NewArrivals = (props) => {

  const dispatch = useDispatch();


  const info = [
    {
      id: 0,
      img: "./images/w22.png",
      name: "Watch",
      price: 500,
      desc: "Confortable for seatting & Looking good in your interior",
    },
    {
      id: 1,
      img: "./images/55.png",
      name: "Men's Shoe",
      price: 100,
      desc: "Looking well in your feet & comfortable for Running.",
    },
    {
      id: 2,
      img: "./images/44.png",
      name: "Men's Shoe",
      price: 70,
      desc: "Looking well in your feet & comfortable for Running.",
    },
    {
      id: 3,
      img: "./images/w33.png",
      name: "Watch",
      price: 50,
      desc: "Beautify your hand & manage time",
    },
    {
      id: 4,
      img: "./images/m1.png",
      name: "Mobile",
      price: 50,
      desc: "Beautify your hand & manage time",
    },
    {
      id: 5,
      img: "./images/w11.png",
      name: "Watch",
      price: 50,
      desc: "Beautify your hand & manage time",
    },
    {
      id: 6,
      img: "./images/m2.png",
      name: "Mobile",
      price: 50,
      desc: "Beautify your hand & manage time",
    },
    {
      id: 7,
      img: "./images/sofa6.png",
      name: "Sofa Furniture",
      price: 50,
      desc: "Beautify your hand & manage time",
    },
    {
      id: 8,
      img: "./images/lap1.png",
      name: "Lap Top",
      price: 5000,
      desc: "Be Digitle",
    },
    {
      id: 9,
      img: "./images/lap2.png",
      name: "Lap Top",
      price: 5000,
      desc: "Be Digitle",
    },
    {
      id: 10,
      img: "./images/lap3.png",
      name: "Lap Top",
      price: 5000,
      desc: "Be Digitle",
    },
    {
      id: 11,
      img: "./images/lap4.png",
      name: "Lap Top",
      price: 5000,
      desc: "Be Digitle",
    },
    {
      id: 12,
      img: "./images/lap5.png",
      name: "Lap Top",
      price: 5000,
      desc: "Be Digitle",
    },
    {
      id: 13,
      img: "./images/bag1.png",
      name: "Lap Top",
      price: 500,
      desc: "College Bag",
    },
    {
      id: 14,
      img: "./images/bag2.png",
      name: "Lap Top",
      price: 200,
      desc: "College Bag",
    },
    {
      id: 15,
      img: "./images/bag3.png",
      name: "Lap Top",
      price: 100,
      desc: "College Bag",
    },
  ];

  const add = () => {
    dispatch(addAction);
    props.fun()
}

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "#3f51b51a" }}>
          <div className="col-12">
            <div className="container">
              <div className="row">
                <h2 className="my-3 flashtitle pt-4">
                  <i className="far fa-sun"></i>New Arrivals
                </h2>
                <div className="col-12 position-relative newline">
                  <div className="row">
                    {info.map((ele, i) => {
                      return (
                        <div
                          className="col-lg-3 col-md-4 col-sm-6 col-12 my-3 flashbox"
                          key={ele.id}
                        >
                          <div className="row">
                            <div className="col-11 m-auto">
                              <div className="row newcard d-flex position-relative">
                                <div className="col-12 my-2 m-auto flashcard p-4 imgbox overflow-hidden">
                                  <img
                                    src={ele.img}
                                    alt="product"
                                    style={{ transition: "0.5s" }}
                                  />
                                </div>
                                <div className="col-12 detail">
                                  <p className="m-0 mx-2">{ele.name}</p>
                                  <p className="m-0 mx-2">${ele.price}</p>
                                </div>
                                <button className="btn btn-primary position-absolute" style={{bottom:0}} onClick={add}>Add To Cart</button>
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

export default NewArrivals;
