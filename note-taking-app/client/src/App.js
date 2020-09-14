import React from "react"
import Auth from "./components/Auth"
import Note from "./components/Note"
import AccountForm from "./components/AccountForm"
import Navbar from "./components/Navbar"

import {Switch, Route, Redirect} from "react-router-dom"
const App = () => {
    return (
      <div>
          <Navbar/>
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
          <Route to="/notes">
            <Note/>
          </Route>
          <Route to="/account">
          <AccountForm />
          </Route>
        </Switch>
      </div>
    );
}

export default App