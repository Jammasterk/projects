import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout"
import { CartContext } from "./CartContext";

function Cart(props) {
  const [cart, setCart] = useContext(CartContext);
  const [name, setName] = useContext(CartContext)
  const [image, setImage] = useContext(CartContext)
//   const [price, setPrice] = useContext(CartContext)

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, + '')
  const totalName = name.reduce((acc, curr) => acc + curr.name, + "")
//   const totalImage = image.Array.prototype.reduce((acc, curr) => acc + ", " + curr + 0)
  
    function handleToken(token, addresses) {
      console.log(token, addresses);
    }

    
  return (
    <div className="stripe-container">
      {/* <CartContext /> */}
      <div>
        <div className="itemPreview">
          <span>{totalName}</span>
          <span>

          {/* <img src={totalImage} alt="" /> */}
          </span>
          <span>{totalPrice}</span>
        </div>
        <span>Items in Cart: {cart.length}</span>
        <br />
        <span>{`$${totalPrice}`}</span>
      </div>
      <StripeCheckout
        stripeKey="pk_test_y8WgNBjPCePCET1U8UobOAJ500xu4J3dW5"
        token={handleToken}
      />
    </div>
  );
}

export default Cart;
