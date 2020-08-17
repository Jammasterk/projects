import React from "react"
// import AuthForm from "./components/AuthForm"
import Auth from "./components/Auth"
import Profile from "./components/Profile"
import Public from "./components/Public"
import Account from "./components/Account"
import {Switch, Route} from "react-router-dom"

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Public/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/account">
                    <Account />
                </Route>
                <Route path="/protected">
                    <Auth />
                </Route>
            </Switch>
        </div>
    )
}

export default App