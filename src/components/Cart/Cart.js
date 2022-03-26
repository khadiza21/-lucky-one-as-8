//this the cart js file
//here importing nesscessary files and css files
import React from "react";
import Dronelist from "../Dronelist/Dronelist";

//making a custom html tag and also a component
const Cart = (props) => {
  const { cart } = props;

  const test = (min, max) => {
    let s1 = max - min + 1;
    let s2 = Math.random() * s1;
    let r = Math.floor(s2) + min;
    return r;
  };

  const choose1ForMe = () => {
    let index = test(0, cart.length - 1);
    const tem = cart[index];
    alert("Buy " + tem.Name, " , ", "price: " + tem.price);
    return tem;
  };

  return (
    <div>
      <h3 className="fw-bold">Order Summary</h3>
      <p className="fs-5">Selected Items: {props.cart.length}</p>
      {/* <h6>Total Price: {total}</h6> */}
      <ul>
        Ordered Drones Name:{" "}
        {cart.map((p) => (
          <Dronelist namelist={p} key={p.droneCode}></Dronelist>
        ))}
      </ul>
      <button className="btn btn-warning" onClick={choose1ForMe}>
        Choose 1 For Me
      </button>
      <br /> <br />
      <button onClick={props.handleChooseAgain} className="btn btn-warning">
        Choose Again
      </button>
    </div>
  );
};
//
export default Cart;
