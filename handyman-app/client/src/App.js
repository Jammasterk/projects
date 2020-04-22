import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import Auth from "./components/Auth.js"
import NavBar from "./components/NavBar.js"
import Profile from "./components/Profile"
import Public from "./components/Public.js"
import {UserContext} from "./context/UserProvider"

import './App.css';

export default function App() {
  const {token, logout} = useContext(UserContext)
  return (
    <div className="App">
      {token && <NavBar logout={logout} />}
      <Switch>
        <Route 
        exact
        path="/"
        render={() => (token ? <Redirect to="/profile" /> : <Auth />)}
        />
        <Route 
        path="/profile"
        component={Profile}
        Redirect="/"
        token={token}
        />
        <Route 
        path="/public"
        component={Public}
        Redirect="/public"
        token={token}
        />
      </Switch>
    </div>
  );
}


