import React from 'react'
import SplashImage from "../assets/woman-finger-glasses.jpg"
import styled from "styled-components"

const Styled = styled.h1`
  position: relative;
  z-index: 3;
  color: #f2f1ff;
  text-align: center;
  line-height: 140px;
  top: 0;
  padding-top: 20%;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
`;



export function HomePage() {
    return (
      <div className="splashPage">
          <img
            style={{ height: "100vh", width: "100vw", backgroundSize: "cover" }}
            src={SplashImage}
            alt=""
          />
        <Styled>
          <h1 className="splashImg">
            LoHi <br /> Museum <br /> Of <br/> Art
          </h1>
        </Styled>
      </div>
    );
}

export default HomePage
