import React, { Component } from 'react'
import NavBar from "./components/NavBar"
import Home from "./components/HomePage"
import Program from "./components/Program"
import "./index.css"

export class App extends Component {
    render() {
        return (
            <div>
                {/* <NavBar /> */}
                {/* <Home /> */}
                <Program />
            </div>
        )
    }
}

export default App
