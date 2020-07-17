import React from 'react'
import HomePage from "./HomePage"
import Program from "./Program"
import About from "./About"
import Tickets from "./Tickets"
import Shop from "./Shop"
import Volunteer from "./Volunteer"
import Industry from "./Industry"
import Press from "./Press"
import styled from "styled-components"

import { Switch, Route, Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100vw;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0;
  display: inline-block;
  position: absolute;
  /* display: none; */
  /* z-index: 3; */

  .ul {
    display: inline-block;
    position: absolute;
    right: 0;
    text-decoration: none;
    width: 100%;
    font-family: "Montserrat", sans-serif;
    background: rgba(54, 79, 107, .7);
    z-index: 5;
    height: 100vh
  }
  a {
    padding: 18px 10px;
    display: flex;
    text-decoration: none;
    color: #f1f1f1;
    z-index: 5
  }
`;

const NavBar = () => {
    return (
      <div className="nav">
        <Nav>
          <div className="ul">
            <Link className="li" to="/homepage">
              Home
            </Link>
            <Link className="li" to="/exhibit">
              Exhibits
            </Link>
            <Link className="li" to="/about">
              About
            </Link>
            <Link className="li" to="/tickets">
              Tickets
            </Link>
            <Link className="li" to="/shop">
              Shop
            </Link>
            <Link className="li" to="/volunteer">
              Volunteer
            </Link>
            <Link className="li" to="/industry">
              Industry
            </Link>
            <Link className="li" to="/press">
              Press
            </Link>
          </div>
        </Nav>
        <Switch>
          <Route exact path="/homepage">
            <HomePage />
          </Route>
          <Route path="/exhibit">
            <Program />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/volunteer">
            <Volunteer />
          </Route>
          <Route path="/industry">
            <Industry />
          </Route>
          <Route path="/press">
            <Press />
          </Route>
        </Switch>
      </div>
    );
}

export default NavBar

