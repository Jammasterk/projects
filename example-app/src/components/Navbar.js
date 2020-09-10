import React, {useState} from "react"
import {Link} from "react-router-dom"
import styled from "styled-components";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Exo&display=swap");
  font-family: "Exo", sans-serif;

  nav {
    display: flex;
  }

  ul {
    display: flex;
    width: 50%;
    justify-content: space-around;
    position: absolute;
    right: 0;
  }
  li,
  a {
    text-decoration: none;
    list-style: none;
    color: #030303;
  }

  @media only screen and (max-width: 900px) {
    ul {
      color: #f1f1f1;
      background-color: #40514e;
      display: inline-block;
      line-height: 32px;
      margin-top: 2em;
      height: 80%;
      width: 45%;
      padding-top: 1.2em;

      animation-duration: .5s;
      animation-name: slideIn;
      animation-iteration-count: 1
    }

    @keyframes slideIn {
      from{
        /* right: 0; */
       margin-right: 0%;
       width: 0
      }

      to{
        margin-left: 100%;
        width: 40%
      }
    }


    li a {
      color: #f3f3f3;
      font-size: 30px;
      line-height: 100px;
    }

    .bar {
      width: 35px;
      height: 3px;
      background: #000;
      margin: 6px 0;
      border-radius: 4px;
    }

    #hamburger {
      width: 40px;
      /* height: 20px; */
      position: absolute;
      right: 0;
    }
  }
`;

const Navbar = () => {

    function showDiv() {
        var x = document.getElementById("nav");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    function onPress(){
      var link = document.getElementById('li')
      if(link.style.display === "block"){
        link.style.display = "none"
      }
      else{
        link.style.display = "none"
      }
    }

    return (
      <Wrapper>
        <nav>
          <h1 className="name">Company</h1>
          <div id="hamburger" onClick={showDiv}>
            <div className="bar one"></div>
            <div className="bar two"></div>
            <div className="bar three"></div>
          </div>
          <ul id="nav">
            <li>
              <Link id="li" to="/" onClick={onPress}>
                Home
              </Link>
            </li>
            <li>
              <Link id="li" to="/portfolio" onClick={onPress}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link id="li" to="/about" onClick={onPress}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    );


}

export default Navbar