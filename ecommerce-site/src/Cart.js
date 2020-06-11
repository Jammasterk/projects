import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout"
import { CartContext } from "./CartContext";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, + '')
  return (
    <div>
      <span>Items in Cart: {cart.length}</span>
      <br />
      <span>{`$${totalPrice}`}</span>
    </div>
  );
}

export default Cart;
