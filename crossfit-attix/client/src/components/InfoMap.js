import React from "react"
import locationData from "../locationData"
import styled from "styled-components"

const Wrapper = styled.div`
  p {
    color: #33363b !important;
  }
`;

export default function InfoMap(){
    const location = locationData.map((loc) => (
      <Wrapper>
        <div key={loc.key}>
          <p>{loc.address}</p>
          <p>{loc.city}</p>
          <p>{loc.zip}</p>
          <p>555-555-5555</p>
          <a href={loc.direction}>Directions</a>
        </div>
      </Wrapper>
    ));
    return [location]
}