import React, {useState, useRef} from "react"
import {TweenMax, Power3} from "gsap"
import styled from "styled-components"
import {Link} from "react-router-dom"

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap");
  background-color: #393e46;

  .hamburger {
    height: 32px;
    background: #393e46 !important;
    padding: 1em;
    box-shadow: 0 4px 2px -2px #393e46;
  }

  .line {
    width: 35px;
    height: 4px;
    background: #f6f6f6;
    margin: 0 0 0.5em 0;
    border-radius: 5px;
  }

  nav {
    list-style: none;
    background: #40514e;
    height: 100vh;
    width: 100%;
  }

  .navAnimation-1 {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .navAnimation-2 {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .navAnimation-3 {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
    -webkit-animation-duration: 1.25s;
    animation-duration: 1.25s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .navAnimation {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    transition-timing-function: ease-in-out;
  }
  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    50% {
      opacity: 0.5;
      transform: none;
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  li {
    padding: 1em 0.5em;
  }

  a {
    font-size: 42px;
    font-family: "Open Sans", sans-serif;
    color: #f5f5f5;
    text-decoration: none;
  }
`;

const Nav = () => {

    const [show, setShow] = useState(false)


    function toggleClick(){
        setShow(!show)
    }

    function handleExpand(){
        TweenMax.to(hamburger, .5, {height: "100%", width: "100%", ease: Power3.easeIn})
    }

    var hamburger = useRef(null)

    return (
      <Wrapper>
        <div
          style={
            show === false
              ? { background: "#fff", color: "#40514e" }
              : { background: "#40514e", color: "#f5f5f5" }
          }
          className="hamburger"
          onClick={toggleClick}
        >
          <div
            style={
              show === false
                ? { background: "#f6f6f6", color: "#f5f5f5" }
                : { background: "#bbb8b8", color: "#40514e" }
            }
            className="line"
          ></div>
          <div
            style={
              show === false
                ? { background: "#f6f6f6", color: "#f5f5f5" }
                : { background: "#bbb8b8", color: "#40514e" }
            }
            className="line"
          ></div>
          <div
            style={
              show === false
                ? { background: "#f6f6f6", color: "#f5f5f5" }
                : { background: "#bbb8b8", color: "#40514e" }
            }
            className="line"
          ></div>
        </div>
        <nav
          className="navAnimation"
          onChange={handleExpand}
          ref={(el) => (hamburger = el)}
          style={show === false ? { display: "none" } : { display: "block" }}
        >
          <li className="navAnimation-1">
            <Link to="/">Me</Link>
          </li>
          <li className="navAnimation-2">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="navAnimation-3">
            <Link to="/you">You</Link>
          </li>
        </nav>
      </Wrapper>
    );
}

export default Nav