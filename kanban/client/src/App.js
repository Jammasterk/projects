import React, {useContext} from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import Auth from "./components/Auth"
import BoardForm from "./components/BoardForm"
import Board from "./components/Board"
import ProtectedRoute from "./components/ProtectedRoute"
import {UserContext} from "./context/UserProvider"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"

function App() {
    const {token, logout} = useContext(UserContext)
    return (
        <div>
            {token && <Navbar logout={logout} />}
            <Switch>
                <Route
                    exact path= "/"
                    render={() => token ? <Redirect to="/profile"/> : <Auth />}
                 />
                 <ProtectedRoute
                    path="/profile"
                    component={Profile}
                    redirectTo="/"
                    token={token}
                  />
            </Switch>
        </div>
    )
}

export default App
