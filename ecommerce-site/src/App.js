import React from "react";
import { ShirtList } from "./ShirtList.js";
import {Link, Route, Switch} from "react-router-dom"
import Cart from "./Cart";
import { CartProvider } from "./CartContext";
import "./App.css"

function App() {
  return (
    <CartProvider>
      <div className="links">
        <Link exact to="/">Home</Link>
        <Link to="./Cart">Cart</Link>
      </div>
      <Switch>
        <Route exact path="/">
        <ShirtList />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
