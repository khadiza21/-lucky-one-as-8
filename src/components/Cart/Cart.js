//this the cart js file
//here importing nesscessary files and css files
import React from "react";
import Dronelist from "../Dronelist/Dronelist";
import "./Cart.css"

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
    return tem.Name;
  };


  return (
    <div className="my-5 py-3 px-2 cart">
      <h5 className="fw-bold">Selected Drones</h5>
      <p className="fw-bold">Selected Items: {props.cart.length}</p>
      {/* <h6>Total Price: {total}</h6> */}
       <h6>Ordered Drones Name: </h6>
      <ol>
       
 {cart.map((p) => (
     <li>     <Dronelist namelist={p} key={p.droneCode}></Dronelist></li>
        ))}
       
      </ol>
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
