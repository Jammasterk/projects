import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`

.outside{
    position: absolute;
    background: transparent;
    /* height: 100%; */
    width: 100%
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
    top: 0
    /* opacity: .4 */
  }

  li{
      font-size: 34px;
      margin: 16px 0;
  }

  a {
    font-size: 32px !important;
    border: none !important;
    text-align: center;
  }

 .hamburger {
    height: 100%;
    position: absolute;
    right: 0;
    margin-right: 2em;
    z-index: 12
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