import React, {useContext} from "react"
import Auth from "./components/Auth"
// import ProductForm from "./components/ProductForm"
import {Switch, Route, Redirect} from "react-router-dom"
import Profile from "./components/Profile"
import ProtectedRoute from "./components/ProtectedRoute"
import {UserContext} from "./context/UserProvider"
import Navbar from "./components/Navbar"

function App(){
  const {token, logout} = useContext(UserContext)
    return (
      <>
        {token && <Navbar logout={logout} />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (token ? <Redirect to="/profile" /> : <Auth /> )}
           />
           <ProtectedRoute
            path="/profile"
            component={Profile}
            redirectTo="/"
            token={token}
            />
        </Switch>
      </>
    );
}

export default App