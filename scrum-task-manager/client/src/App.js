import React, {useState, useEffect, useContext} from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import Task from "./components/Task"
import Description from "./components/Description"
import User from "./components/User"
import Auth from "./components/Auth"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import {UserContext} from "./context/UserProvider"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
    const {token, logout} = useContext(UserContext)
    return(
        <>
        <div>
            {token && <Navbar logout={logout}/>}
            <Switch>
                <Route
                    exact path="/"
                    render={() => token ? <Redirect to="/profile"  /> :<Auth />}
                 />

            
                  <ProtectedRoute
                    path="/profile"
                   component={Profile}
                   redirectTo="/"
                   token={token}
                 />  
                
                <ProtectedRoute
                    path="/task"
                    component={Task}
                    redirectTo="/"
                    token={token}
                 />
            </Switch>
        </div>
        </>
    )
}

export default App