import React from "react";
import StripeCheckout from "react-stripe-checkout";
const API_KEY = require("dotenv").config();

function Stripe() {
  const [product] = React.useState({
    name: "african T-Shirt",
    description: "A tribal african t-shirt",
    image:
      "https://cdn.shopify.com/s/files/1/0684/2619/products/tops-seun-men-s-african-print-t-shirt-with-pocket-blue-tan-navy-2_1000x.jpg?v=1528234894",
    price: "$27.00",
  });

  function handleToken(token, addresses) {
    console.log(token, addresses);
  }

  return (
    <div>
      <div>
        <h1>{product.name}</h1>
        <h6>{product.description}</h6>
        <img src={product.image} alt="" />
        <p>{product.price}</p>
      </div>
      <StripeCheckout
        stripeKey="pk_test_y8WgNBjPCePCET1U8UobOAJ500xu4J3dW5"
        token={handleToken}
      />
    </div>
  );
}

export default Stripe;
