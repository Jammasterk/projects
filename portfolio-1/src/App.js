import React from 'react';
import Splash from "./components/Splash"
import {Link, Route, Switch} from "react-router-dom"
import Work from "./components/Work"
import Contacts from "./components/Contacts"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="./Work">
        Projects
        </Link>
        <Link to="./Splash">
          Home
        </Link>
        <Link to="./Contacts">
        Contact Me
        </Link>
      </div>
      <Switch>
        <Route path="/Work">
          <Work />
        </Route>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route path="/Contacts">
          <Contacts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
