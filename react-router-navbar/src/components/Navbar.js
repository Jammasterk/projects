import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

 const Wrapper = styled.div`
   @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

   .line {
     height: 4px;
     width: 35px;
     background: #fff;
     margin: 6px 0;
     border-radius: 5px;
   }

   ul {
     display: none;
     margin-top: -100px;
     height: 100%;
     /* width: 25%; */
     background: #40514e;
     /* opacity: 0.9; */
     -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
       both;
     animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
   }

   #outerWrapper {
     margin-top: 0;
   }

   a {
     text-decoration: none;
     color: white;
     width: 1000px !important;
     font-size: 30px;
     font-family: "Roboto", sans-serif;
     padding-right: 600px
   }



   @-webkit-keyframes slide-bottom {
     0% {
       -webkit-transform: translateY(-100px);
       transform: translateY(-100px);
     }
     100% {
       -webkit-transform: translateY(0);
       transform: translateY(0);
     }
   }
   @keyframes slide-bottom {
     0% {
       -webkit-transform: translateY(0);
       transform: translateY(0);
     }
     100% {
       -webkit-transform: translateY(100px);
       transform: translateY(100px);
     }
   }
   #list_item_top {
     padding-top: 60px;
   }

   #list-item {
     background: red;
     width: 100%;
   }
   li {
     padding: 2em;
     width: 25%;
     cursor: pointer;
   }
   ul {
     list-style: none;
     border: none;
   }

   .hamburger {
     cursor: pointer;
     padding: 8px;
     margin: 0;
     background: #40514e;
     border: none;
   }
 `;

function click(){
    document.getElementById('navToggle').style.display = "block"
}

function outsideClick(){
    document.getElementById('navToggle').style.display = "none"
}

const Navbar = () => {
    return (
      <Wrapper>
        <div id="outerWrapper">
          <div className="hamburger" onClick={click}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul id="navToggle">
            <li onClick={outsideClick} id="list_item_ list_item_top">
              <Link to="/">Home</Link>
            </li>
            <li onClick={outsideClick} id="list_item">
              <Link to="/about">About</Link>
            </li>
            <li onClick={outsideClick} id="list_item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div onClick={outsideClick}></div>
        </div>
      </Wrapper>
    );
}

export default Navbar