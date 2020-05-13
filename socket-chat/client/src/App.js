import React, {Component} from 'react'

import {BrowserRouter as Router, Route} from "react-router-dom"

import Join from "./components/Join.js"
import Chat from "./components/Chat.js"

class App extends Component{
    render(){
        return (
          <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
          </Router>
        );
    }
}

export default App