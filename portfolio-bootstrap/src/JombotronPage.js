import React from "react";
import { MDBJumbotron, MDBContainer, MDBBtn } from "mdbreact";
import styled from "styled-components"

const Wrapper = styled.div`
  .splash-image {
    width: 100%;
    height: 100vh;
    margin-left: 0;
    background: url("https://images.pexels.com/photos/2092872/pexels-photo-2092872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") !important;
    background-size: cover !important;
    background-position: center !important;
  }
  .button {
    border: 1px solid #fff !important;
    color: #fff !important;
    margin-top: 14rem;
  }
`;

const JumbotronPage = () => {
  return (
    <Wrapper>
      <MDBJumbotron fluid className="splash-image">
        <MDBContainer>
          <h2 className="display-4">Johnson Photography Studio</h2>
          <p className="lead">
            Denver | Aspen | Breckenridge | Atlanta
          </p>
          <MDBBtn className="btn-text" className="button" outline>Enter our studio</MDBBtn>
        </MDBContainer>
      </MDBJumbotron>
    </Wrapper>
  );
};

export default JumbotronPage;
