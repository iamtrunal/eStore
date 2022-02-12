import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import "./NewArrival.css";
import { addToCart } from "../../redux/actions/actionType";

const NewArrivals = (props) => {
  const dispatch = useDispatch();

  const info = [
    {
      id: 0,
      image: "w22.png",
      name: "Watch",
      unitPrice: 500,
      description: "Confortable for seatting & Looking good in your interior",
    },
    {
      id: 1,
      image: "55.png",
      name: "Men's Shoe",
      unitPrice: 100,
      description: "Looking well in your feet & comfortable for Running.",
    },
    {
      id: 2,
      image: "44.png",
      name: "Men's Shoe",
      unitPrice: 70,
      description: "Looking well in your feet & comfortable for Running.",
    },
    {
      id: 3,
      image: "w33.png",
      name: "Watch",
      unitPrice: 50,
      description: "Beautify your hand & manage time",
    },
    {
      id: 4,
      image: "m1.png",
      name: "Mobile",
      unitPrice: 50,
      description: "Beautify your hand & manage time",
    },
    {
      id: 5,
      image: "w11.png",
      name: "Watch",
      unitPrice: 50,
      description: "Beautify your hand & manage time",
    },
    {
      id: 6,
      image: "m2.png",
      name: "Mobile",
      unitPrice: 50,
      description: "Beautify your hand & manage time",
    },
    {
      id: 7,
      image: "sofa6.png",
      name: "Sofa Furniture",
      unitPrice: 50,
      description: "Beautify your hand & manage time",
    },
    {
      id: 8,
      image: "lap1.png",
      name: "Lap Top",
      unitPrice: 5000,
      description: "Be Digitle",
    },
    {
      id: 9,
      image: "lap2.png",
      name: "Lap Top",
      unitPrice: 5000,
      description: "Be Digitle",
    },
    {
      id: 10,
      image: "lap3.png",
      name: "Lap Top",
      unitPrice: 5000,
      description: "Be Digitle",
    },
    {
      id: 11,
      image: "lap4.png",
      name: "Lap Top",
      unitPrice: 5000,
      description: "Be Digitle",
    },
    {
      id: 12,
      image: "lap5.png",
      name: "Lap Top",
      unitPrice: 5000,
      description: "Be Digitle",
    },
    {
      id: 13,
      image: "bag1.png",
      name: "Lap Top",
      unitPrice: 500,
      description: "College Bag",
    },
    {
      id: 14,
      image: "bag2.png",
      name: "Lap Top",
      unitPrice: 200,
      description: "College Bag",
    },
    {
      id: 15,
      image: "bag3.png",
      name: "Lap Top",
      unitPrice: 100,
      description: "College Bag",
    },
  ];

  const add = (item) => {
    dispatch(addToCart(item));
  };

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
                                    src={`./images/${ele.image}`}
                                    alt="product"
                                    style={{ transition: "0.5s" }}
                                  />
                                </div>
                                <div className="col-12 detail">
                                  <p className="m-0 mx-2">{ele.name}</p>
                                  <p className="m-0 mx-2">${ele.unitPrice}</p>
                                </div>
                                <button
                                  className="btn btn-primary position-absolute"
                                  style={{ bottom: 0 }}
                                  onClick={() => {
                                    add(ele);
                                  }}
                                >
                                  Add To Cart
                                </button>
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
