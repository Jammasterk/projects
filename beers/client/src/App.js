import React from "react"
import BeerList from "./components/BeerList"
import LiquorList from "./components/LiquorList"
import {Switch, Route} from "react-router-dom"
import Nav from "./components/Nav"

export default function App() {
    return(
        <>
        <Nav />
        <Switch>
            <Route exact path="/">
                <BeerList />
            </Route>
            <Route path="/liquor">
                <LiquorList />
            </Route>
        </Switch>
        </>
    )
}
