import React, { Component } from 'react'
import Auth from "./components/Auth.js"

export class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello, React</h1>
                <Auth />
            </div>
        )
    }
}

export default App
