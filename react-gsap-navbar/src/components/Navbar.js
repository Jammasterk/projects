import React from "react"
import Home from "./Home"
import Suite from "./Suite"
import Amenities from "./Amenities"

function Navbar(){

function showDiv(){
  var x = document.getElementById('nav')
  if(x.style.display === "block"){
    x.style.display = "none"
  }else{
    x.style.display = "none"
  }
}
        return (
          <div>
            <div id="hamburger" onClick={showDiv}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul id="nav">
              <li><Home /></li>
              <li><Suite /></li>
              <li><Amenities /></li>
            </ul>
          </div>
        );
    }

export default Navbar