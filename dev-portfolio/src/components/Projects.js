import React from 'react'
import Nav from "./Nav"
import styled from "styled-components"

const Wrapper = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 200;
  .body {
    background: brown;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
  }
  h1 {
    color: black;
  }
`;

export default function Projects() {
    return (
        <div>
          <Nav />
      <Wrapper>
        <div className="body">
          <h1>
          Projects
          </h1>
        </div>
      </Wrapper>
        </div>
    );
}
