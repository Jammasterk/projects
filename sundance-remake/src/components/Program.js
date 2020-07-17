import React from 'react'
import styled from "styled-components"

const Gallery = styled.div`
  background: #575151;
  width: 100%;
  height: 100vh;
  position: absolute;

  .exhibits {
    margin: auto;
    width: 25%;
    padding: 10px;
  }
`;

export default function Program() {
    return (
      <div className="exhibits">
        <Gallery>
          <img
            className="gallery-img"
            src="https://images.pexels.com/photos/3683194/pexels-photo-3683194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          />
        </Gallery>
      </div>
    );
}
