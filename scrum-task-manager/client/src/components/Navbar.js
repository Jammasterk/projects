import React, {useState} from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"

const Wrapper = styled.div`
  .hamburgerClose {
    display: flex;
    height: 75px;
    width: 75px;
    background: #f5eded;
    box-shadow: 20px 20px 60px #c6c0c0, -20px -20px 60px #ffffff;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    margin-left: 1em;
    margin-top: 1em;
  }

  .hamburgerOpen {
    display: flex;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    margin-left: 1em;
    margin-top: 1em;
    background: #30e3ca;
    box-shadow: 20px 20px 60px #27b8a4, -20px -20px 60px #39fff0;
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  svg {
    font-size: 28px;
    margin: auto;
    text-align: center;
    vertical-align: middle;
    color: #6e3b3b;
    /* line-height: 90px; */
  }

  a {
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    font-weight: 200;
    color: #f5eded;
    text-decoration: none;
  }

  ul {
    padding-left: 1em;
    padding-right: 3em;
    padding-top: 10%;
    position: absolute;
    background: #30e3ca;

    z-index: -1;
    height: 100%;
  }

  .top-link {
    margin-top: 10%;
  }

  li {
    margin: 3em 0.75em;
    list-style: none;
  }

  .slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes slideInLeft {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slideInLeft {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  .slideOutRight {
    -webkit-animation-name: slideOutRight;
    animation-name: slideOutRight;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      visibility: hidden;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }
  @keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      visibility: hidden;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }
`;

const Navbar = (props) => {

    const [navShow, setNavShow] = useState(true)

    const handleClick = (e) => {
        e.preventDefault(setNavShow(!navShow))
    }
    const {logout} = props
    return (
      <Wrapper>
        <div>
          <div
            className={navShow ? "hamburgerOpen" : "hamburgerClose"}
            onClick={handleClick}
          >
            {!navShow ? <FaChevronRight /> : <FaChevronLeft />}
          </div>
          <ul
            style={navShow ? { display: "block" } : { display: "none" }}
            className={navShow ? "slideInLeft" : "slideOutRight"}
          >
            <li className="top-link">
              <Link to="/boards">Boards</Link>
              {/* <li>
                  <Link to="/active-board">
                    Boards
                  </Link>
              </li> */}
            </li>
            <li>
              <Link to="/profile">Create Board</Link>
            </li>
            <li>
              <Link to="/user">User Account</Link>
            </li>
            <li>
              <a href="" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>
    );
}

export default Navbar