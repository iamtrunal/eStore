import React, {Fragment} from "react";
import {useSpring, animated} from "react-spring";


const CategoriesCard = () => {

    const anim1 = useSpring({config: { duration: 250 }, to:{height:"289px"} , from:{height:"0px"}})
    return(
        <Fragment>
            <animated.div className="categoriecard" style={anim1}>
                <ul className="m-0 p-0">
                    <li><i className="fas fa-vest"></i><p>Fashion</p></li>
                    <li><i className="fas fa-plug"></i><p>Electronics</p></li>
                    <li><i className="fas fa-mobile-alt"></i><p>Mobile</p></li>
                    <li><i className="fas fa-shopping-basket"></i><p>Groceries</p></li>
                    <li><i className="fas fa-air-freshener"></i><p>Beauty & Toys</p></li>
                    <li><i className="fas fa-book"></i><p>Books</p></li>
                </ul>
            </animated.div>
        </Fragment>
    )
}

export default CategoriesCard;