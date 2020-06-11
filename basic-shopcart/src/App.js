import React from 'react';
import './App.css';
import {ShirtList} from "./ShirtList.js"
import Cart from "./Cart"
import {CartProvider} from "./CartContext"

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
