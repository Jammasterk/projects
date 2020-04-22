import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Weather from "./Weather";
import Glossary from "./Glossary";
import Facts from "./Facts";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link exact to="/" >Weather App</Link>
        <Link to="./Glossary">Glossary of terms</Link>
        <Link to="./Facts">Weather History</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Weather />
        </Route>
        <Route path="/Glossary">
          <Glossary />
        </Route>
        <Route path="/Facts">
          <Facts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
