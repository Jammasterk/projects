import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./reset.css"
import UserProvider from "./context/UserProvider"


ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);