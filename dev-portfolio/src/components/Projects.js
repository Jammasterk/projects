import React from 'react'
import Nav from "./Nav"
import styled from "styled-components"


const Wrapper = styled.div`
  .body {
    height: 100vh;
    width: 100vw;
    background: #f5c16c;
  }
`;
function Projects() {
    return (
      <Wrapper>
        <div className="body">
          <Nav />
          <h1>My projects</h1>
        </div>
      </Wrapper>
    );
}

export default Projects
