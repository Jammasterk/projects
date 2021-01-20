import React, {useState} from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled.div`
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    background: transparent;
    padding-top: 1em
  }
  li {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
  }

  a {
    color: #e2ded3;
    text-decoration: none
  }

  i{
      color: #e2ded3;
      padding: .5em
  }

  .responseNav{
      display: none
  }

  .hamburger{
      display: none
  }

  @media only screen and (max-width: 600px) {
  a{
      color: #e2ded3
  }

  .responseNav{
      display: block;
      padding-left: 1em
  }
  .openNav{
      display: none
  }

  .hamburger{
    display: block
  }
}
`;


function Nav() {

    const [open, setOpen] = useState(false)

    function toggleChange(e){
        e.preventDefault(setOpen(!open))
    }

   function bar(){
       return <i class="fas fa-bars"></i>;
   }

   function close(){
       return <i class="fas fa-times"></i>;
   }


    return (
      <Wrapper>
        <div>
          <ul className="openNav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/WOD">WOD</Link>
            </li>
            <li>
              <Link to="/rates">Membership</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="responsive">
          <div className="hamburger" onClick={toggleChange}>
            {/* <i class="fas fa-bars"></i> */}
            {!open ? <i class="fas fa-bars"></i> : <i class="fas fa-times"></i>}
          </div>
          <ul
            style={open ? { display: "block" } : { display: "none" }}
            className="responseNav"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/WOD">WOD</Link>
            </li>
            <li>
              <Link to="/rates">Membership</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    );
}

export default Nav
