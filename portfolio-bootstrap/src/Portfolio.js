import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import styled from "styled-components"
import Video from "./images/video.mp4"

const Wrapper = styled.div`
  background: #393e46;
  img {
    width: 100%;
  }

  img:hover {
    opacity: 0.5;
  }
  .row {
    margin-top: 2em;
  }
  video {
    width: 100%;
  }
  video:hover {
    opacity: 0.5;
  }
`;


const Portfolio = () => {
  return (
    <Wrapper>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <img
              src="https://images.pexels.com/photos/4931004/pexels-photo-4931004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </MDBCol>
          <MDBCol>
            <img
              src="https://images.pexels.com/photos/2947924/pexels-photo-2947924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="row">
          <MDBCol>
            <img
              src="https://images.pexels.com/photos/2947337/pexels-photo-2947337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="grid"
              alt=""
            />
          </MDBCol>
          <MDBCol>
            <img
              src="https://images.pexels.com/photos/4850412/pexels-photo-4850412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="grid"
              alt=""
            />
          </MDBCol>
          <MDBCol>
            <img
              src="https://images.pexels.com/photos/3021601/pexels-photo-3021601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="grid"
              alt=""
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <img
              src="https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </MDBCol>
          <MDBCol>
            <img
              src="https://images.pexels.com/photos/4555632/pexels-photo-4555632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
                <video autoPlay loop>
                    <source src={Video} type="video/mp4"/>
                </video>
            </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

export default Portfolio ;

