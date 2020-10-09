import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
  font-family: "Source Sans Pro", sans-serif;

  .outside {
    position: absolute;
    background: transparent;
    /* height: 100%; */
    width: 100%;
  }

  .navbar {
    position: "absolute";
    top: 0;
  }

  ul {
    border: none !important;
    background: grey;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    position: absolute;
    right: 0;
    list-style: none;
    z-index: 2;
    top: 0;
    opacity: 0.9;
    
  }

  li {
    font-size: 34px;
    margin: 16px 1em;
  }

  a {
    font-size: 32px !important;
    border: none !important;
    text-align: center;
    font-weight: 200;
    color: #fff;
    text-decoration: none
  }

  .hamburger {
    height: 100%;
    position: absolute;
    right: 0;
    margin-right: 2em;
    z-index: 12;
  }

  .line {
    width: 30px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    margin: 5px 0;
  }

  .navbar {
    display: flex;
    margin-top: 1em;
  }

  .nav-link {
    text-decoration: none;
    color: #fff;
    font-size: 30px;
    font-weight: 200;
    padding: 8px 16px;
    border: 1px solid #fff;
    display: inline-block;
  }

  .nav-link:hover {
    color: black;
  }
`;

function Nav(){

 const [show, setShow] = React.useState(false);

 function handleChange(e) {
   e.preventDefault(setShow(!show));
 }

    return (
      <Wrapper>
        <div onClick={handleChange} className="navbar">
          <div onClick={handleChange} className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul
            onClick={handleChange}
            style={show ? { display: "block" } : { display: "none" }}
          >
            <li>
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="outside" onClick={handleChange}></div>
      </Wrapper>
    );
}

export default Nav