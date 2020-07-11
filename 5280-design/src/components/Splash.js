import React from 'react'
import Kitchen from "../assets/kitchen.png"
import Bathroom from "../assets/bathroom.png"
import Furniture from "../assets/furniture.png"
import Hotel from "../assets/hotel.png"
import Person1 from "../assets/lady-1.png"
import Person2 from "../assets/ekaterina.png"
import Person3 from "../assets/christina.png"
import DemoCarousel from "./Carousel"

export function Splash() {
    return (
      <div className="splash">
        <div className="splash-page">
          <div className="left"></div>
          <div className="text">
            <p className="top-text">We are your local</p>

            <h1>
              interior <br /> designers.
            </h1>
            <button className="request">Connect with a designer</button>
            <h4>
              5280 Design is located at 520 Bannock St. we are your choice for
              residential and commercial interior design. A Denver original
              since 2009
            </h4>
          </div>
          <div className="right">
            <div
              className="buttons"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <ul
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  listStyle: "none",
                  fontFamily: "arial",
                  fontWeight: "200",
                  marginTop: "16px",
                  width: "100%",
                }}
              >
                <li>Home</li>
                <li>Products</li>
                <li>Social</li>
                <li>Resources</li>
              </ul>
              <button
                style={{
                  marginTop: "6px",
                  marginRight: "10px",
                  height: "36px",
                  padding: "10px 10px",
                  cursor: "pointer",
                }}
                type="submit"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="services">
          <small>Services that we provide.</small>
          <h2>
            Our talented designers specialize in a range of services. with over
            25 years of combined experience, we are sure to find the perfect
            designer for you.
          </h2>
        </div>
        <div className="specialties">
          <img className="icons" src={Kitchen} alt="" />
          <img className="icons2" src={Bathroom} alt="" />
          <img className="icons3" src={Furniture} alt="" />
          <img className="icons4" src={Hotel} alt="" />
        </div>
        <div className="team-members">
          <div className="text-2"></div>
        </div>
        <h1 className="team">Our Team</h1>
        <div className="people">
          <div className="card-container">
            <img className="person" src={Person1} alt="" />
            <p className="name">Sasha St. Louis</p>
            <p className="sub-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              corporis delectus quibusdam porro, harum repudiandae!
            </p>
          </div>
          <div className="card-container">
            <img className="person" src={Person2} alt="" />
            <p className="name">Angela Thomas</p>
            <p className="sub-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              corporis delectus quibusdam porro, harum repudiandae!
            </p>
          </div>
          <div className="card-container">
            <img className="person" src={Person3} alt="" />
            <p className="name">Chrissy Lennon</p>
            <p className="sub-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              corporis delectus quibusdam porro, harum repudiandae!
            </p>
          </div>
        </div>
        <div className="carousel">
          <DemoCarousel />
        </div>
        <footer>
          <h1 style={{ textAlign: "center", margin: "26px 0", color: "#fff" }}>Contact Us</h1>
          <div className="footer">
            <ul>
              <li>520 Bannock St. 80204</li>
              <li>Denver Colorado</li>
              <li>303-505-5555</li>
            </ul>
            <ul>
              <li>100 S. Monarch St. 81661</li>
              <li>Aspen Colorado</li>
              <li>970-505-4444</li>
            </ul>
            <ul>
              <li>655 Breckenridge Rd. 80424</li>
              <li>Breckenridge Colorado</li>
              <li>970-505-4444</li>
            </ul>
          </div>
        </footer>
      </div>
    );
}

export default Splash
