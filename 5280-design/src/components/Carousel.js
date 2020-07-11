import React, { Component } from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Bathroom from "../assets/bathroom.jpeg"
import Kitchen from "../assets/kitchen.jpeg"
import Office from "../assets/office.jpeg"
import Loft from "../assets/loft.jpeg"
import Cafe from "../assets/cafe.jpeg"
 
class DemoCarousel extends Component {
    render() {
        return (
          <div>
            <h1 style={{textAlign: "center", fontSize: "3.5em", marginTop: "1.5em"}}>
              Our Work
            </h1>
            <Carousel
              rtl
              dots
              
              slidesPerPage={1}
               autoPlay={3000}  
              stopAutoPlayOnHover={true}
              infinite
            >
              <img className="carousel-images" src={Bathroom} alt="" />
              <img className="carousel-images" src={Kitchen} alt="" />
              <img className="carousel-images" src={Office} alt="" />
              <img className="carousel-images" src={Loft} alt="" />
              <img className="carousel-images" src={Cafe} alt="" />
            </Carousel>
          </div>
        );
    }
};

export default DemoCarousel