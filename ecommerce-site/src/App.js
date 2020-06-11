import React from "react";
import { ShirtList } from "./ShirtList.js";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";
import "./App.css"

function App() {
  return (
    <CartProvider>
      <div className="App">
        <ShirtList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
