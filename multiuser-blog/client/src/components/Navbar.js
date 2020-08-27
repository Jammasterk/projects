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
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components"

const Wrapper = styled.div`

    a{
      color: #fff !important
    }

    button{ 
        background: transparent;
        border: none
        }
.navbar{
    width: 100vw
}
.container{
  padding: 0;
  margin: 0;
  width: 100% !important
} 
`

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
            <Router>
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
                          <MDBNavLink to="#!">Profile</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active>
                          <a onClick={logout}>Logout</a>
                        </MDBNavItem>
                      </MDBNavbarNav>
                    </MDBCollapse>
                  </MDBContainer>
                </MDBNavbar>
              </MDBContainer>
            </Router>
          </Wrapper>
        );
  }
}

export default Navbar