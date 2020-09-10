import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBContainer,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Portfolio from "./Portfolio"
import Logo from "./images/logo.png"

const Wrapper = styled.div`
  .nav-color {
    background: #071e3d !important;
  }
  img {
    width: 150px;
    height: 75px;
  }

  .logo {
    font-family: "Shadows Into Light", cursive;
  }
`;

class Navbar extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const container = { height: 1300 };
    return (
      <div>
        <Wrapper>
          <Router>
            <header>
              <MDBNavbar className="nav-color" dark expand="md">
                <MDBNavbarBrand href="/">
                    <h5 className='logo'>Johnson Photography</h5>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav center>
                    <MDBNavItem active>
                      <MDBNavLink to="#">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#">Portfolio</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#">About</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#">Contact</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBNavLink to="#">
                        <MDBIcon className="fb" fab icon="facebook-f" />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#">
                        <MDBIcon className="tw"fab icon="twitter" />
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#">
                        <MDBIcon fab icon="instagram" />
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
            </header>
          </Router>
          {/* <MDBContainer style={container} className="text-center mt-5">
            <h2>This Navbar isn't fixed</h2>
            <h5>When you scroll down it will disappear</h5>
          </MDBContainer> */}
        </Wrapper>
      </div>
    );
  }
}

export default Navbar;
