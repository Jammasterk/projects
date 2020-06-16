import React from "react"
import "./styles.css"
import {Link, Switch, Route} from "react-router-dom"
import Homepage from "./components/Homepage"
import Products from "./components/Products"
import Contact from "./components/Contact"
function App() {
    return(
        <div >
            <div className="nav">
                <Link exact to="/">Home</Link>
                <Link to="/Products">Products</Link>
                <Link to="/Contact">Contact</Link>
            </div>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/Products">
                    <Products/>
                </Route>
                <Route path="/Contact">
                    <Contact />
                </Route>
            </Switch>
            {/* <Homepage /> */}
        </div>
    )
}

export default App