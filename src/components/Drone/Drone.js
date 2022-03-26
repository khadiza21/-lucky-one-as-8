//this the drone js file
//here importing nesscessary files and css files
import React from "react";
import "./Drone.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Drone = (props) => {
  //destructing
  const { Name, image, price, droneCode } = props.product;
  //   const {hadleAddToCart} = props;
  return (
    // cart making and give css style
    <div className="shadow flowers-container px-3 rounded py-3">
      <div >
       <img src={image} alt="" className="img-fluid img rounded"  />  
      </div>
     

      <div className="py-3">
        <h4> {Name}</h4>
        <h5>Drone Price: ${price}</h5>
        <h5>
          <small>Drone Code: {droneCode}</small>
        </h5>
        <button
          className="btn btn-success py-2 mt-3"
          onClick={() => props.handleAddToCartbtn(props.product)}
        >
          Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};
//exporting file
export default Drone;
