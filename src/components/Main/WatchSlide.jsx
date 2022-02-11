import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
const WatchSlide = () => {
  const [landingimg, setLandingimg] = useState(0);
  const [bordernum, setBordernum] = useState(2);


  const wimg=[
    {
      img:"./images/w11.png"
    },
    {
      img:"./images/w22.png"
    },
    {
      img:"./images/w33.png"
    },
    {
      img:"./images/w44.png"
    },
    {
      img:"./images/w55.png"
    }
  ]


  const nextshoe = () =>{
    landingimg===4? setLandingimg(0) : setLandingimg(landingimg + 1);
  }
  setTimeout(nextshoe,2000);


  return (
    <Fragment>
      <div className="row slider">
        <div className="col-6 mainpicbox p-4">
          <motion.img
            src={wimg[landingimg].img}
            alt="mainimg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="col-6 overflow-hidden text">
          <motion.h1
            initial={{ opacity: 0, y: "-50vh" }}
            animate={{ opacity: 1, y: "0vh" }}
            transition={{ duration: 1.1 }}
            className="mt-5 text-center"
          >
            eBazar Store...
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: "-50vh" }}
            animate={{ opacity: 1, y: "0vh" }}
            transition={{ duration: 0.8 }}
            className="m-0 text-center"
          >
            Shopping On Your Time
          </motion.h1>

          <motion.h4
            initial={{ opacity: 0, y: "-50vh" }}
            animate={{ opacity: 1, y: "0vh" }}
            transition={{ duration: 0.5 }}
            className="text-center mt-4"
          >
            "Shop as per your Time, and get wondefull services on Goods which
            provides high level of satisfaction of shoping."
          </motion.h4>
          <div className="row imgvariant watches">
            <div className="col-12 sofaset mt-5 overflow-hidden">








              <motion.div
                className="py-2 watchimg"
               
                initial={{ x: "100vh" }}
                animate={{ x: "0vh" }}
                transition={{ duration: 0.5 }}
                style={landingimg === 0 ? { borderColor: "#48494B" } : {}}
              >
                <img
                  src="./images/w11.png"
                  alt="sofa"
                 
                  // onClick={() => {
                  //   setLandingimg("./images/w11.png");
                  //   setBordernum(5);
                  // }}
                />
              </motion.div>

              <motion.div
                className="py-2 watchimg"
             
                initial={{ x: "100vh" }}
                animate={{ x: "0vh" }}
                transition={{ duration: 0.6 }}
                style={landingimg === 1 ? { borderColor: "#48494B" } : {}}
              >
                <img
                  src="./images/w22.png"
                  alt="sofa"
                  
                  // onClick={() => {
                  //   setLandingimg("./images/w22.png");
                  //   setBordernum(2);
                  // }}
                />
              </motion.div>

              <motion.div
              style={landingimg === 2 ? { borderBottomColor: "#48494B" } : {}}
                className="py-2 watchimg"
              
                initial={{ x: "100vh" }}
                animate={{ x: "0vh" }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src="./images/w33.png"
                  alt="sofa"
             
                  // onClick={() => {
                  //   setLandingimg("./images/w33.png");
                  //   setBordernum(3);
                  // }}
                />
              </motion.div>

              <motion.div
                className="py-2 watchimg"
               
                initial={{ x: "100vh" }}
                animate={{ x: "0vh" }}
                transition={{ duration: 0.8 }}
                style={landingimg === 3 ? { borderColor: "#48494B" } : {}}
              >
                <img
                  src="./images/w44.png"
                  alt="sofa"
                
                  // onClick={() => {
                  //   setLandingimg("./images/w44.png");
                  //   setBordernum(4);
                  // }}
                />
              </motion.div>

              <motion.div
                className="py-2 watchimg"
               
                initial={{ x: "100vh" }}
                animate={{ x: "0vh" }}
                transition={{ duration: 0.9 }}
                style={landingimg === 4 ? { borderColor: "#48494B" } : {}}
              >
                <img
                  src="./images/w55.png"
               
                  alt="sofa"
                  // onClick={() => {
                  //   setLandingimg("./images/w55.png");
                  //   setBordernum(1);
                  // }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WatchSlide;
