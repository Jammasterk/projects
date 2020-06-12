import React, { Component } from 'react'
import {Redirect, Link, Switch, Route} from "react-router-dom"
import Packages from "./Packages"
import Contact from "./Contact"

export class Splash extends Component {
    render() {
        return (
          <div className="container">
            <div className="sectionOne">
              <h1 className="header">Jackson Photography</h1>
              <p className="sub-header">
                Artist / Designer / Photographer / Videographer
              </p>
            </div>
            <div className="sectionTwo"></div>
            <div className="sectionThree"></div>
            <div className="sectionFour"></div>
            <div className="sectionFive">
              <Link className="links" to="/">
                Packages
              </Link>
              <Switch>
                <Route path="/Packages">
                  <Packages />
                </Route>
              </Switch>
            </div>
            <div className="sectionSix"></div>
            <div className="sectionSeven">
              <Link className="links" to="/Contact">
                Contact Me
              </Link>
              <Switch>
                <Route path="/Contact">
                  <Contact />
                </Route>
              </Switch>
            </div>
            <div className="sectionEight"></div>
            <div className="sectionNine"></div>
          </div>
        );
    }
}

export default Splash

