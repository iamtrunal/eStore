import React, { Fragment, useState } from "react";
import {motion} from "framer-motion";


const shoeimg = [
{
  img:"./images/s11.png"
},
{
  img:"./images/s22.png"
},
{
  img:"./images/s33.png"
},
{
  img:"./images/44.png"
},
{
  img:"./images/55.png"
}

]

const ShoeSlide = () => {

  const [landingimg, setLandingimg] = useState(0);


  

  const nextshoe = () =>{
    landingimg===4? setLandingimg(0) : setLandingimg(landingimg + 1);
  }
  setTimeout(nextshoe,2000);


  return (
    <Fragment>
      <div className="row slider">
        <div className="col-6 mainpicbox p-4">
          <motion.img src={shoeimg[landingimg].img} alt="mainimg"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.3}} />
        </div>
        <div className="col-6 text overflow-hidden">
          <motion.h1 
           initial={{opacity:0, y:"-50vh"}}
           animate={{opacity:1, y:"0vh"}}
           transition={{duration:1.1}}
          className="mt-5 text-center">eBazar Store...</motion.h1>
          <motion.h1
           initial={{opacity:0, y:"-50vh"}}
           animate={{opacity:1, y:"0vh"}}
           transition={{duration:0.8}}
          className="m-0 text-center">Shopping Foot Wear</motion.h1>

          <motion.h4 
           initial={{opacity:0, y:"-50vh"}}
           animate={{opacity:1, y:"0vh"}}
           transition={{duration:0.5}}
          className="text-center mt-4">
            "Shop as per your Time, and get wondefull services on Goods which
            provides high level of satisfaction of shoping."
          </motion.h4>
          <div className="row imgvariant">
            <div className="col-12 sofaset mt-5 overflow-hidden">
              <motion.img
              initial={{x:"100vh"}}
              animate={{x:"0vh"}}
            transition={{duration:0.4}}
                src="./images/s11.png"
                alt="sofa"
                style={landingimg === 0? { borderColor: "#48494B" } : {}}
                // onClick={() => {
                //   setLandingimg("./images/s22.png");
                //   setBordernum(5);
                // }}
              />

              <motion.img
                initial={{x:["100vh"]}}
                animate={{x:"0vh"}}
              transition={{duration:0.5}}
                src="./images/s22.png"
                alt="sofa"
                style={landingimg === 1 ? { borderColor: "#48494B" } : {}}
                // onClick={() => {
                //   setLandingimg("./images/s11.png");
                //   setBordernum(2);
                // }}
              />
              <motion.img
                initial={{x:"100vh"}}
                animate={{x:"0vh"}}
              transition={{duration:0.6}}
                src="./images/s33.png"
                alt="sofa"
                style={landingimg === 2 ? { borderColor: "#48494B" } : {}}
                // onClick={() => {
                //   setLandingimg("./images/s33.png");
                //   setBordernum(3);
                // }}
              />
              <motion.img
                initial={{x:"100vh"}}
                animate={{x:"0vh"}}
              transition={{duration:0.7}}
                src="./images/44.png"
                alt="sofa"
                style={landingimg === 3 ? { borderColor: "#48494B" } : {}}
                // onClick={() => {
                //   setLandingimg("./images/44.png");
                //   setBordernum(4);
                // }}
              />
              <motion.img
                initial={{x:"100vh"}}
                animate={{x:"0vh"}}
              transition={{duration:0.8}}
                src="./images/55.png"
                style={landingimg === 4 ? { borderColor: "#48494B" } : {}}
                alt="sofa"
                // onClick={() => {
                //   setLandingimg("./images/55.png");
                //   setBordernum(1);
                // }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShoeSlide;
