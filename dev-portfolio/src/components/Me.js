import React from 'react'
import styled from "styled-components"
import Nav from "./Nav"
import Typewriter from "typewriter-effect";
import Desk from "../assets/desk.png"

const Wrapper = styled.div`
  .body {
    height: 100vh;
    width: 100%;
    background: #363434;
    position: absolute;
    top: 0;
    z-index: -1;
    background-size: contain;
  }

  .container {
    width: 90%;
    height: 38em;
    margin: 6% auto;
    background: #363434;
    display: grid;
    grid-template-columns: minmax(20%, auto) 80% 20%;
    padding: 2em;
    background: linear-gradient(145deg, #2e2c2c, #3e3c3c);
    border-radius: 10px;
    box-shadow: 9.91px 9.91px 15px #312f2f, -9.91px -9.91px 15px #3b3939;
    position: relative;
  }

  img {
    width: 50%;
    margin: auto 25%;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    background: linear-gradient(145deg, #2e2c2c, #3e3c3c);
    border-radius: 10px;
    box-shadow: 9.91px 9.91px 15px #312f2f, -9.91px -9.91px 15px #3b3939;
  }

  .info {
    margin: 2em;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    width: 80%;
    /* border-right: 1px double #f6f6f6; */
    padding-right: 2em;
    height: 250px;
  }

  .flex-left {
    height: 93%;
    width: 100%;
    background: transparent;
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    color: #f6f6f6;
    border-right: 1px double #f6f6f6;
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

  h1 {
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: scale(1.7, 1.2);
    font-size: 3vw;
    letter-spacing: 6px;
    font-family: "Montserrat", sans-serif;
    padding-top: 1.8em;
    padding-left: 1em;
  }

  h2 {
    text-align: center;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    margin-top: 1em;
  }

  .typer {
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: scale(1.7, 1.2);
    font-size: 1.8vw;
    letter-spacing: 6px;
    font-family: "Montserrat", sans-serif;
    padding-top: 4.8em;
    padding-left: 1em;
    position: absolute;
    align-content: center;
    color: #7f8186;
  }

  .flex-right {
    height: 100%;
    width: 100%;
    background: transparent;
    -webkit-animation-name: slideInRight;
    animation-name: slideInRight;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    color: #f6f6f6;
  }
  @-webkit-keyframes slideInRight {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slideInRight {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @media only screen and (max-width: 750px) {
    body {
    }
  }

  @media only screen and (max-width: 575px) {
    .container {
      display: block;
      width: 90vw;
      height: 100%;
    }

    .flex-left {
      height: 50%;
    }

    .flex-right {
      height: 50%;
    }
    h1 {
      writing-mode: initial;
      margin-top: 1em auto;
      font-size: 160%;
      letter-spacing: 0;
      font-family: "Montserrat", sans-serif;
      padding-top: 1.8em;
      text-align: center;
      text-orientation: initial;
      display: inline-block;
      transform: initial;
      width: 100%;
      position: absolute;
      display: inline-block;
      padding-left: 0;
    }
  }
`;

function Me() {


    return (
      <>
        <Wrapper>
          <Nav />
          <div
            className="body"
            style={{ background: "#363434", height: "110%" }}
          >
            <div className="container">
              <div className="flex-left">
                <p className="typer">
                  <Typewriter
                    options={{
                      strings: ["Fullstack developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </p>
                <h1>Jared Manwaring</h1>
              </div>
              <div className="flex-right">
                  <img src={Desk} alt=""/>
                  <h2>Salt Lake City, UT | Denver, CO</h2>
                  <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam recusandae quisquam quo iste. Saepe odio perspiciatis 
                      maxime esse! Similique delectus, ut ipsum odio maiores eum aliquid itaque expedita dolorum?</p>
                  
              </div>
            </div>
          </div>
        </Wrapper>
      </>
    );
}

export default Me
