import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export const Map = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const tShirt = { name: props.name, price: props.price, image: props.image };
    setCart(current => [...current, tShirt]);
    console.log("Something is happening");
  };

  return (
    <div className="container">
      <div className="item">
        <h1>{props.name}</h1>
        <img src={props.image} alt="" />
        <h4>{props.price}</h4>

        <button onClick={addToCart}>Add to Cart</button>
        <hr />
      </div>
    </div>
  );
};
