import React, {useContext} from 'react';
import Auth from "./components/Auth"
import Nav from "./components/Nav"
import Note from "./components/Note"
import {UserContext} from "./context/UserProvider"
import ProtectedRoute from "./components/ProtectedRoute"
import { Switch, Route, Redirect } from "react-router-dom";




const App = () => {
  const {token, logout} = useContext(UserContext)
  return (
    <>
    <Nav logout={logout} token={token} />
    <Switch>
      <Route
        exact
        path="/"
        render={() => (token ? <Redirect to="/notes" /> : <Auth />)}
       />
       <ProtectedRoute
        path="/notes"
        component={Note}
        token={token}
        redirectTo="/"
        />
    </Switch>
  
    </>

  )
}

export default App
