import React, {useState} from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 0;
  padding: 0;

  .line {
    width: 30px;
    height: 3px;
    background: #f5eded;
    border-radius: 5px;
    margin: 6px 5px;
  }
  li {
    padding: 20px 0;
    font-size: 28px;
    color: #f5eded;
    list-style: none;
    font-family: "Raleway", sans-serif;
    /* display: inline-block; */
  }

  .textblock{
    display: block
  }

  .hamburger {
    margin-top: 26px;
    height: 75px;
    /* padding-top: 4px; */
    /* display: inline-block */
  }

  h1 {
    text-align: center;
    color: #d7be60;
    width: 100%;
    padding: 0 !important;
    margin-top: 26px;
    text-decoration: underline
  }
  .flex {
    display: flex;
    background: #5d5d5a;
    width: 100vw;
    position: absolute;
    z-index: 2;
  }

  .flex:hover {
    background: #5d5d5a;
  }
  ul {
    display: inline-block;
    background: #5d5d5a;
    padding-top: 75px;
    margin: 0 !important;
  }
  .slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
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

  .page {
    background: url("https://images.pexels.com/photos/1075776/pexels-photo-1075776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .filter {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: #5d5d5a;
    opacity: 0.3;
  }
`;

function Navbar() {

    const [show, setShow] = useState(false)

    function handleChange(e){
        e.preventDefault(setShow(!show))
    }

    return (
      <Wrapper>
      
          <div className="flex">
            <div className="hamburger" onClick={handleChange}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="textblock">
              <h1>Clothing Unknown</h1>
            </div>
          </div>
          <ul
            style={show ? { display: "block" } : { display: "none" }}
            className="slideInLeft fadeOutLeft"
          >
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
      </Wrapper>
    );
}

export default Navbar

