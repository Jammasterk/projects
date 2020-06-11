import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div>
      <span>Items in Cart{cart.length}</span>
      <br />
      <span>total price: 0</span>
    </div>
  );
}

export default Cart;
