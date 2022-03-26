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
   console.log('ere')
    const newCart = [];
    setCart(newCart);
    // addToDb(product.id);
  };
  //return here
  return (
    <div className="main-container">
      <div className="drone-container">
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
      <div className="cart-container">
        <Cart cart={cart}
         
          handleChooseAgain={handleChooseAgain}
        ></Cart>
      </div>
    </div>
  );
};
//exporting file
export default Main;
