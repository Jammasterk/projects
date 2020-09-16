import React, {useContext} from "react"
import Auth from "./components/Auth"
import AccountForm from "./components/AccountForm"
import ProfileTwo from "./components/ProfileTwo"
import Navbar from "./components/Navbar"
import {UserContext} from "./context/UserProvider"
import Profile from "./components/Profile"
import ProtectedRoute from "./components/ProtectedRoute"

import {Switch, Route, Redirect} from "react-router-dom"
const App = () => {
  const {token, logout} = useContext(UserContext)
    return (
      <div>
        {/* {token && <Navbar logout={logout}/>} */}
        <Navbar logout={logout} token={token} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (token ? <Redirect to="/notes" /> : <Auth />)}
          />
          <ProtectedRoute
            path="/notes"
            component={Profile}
            redirectTo="/"
            token={token}
          />
          <ProtectedRoute
          path="/contact"
          component={ProfileTwo}
          token={token}
          />
  
          <Route to="/account">
            <AccountForm />
          </Route>
        </Switch>
      </div>
    );
}

export default App