import React from 'react'
import Nav from "./Nav"
import styled from "styled-components"

const Wrapper = styled.div`
  .body {
    height: 100vh;
    width: 100vw;
    background: #b4cd93;
  }
`;

function You() {
    return (
      <>
        <Nav />
        <Wrapper>
          <div className="body"></div>
        </Wrapper>
      </>
    );
}

export default You

