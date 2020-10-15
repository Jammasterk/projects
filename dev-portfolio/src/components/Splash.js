import React from 'react'
import styled from "styled-components"
import Background from "../assets/computer.jpg"
import Nav from "./Nav"


const Wrapper = styled.div`
  font-family: "Source Sans Pro", sans-serif;

  .background {
    background-image: url(${Background});
    height: 100%;
    width: 100vw;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    z-index: -1;
  }
  .overlay {
    background: black;
    height: 100%;
    opacity: 0.7;
  }

  .title {
    font-size: 7vw;
    margin-top: 2em;
    width: 100%;
  }

  h2 {
    text-align: center;
    margin-top: 2em;
  }

  p {
    font-size: 20px;
    margin-top: 32px;
    padding: 0 16px
  }

  .title,
  p {
    font-weight: 200;
    text-align: center;
    width: auto;
    padding: 0 48px
  }
  .text {
    position: absolute;
    top: 0;
    color: #fff;
    margin: 0 auto;
    width: 100%;
  }
  a{
      
      text-decoration: none;
      color: #fff;
      font-size: 30px;
      font-weight: 200;
      padding: 8px 16px;
      border: 1px solid #fff;      
      display: inline-block;
      
  }
a:hover{
   
    color: black
} 

  i,
  .fab {
    color: #fff;
    font-size: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: transparent;
    justify-content: center;
    text-align: center;
    margin: 0 16px;
  }
  .socials {
    display: flex;

    width: 100vw;
    margin-top: 2em;
    position: absolute;
    /* bottom: 0; */
    z-index: 9;
    justify-content: center;
  }
  .icons {
    border: none;
  }
`;

export default function Splash() {
    return (
      <div>
        <Wrapper>
          <Nav />
          <div className="background">
            <div className="overlay"></div>
            <div className="text">
              <h1 className="title">Jared Manwaring</h1>
              <p>
                Hi, my name is Jared. I am a full stack web developer located in
                Salt Lake City, UT. As a recent fullstack bootcamp graduate I am
                looking to find a
              </p>
              {/* <h2>
                <Link to="/projects">My work</Link>
              </h2> */}
              <div className="socials">
                <a
                  href="https://github.com/Jammasterk/projects"
                  target="_blank"
                  className="icons"
                >
                  <i className="fab fa-github "></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jared-manwaring-1089186a/"
                  target="_blank"
                  className="icons"
                >
                  <i class="fab fa-linkedin-in "></i>
                </a>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    );
}
