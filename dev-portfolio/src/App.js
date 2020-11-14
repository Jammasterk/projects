import React from 'react'
import Me from "./components/Me"
import Projects from "./components/Projects"
import You from "./components/You"
import {Switch, Route} from "react-router-dom"

export default function App() {
    return (
        <>
        <Switch>
            <Route exact path="/">
                <Me />
            </Route>
            <Route path="/projects">
                <Projects/>
            </Route>
            <Route path="/you">
                <You/>
            </Route>
        </Switch>
        </>
    )
}
