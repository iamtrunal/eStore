import React,{Fragment} from "react";
import {motion} from "framer-motion";


const TogMenu = () => {
    return(
        <Fragment>
            <div 
       
            className="container-fluid overflow-hidden"
            >
                <div className="row">
                    <motion.div 
                    className="col-12 togmenu overflow-hidden" 
                         initial={{height:"50px"}}
                         animate={{height:"100vh"}}
                         transition={{duration:0.5}}
                    >
                        <h1>This Is Toggle Menu</h1>
                    </motion.div>
                </div>
            </div>
        </Fragment>
    )
}
export default TogMenu;
