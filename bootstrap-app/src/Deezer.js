import React, {useEffect, useState} from "react"
import styled from "styled-components"
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInputGroup } from "mdbreact";
import DeezerMap from "./DeezerMap"

const Deezer = () => {
    const APP_ID = "423622";
    const API_KEY = "570a4a103a9fa511b252c7fac1bbc995";

    
    useEffect(() => {
        getTrack()
    }, [])
    
    const Wrapper = styled.div`
      .image {
        background: url("https://images.pexels.com/photos/783243/pexels-photo-783243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") !important;
        background-position: center;
        background-size: cover;
        width: 100%
      }
    `;

const [search, setSearch] = useState([])
const getTrack = async () => {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=rihanna`
        );
        // const data = await response.json()
        const data = response.json()
        console.log(data)
        setSearch(data)
    }
    return (
      <div>
        <div>
          <Wrapper>
            <MDBContainer className="mt-5 text-center w-100">
              <MDBRow>
                <MDBCol>
                  <MDBJumbotron className="image">
                    <h2 className="h1 display-3 mb-5">Deezer App</h2>
                    <MDBInputGroup
                      className="mt-5"
                      material
                      containerClassName="mb-2 mt-0"
                      prepend="Enter Search..."
                    />
                    <MDBBtn
                      className="mt-5 w-25"
                      rounded
                      outline
                      color="default"
                    >
                      Search
                    </MDBBtn>
                  </MDBJumbotron>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </Wrapper>
        </div>
        {search.map((song) => (
          <DeezerMap />
        ))}
      </div>
    );

}

export default Deezer
