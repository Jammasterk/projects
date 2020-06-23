import React, { Component } from 'react'

export class Products extends Component {
    render() {
        return (
          <div className="productPage">
            <div className="productText">
              <h1 className="education">Our Educational Services</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                accusamus obcaecati ipsum! Veritatis, voluptate. Necessitatibus
                nemo similique perspiciatis aspernatur animi laudantium omnis!
                Exercitationem, doloremque repellat!
              </p>
            </div>
            <div className="cards">
              <div className="innerCard">
                <img
                  className="png"
                  src="https://img.icons8.com/bubbles/2x/test-tube.png"
                  alt=""
                />
                <br />
                <ul>
                  <li>Biology</li>
                  <li>Chemistry</li>
                  <li>Physics</li>
                  <li>Geology</li>
                </ul>
              </div>
              <div className="innerCard">
                <img
                  className="png"
                  src="https://i.ya-webdesign.com/images/building-construction-png-4.png"
                  alt=""
                />
                <br />
                <ul>
                  <li>Structural Engineering</li>
                  <li>Construction Engineering</li>
                  <li>Chemical Engineering</li>
                </ul>
              </div>
              <div className="innerCard">
                <img
                  className="png"
                  src="http://www.clker.com/cliparts/3/e/6/e/11949967931713723703kig.svg.med.png"
                  alt=""
                />
                <br />
                <ul>
                  <li>Algebra</li>
                  <li>Calculus</li>
                  <li>Theoretical Math</li>
                  <li>Differential Equations</li>
                </ul>
              </div>
              <div className="innerCard">
                <img
                  className="png one"
                  src="https://www.netclipart.com/pp/m/90-901535_community-houses-clipart-png.png"
                  alt=""
                />
                <br />
                <ul>
                  <li>Piano Lessons</li>
                  <li>Voice Lessons</li>
                  <li>Music Theory</li>
                  <li>Guitar Lessons</li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default Products

// http://www.clker.com/cliparts/9/c/7/7/11949866351514025671sixteenth_notes_joined__01.svg.med.png