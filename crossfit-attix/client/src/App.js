import React from 'react'
import {Switch, Route} from "react-router-dom"
import Homepage from "./components/Homepage"
import About from "./components/About"
import Schedule from "./components/Schedule"
import Membership from "./components/Membership"
import WOD from "./components/WOD"
import Contact from "./components/Contact"
import Nav from "./components/Nav"
import Admin from "./components/Admin"

export default function App() {
    return (
        <div>
            <Admin />
           {/* <Nav /> */}
           {/* <Switch>
               <Route exact path="/">
                <Homepage/>
               </Route>
               <Route path="/about">
                <About />
                </Route>
                <Route path="/schedule">
                    <Schedule/>
                </Route>
                <Route path="/WOD">
                    <WOD />
                </Route>
                <Route path="/rates">
                    <Membership/>
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
           </Switch> */}
        </div>
    )
}
