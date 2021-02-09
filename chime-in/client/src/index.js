import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./reset.css"
import UserProvider from "./context/UserProvider"
import {BrowserRouter as Router} from "react-router-dom"


ReactDOM.render(
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>,
  document.getElementById("root")
);