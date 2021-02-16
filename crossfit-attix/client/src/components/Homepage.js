import React from 'react'
import styled from "styled-components"
import HomeImage from "../assets/woman-holding-bar.jpeg"
import BoxJump from "../assets/box-jump.jpeg"
import Nav from "./Nav"
import WOD from "./WOD"
import {Switch, Route, Link} from "react-router-dom"
import Admin from "./Admin"


const Wrapper = styled.div`
  .holdbar {
    width: 100%;
    height: 100vh;
  }

  .boxjump {
    display: none;
  }
  .filter {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: calc(28 / 100);
    background: #403f3f;
  }
  .content {
    position: absolute;
    top: 0;
    margin-top: 13%;
    margin-left: 10%;
    font-family: "Poppins", sans-serif;
  }

  h1 {
    color: #e2ded3;
    font-size: 100px;
    font-weight: 200;
    line-height: 100px;
  }

  h4 {
    color: #e2ded3;
    letter-spacing: 8px;
    margin-top: 0.5em;
  }

  button {
    background: transparent;
    border: 1px solid #e2ded3;
    color: #e2ded3;
    font-size: 24px;
    font-weight: 200;
    padding: 0.25em;
    margin-top: 1em;
  }
  .background-photo {
    position: absolute;
    top: 0;
    z-index: -1;
  }

  video {
    display: none;
  }
  .admin {
    font-family: "Poppins", sans-serif;
    color: #403f3f;
    text-decoration: none;
    text-align: center
  }

  @media only screen and (max-width: 600px) {
    .holdbar {
      display: none;
    }
    .boxjump {
      width: 100%;
      height: 100vh;
      display: block;
    }
    .content {
      margin-top: 25%;
    }
    h1 {
      font-size: 60px;
    }

    h4 {
      font-size: 14px;
    }
  }
`;

function Homepage() {
  <Switch>
    <Route path="/admin">
    component={Admin}
    </Route>
  </Switch>
    return (
      <Wrapper>
        <Nav style={{position: "absolute", zIndex: 2}} />
        <div className="background-photo">
            <img className="holdbar" src={HomeImage} alt=""/>
            <img className="boxjump" src={BoxJump} alt=""/>
            <div className="filter"></div>
            <div className="content">
                <h1>CROSSFIT <br/> ATTIX</h1>
                <h4>Denver | Centennial | Boulder</h4>
                <button>Try a class for free</button>
            </div>
        <Link className="admin" to="/admin"> 
        Admin Access
         </Link>
        </div>
      </Wrapper>
    );
}

export default Homepage
