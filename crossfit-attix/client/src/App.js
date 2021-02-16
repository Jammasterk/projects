import React, {useContext} from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import Homepage from "./components/Homepage"
import About from "./components/About"
import Schedule from "./components/Schedule"
import Membership from "./components/Membership"
import WOD from "./components/WOD"
import Contact from "./components/Contact"
import Nav from "./components/Nav"
import Admin from "./components/Admin"
import ProtectedRoute from "./components/ProtectedRoute"
import {UserContext} from "./context/UserProvider"

export default function App() {
    const {token, logout} = useContext(UserContext)
    return (
      <div>
        {/* <Admin /> */}
        {/* <Nav /> */}
        {/* {token && <Nav logout={logout} />} */}
        <Switch>
          <Route
            exact
            path="/homepage"
            /* render={() => (token ? <Redirect to="/profile" /> : <Admin />)} */
          >
            <Homepage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          {/* <Route path="/WOD">
                    <WOD />
                </Route> */}
          <Route path="/rates">
            <Membership />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <ProtectedRoute
            path="/wod"
            component={WOD}
            redirectTo="/"
            token={token}
          />
          <Route
            path="/"
            render={() => (token ? <Redirect to="/wod" /> : <Admin />)}
          />
        </Switch>
      </div>
    );
}
