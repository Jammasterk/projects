import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from "./components/NavBar.js"
import Auth from "./components/Auth.js"
import Profile from "./components/Profile.js"
import Public from "./components/Public.js"
import ProtectedRoute from './components/ProtectedRoute.js'
import {UserContext} from './context/UserProvider.js'




export default function App() {
  const {token, logout} = useContext(UserContext)
  return (
    <div>
      {token && <Navbar logout={logout} />}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (token ? <Redirect to="/profile" /> : <Auth />)}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          redirectTo="/"
          token={token}
        />
        <Route
          path="/public"
          component={Public}
          redirectTo="/public"
          token={token}
        />
      </Switch>
    </div>
  );
}


