import React from 'react'
import styled from "styled-components"
import Navbar from "./components/Navbar.js"
import "./main.css";

const Wrapper = styled.div`
  h1 {
    font-family: "Raleway", sans-serif;
    font-weight: 200
  }
`;

export default function App() {
    return (
      <Wrapper>
        <div>
           <Navbar/>
            </div>
      </Wrapper>
    );
}
