import React, { Fragment, useState } from "react";
import {motion} from "framer-motion";


const sofaimg = [
  {
    img:"./images/lap4.png"
  },
  {
    img:"./images/lap6.png"
  },
  {
    img:"./images/lap9.png"
  },
  {
    img:"./images/lap10.png"
  },
  {
    img:"./images/lap11.png"
  },
]


const SofaSlide = () => {

    const [landingimg, setLandingimg] = useState(0);

    const nextsofa = () =>{
      landingimg===4? setLandingimg(0) : setLandingimg(landingimg + 1);
    }
    setTimeout(nextsofa,2000);

  return (
    <Fragment>
      <div className="row slider">
        <div className="col-6 mainpicbox">
          <motion.img src={sofaimg[landingimg].img} alt="mainimg"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.3}}
               />
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
                 className="m-0 text-center">Shopping Your Choice</motion.h1>

          <motion.h4
                initial={{opacity:0, y:"-50vh"}}
                animate={{opacity:1, y:"0vh"}}
                transition={{duration:0.5}}
                 className="text-center mt-4">
            Shop as per your choices, and get wondefull services on Goods which
            provides high level of satisfaction of shoping
          </motion.h4>
          <div className="row imgvariant">
            <div className="col-12 sofaset mt-5 overflow-hidden">




            <motion.img
            className="m-0 p-0"
                   initial={{x:["100vh"]}}
                   animate={{x:"0vh"}}
                 transition={{duration:0.4}}
                src="./images/lap4.png"
                style={landingimg === 0 ? { borderColor: "#48494B" } : {}}
                alt="lap"
                // onClick={() => {
                //   setLandingimg("./images/sofa2.png");
                //   setBordernum(1);
                // }}
              />
              <motion.img
                   initial={{x:["100vh"]}}
                   animate={{x:"0vh"}}
                 transition={{duration:0.5}}
                src="./images/lap6.png"
                alt="lap"
                style={landingimg === 1 ? { borderColor: "#48494B" } : {}}
                // onClick={() => {
                //   setLandingimg("./images/sofa6.png");
                //   setBordernum(5);
                // }}
              />

              <motion.img
                   initial={{x:["100vh"]}}
                   animate={{x:"0vh"}}
                 transition={{duration:0.6}}
                src="./images/lap9.png"
                alt="lap"
                style={landingimg === 2 ? { borderColor: "#48494B" } : {}}
                // onClick={() => {
                //   setLandingimg("./images/sofa2.png");
                //   setBordernum(2);
                // }}
              />
              <motion.img
                   initial={{x:["100vh"]}}
                   animate={{x:"0vh"}}
                 transition={{duration:0.7}}
                src="./images/lap10.png"
                alt="lap"
                style={landingimg === 3 ? { borderColor: "#48494B" } : {}}
                // onClick={() => {
                //   setLandingimg("./images/Furniture (1).webp");
                //   setBordernum(3);
                // }}
              />
              <motion.img
                   initial={{x:["100vh"]}}
                   animate={{x:"0vh"}}
                 transition={{duration:0.8}}
                src="./images/lap11.png"
                alt="lap"
                
                style={landingimg === 4 ? { borderColor: "#48494B" } : {}}
                // onClick={() => {
                //   setLandingimg("./images/sofa2.png");
                //   setBordernum(4);
                // }}
              />
             
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};


export default SofaSlide;