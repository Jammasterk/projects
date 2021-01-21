import React, {useState} from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"
import locationData from "../locationData.js"
import Nav from "./Nav"
import Man from "../assets/man-doing-crossfit.jpg"
import styled from "styled-components"

const Wrapper = styled.div`
  h1 {
    text-align: center;
    margin: 1em;
  }
  h1,
  h3,
  p {
    font-family: "Poppins", sans-serif;
    color: #e2ded3;
  }

  .deets {
    color: #33363b !important;
  }
  .info {
    width: 50%;
    padding: 1em;
  }
  .flex {
    display: flex;
  }
  .locations {
    display: flex;
    justify-content: space-around;
  }
  .man {
    height: 107vh;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -2;
    background-size: cover;
  }
  .filter {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: calc(40 / 100);
    background: #403f3f;
    z-index: -1;
  }
  .info {
    height: 100%;
  }

  .map{
    width: 50vw;
    height: 100vh
  }

  .align{
    text-align: start
  }

  @media only screen and (max-width: 1020px) {
   .locations{
       display: block;
       width: 100%
   }
   .loc{
       margin: 1em 0;
       align-content: center
   }
   h1, h3, p{
       text-align: center
   }

   @media only screen and (max-width: 600px){
       .flex{
           display: block !important
       }
       .map{
           width: 100vw;
           height: 30vh

       }
       .info{
           width: 100vw
       }
       iframe{
           max-height: 50vh !important;
       }
   }
  }
`;

function Map() {

    const [selectedLocation, setSelectedLocation] = useState(null)

    return (
      <div>
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 39.748859, lng: -104.99752 }}
        >
          {locationData.map((loc) => (
            <Marker
              key={loc.id}
              position={{
                lat: loc.lat,
                lng: loc.lng,
              }}
              onClick={() => {
                setSelectedLocation(loc);
              }}
            />
          ))}
          {selectedLocation && (
            <InfoWindow
              position={{
                lat: selectedLocation.lat,
                lng: selectedLocation.lng,
              }}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div>

                <p className="align" style={{color: "#333634"}}>{selectedLocation.address}</p>
                <p className="align" style={{color: "#333634"}}>
                  {selectedLocation.city}. {selectedLocation.zip}
                </p>
                
                <p className="align" style={{color: "#333634"}}>720-555-5555</p>
                <a className="align" href={selectedLocation.direction}>Directions</a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function Contact(){
    return (
      <Wrapper>
        <Nav />
        <img className="man" src={Man} alt="" />
        <div className="filter"></div>
        <div className="flex">
          <div className="info">
            <h1>Locations</h1>
            <div className="locations">
              <div className="loc">
                <h3>Crossfit Attix 1</h3>
                <p>1150 Larimer St.</p>
                <p>Denver CO. 80202</p>
                <p>720-555-5555</p>
              </div>
              <div className="loc">
                <h3>Crossfit Attix 2</h3>
                <p>6834 S University Blvd</p>
                <p>Centennial CO. 80012</p>
                <p>720-555-5555</p>
              </div>
              <div className="loc">
                <h3>Crossfit Attix 3</h3>
                <p>6525 Gunpark Dr Ste. 370</p>
                <p>Boulder CO. 80301</p>
                <p>720-555-5555</p>
              </div>
            </div>
          </div>
          <div className="map">
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC9JB8ol62HnhEKe6V1kNBSMao5UbmzV-o`}
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100vh" }} />}
            />
          </div>
        </div>
      </Wrapper>
    );
}
