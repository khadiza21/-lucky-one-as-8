//this the cart js file
//here importing nesscessary files and css files
import React from "react";
import Dronelist from "../Dronelist/Dronelist";

//making a custom html tag and also a component
const Cart = (props) => {
  const { cart } = props;
  //   let total = 0;
  //   for (const product of cart) {
  //     total = total + product.price;
  //   }
  return (
    <div>
      <h3 className="fw-bold">Order Summary</h3>
      <p className="fs-5">Selected Items: {props.cart.length}</p>
      {/* <h6>Total Price: {total}</h6> */}
      <ul>
        Ordered Trees Name:{" "}
        {cart.map((p) => (
            <Dronelist namelist = {p}
            key={p.droneCode}></Dronelist>
          
        ))}
      </ul>
      <button className="btn btn-warning">Choose 1 For Me</button>
      <br /> <br />
      <button  onClick={ props.handleChooseAgain} className="btn btn-warning">Choose Again</button>
    </div>
  );
};
// 
export default Cart;
