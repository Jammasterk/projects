import React from 'react'
import styled from "styled-components"
import Nav from "./Nav";
import Box from "../assets/box.jpeg"

const Wrapper = styled.div`
  img {
    width: 100%;
    max-height: 50%;
  }
  .content {
    position: absolute;
    top: 0;
    z-index: -2;
    height: 100%;
  }
  h1 {
    font-size: 70px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    color: #33363b;
  }
  p {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.5em 6em;
    font-size: 24px;
    font-family: "Poppins", sans-serif;
    color: #33363b;
  }

  .filter {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: calc(28 / 100);
    background: #403f3f;
    z-index: -1;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 40px;
    }
    .text {
      width: 100%;
    }
    p {
      padding: 0.75em;
      text-align: center;
    }
  }
`;

function About() {
    return (
      <Wrapper>
          <Nav style={{ position: "absolute", zIndex: 2 }} />
          <div className="filter"></div>
        <div className="content">
            <img src={Box} alt=""/>
            <div className="text">
                <h1>Why join Crossfit Attix?</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, ab? Obcaecati 
                    error deleniti corrupti itaque assumenda, laborum accusantium ad nisi officiis nostrum omnis quidem 
                    perferendis molestiae illo, ut unde rem ipsam suscipit commodi, ducimus voluptatem quod eveniet doloremque dicta. Corporis 
                    odio laudantium, consequuntur maiores fugit laborum et! Numquam, aliquid doloribus.</p>
            </div>
        </div>
      </Wrapper>
    );
}

export default About
