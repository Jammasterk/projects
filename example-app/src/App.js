import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import About from "./components/About"


const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/portfolio">
                    <Portfolio/>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </div>
    )
}

export default App 