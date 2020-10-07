import React from 'react'
import Nav from "./Nav"
import styled from "styled-components"

const Wrapper = styled.div`
    .body{
        background: brown;
        height: 100vh;
        width: 100%;
        position: absolute;
        top: 0
    }
    h1{
        color: black
    }
`

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
