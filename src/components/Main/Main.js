//this the market js file
//here importing nesscessary files and css files
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Drone from "../Drone/Drone";
import "./Main.css";

//this is a component and used here useState and useEffect
const Main = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("drone.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //add handle eventer
  const handleAddToCart = (product) => {
    console.log(product.Name);
    const newCart = [...cart, product];
    setCart(newCart);
    // addToDb(product.id);
  };
  const handleChooseAgain = () => {
    const newCart = [];
    setCart(newCart);
    // addToDb(product.id);
  };
  //return here
  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-10">
          <div className="drone-container my-5">
             {
            //here is mapping
            products.map((product) => (
              <Drone
                key={product.droneCode}
                product={product}
                handleAddToCartbtn={handleAddToCart}
              ></Drone>
            ))
          }
          </div>
         
        </div>

        <div className="col-lg-2 shadow ">
          <Cart cart={cart} handleChooseAgain={handleChooseAgain}></Cart>
        </div>
      </div>
    </div>
  );
};
//exporting file
export default Main;
