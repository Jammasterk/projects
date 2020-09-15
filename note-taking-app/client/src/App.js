import React, {useContext} from "react"
import Auth from "./components/Auth"
import AccountForm from "./components/AccountForm"
import Navbar from "./components/Navbar"
import {UserContext} from "./context/UserProvider"
import Profile from "./components/Profile"

import {Switch, Route, Redirect} from "react-router-dom"
const App = () => {
  const {token, logout} = useContext(UserContext)
    return (
      <div>
          <Navbar logout={logout}/>
        <Switch>
          <Route 
          exact 
          path="/" 
          render={() =>  token ? <Redirect to='/notes' /> : <Auth />}/>
          <Route
           to="/notes"
           render={() => <Profile />}
           >
          
          </Route>
          <Route to="/account">
          <AccountForm />
          </Route>
        </Switch>
      </div>
    );
}

export default App