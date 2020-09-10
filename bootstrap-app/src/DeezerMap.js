import React from "react"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import styled from "styled-components"

const DeezerMap = () => {

    const Wrapper = styled.div`

        .img{
            max-width: 200px;
            height: 14em !important;
            margin-left: 0 !important
        }

        .view, .mask{
            max-height: 100% !important
        }
        .container{
            position: absolute;
            display: flex;
            border-right: 1px solid purple
            }
            .rounded{
                border-radius: 25px !important
            }
            audio{
                width: 200px
            }
    `

    return (
      <Wrapper>
        <MDBCol style={{ maxWidth: "100rem" }}>
          <MDBCard>
            <div className="container">
              <div className="image">
                <MDBCardImage
                  className="img img-fluid"
                  src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  waves
                />
              </div>
              <div>
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>Some quick example text to build</MDBCardText>
                  {/* <br /> */}
                  <audio src="" controls>
                    <source type="mp4/ogg" />
                  </audio>
                  <br/>
                  <MDBBtn className="rounded" outline color="info">
                    Play on Deezer
                  </MDBBtn>
                </MDBCardBody>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </Wrapper>
    );
}

export default DeezerMap