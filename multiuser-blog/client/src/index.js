import React from "react"
import ReactDOM from "react-dom"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {BrowserRouter as Router} from "react-router-dom"
import UserProvider from "./context/UserProvider"
import App from "./App"



ReactDOM.render(
 <Router>
    <UserProvider>
      <App />
    </UserProvider>
    </Router>,
  
  document.getElementById("root")
);