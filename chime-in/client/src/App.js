import React, {useContext} from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "./components/Profile"
import Auth from "./components/Auth"
import ProtectedRoute from "./components/ProtectedRoute"
import {UserContext} from "./context/UserProvider"
import Navbar from "./components/Navbar"
import User from "./components/User"
import UserForm from "./components/UserForm"
import NewAccount from "./components/NewAccount"

export default function App() {
    const {token, logout} = useContext(UserContext)
    return (

        <>
        {token && <Navbar logout={logout} />}
        <Switch>
            <Route
                exact
                path="/"
                render={() => (token ? <Redirect to="/user"/> : <Auth />)}
             />
             <ProtectedRoute
                path="/user"
                component={NewAccount}
                redirectTo="/"
                token={token}
             />    
        </Switch>  
        
        </>
    )
}
