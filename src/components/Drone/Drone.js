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
    <div className="dronesSection">
      <div className="droneImg">
        <img src={image} alt="" className="img-fluid" />
      </div>

      <div>
        <h3>Drone Code: {droneCode}</h3>
        <h2 className="name">Drone Name: {Name}</h2>
        <h3>Drone Price: {price}</h3>
        <button
          className="purChase btn "
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
