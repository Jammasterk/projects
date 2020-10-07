import React from 'react'
import Splash from "./components/Splash"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import {Switch, Route} from "react-router-dom"

export default function App() {

    return (
        <div>
           <Switch>
               <Route exact path="/">
                <Splash />
               </Route>
               <Route path="/projects">
                <Projects />   
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
           </Switch>
        </div>
    )
}
