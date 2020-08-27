import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from "mdbreact";
import styled from "styled-components"

const Wrapper = styled.div`
  a {
    color: #fff !important;
  }

  button {
    background: transparent;
    border: none;
  }
  .navbar {
    width: 100vw;
  }
  .container {
    padding: 0;
    margin: 0;
    width: 100% !important;
  }
  @media (min-width: 1200px){}
  .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
    max-width: 100%;
  }
`;

class Navbar extends Component {
    state = {
        collapseID: "",
    };
       
    toggleCollapse = (collapseID) => () => {
        this.setState((prevState) => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : "",
        }));
    };
    
    render() {
        const {logout} = this.props
        return (
          <Wrapper>
              <MDBContainer style={{ margin: 0, padding: 0, width: "100vw" }}>
                <MDBNavbar
                  color="grey darken-3"
                  /* style={{ marginTop: "20px" }} */
                  dark
                >
                  <MDBContainer>
                    <MDBNavbarBrand>Medium Lite</MDBNavbarBrand>
                    <MDBNavbarToggler
                      onClick={this.toggleCollapse("navbarCollapse1")}
                    />
                    <MDBCollapse
                      id="navbarCollapse1"
                      isOpen={this.state.collapseID}
                      navbar
                    >
                      <MDBNavbarNav left>
                        <MDBNavItem active>
                          <MDBNavLink to="/profile">Profile</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink to="/public">Public</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <a onClick={logout}>Logout</a>
                        </MDBNavItem>
                      </MDBNavbarNav>
                    </MDBCollapse>
                  </MDBContainer>
                </MDBNavbar>
              </MDBContainer>
          </Wrapper>
        );
  }
}

export default Navbar