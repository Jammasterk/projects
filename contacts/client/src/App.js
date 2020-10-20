import React, {useContext} from 'react';
import Auth from "./components/Auth"
// import ContactForm from "./components/Profile"
import Contact from "./components/Profile"
import Nav from "./components/Nav"
import {UserContext} from "./context/UserProvider"
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const {token, logout} = useContext(UserContext)

  return (
    <div className="App">
      <Nav logout={logout} token={token}/>
      <Switch>
        <Route 
        exact
        path="/"
        render={() => (token ? <Redirect to="/contacts"/> : <Auth />)}
        />
        <ProtectedRoute 
        path="/contacts"
        component={Contact}
        token={token}
        redirectTo="/"
        />
      </Switch>
    </div>
  );
}

export default App;
