import React, { Component } from 'react'
// import Work from "./Work"
export class Splash extends Component {
    render() {
        return (
          <div className="Splash">
            <div className="overlay"></div>
            <img
              src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="SplashText">
              <h1>Jared Manwaring</h1>
              <p>Fullstack Web Developer Located in Salt Lake City Utah</p>
            </div>
            <div className="Contact"></div>
            <div className="skills">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
        );
    }
}

export default Splash
