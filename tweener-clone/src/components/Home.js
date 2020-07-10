import React from "react"
import styled from "styled-components"

export function Home(){

    const Image = styled.image`
      margin-top: 10%;
    `;

    const Title = styled.h1`
      color: #3b5441;
      font-size: 250.5%;
      position: absolute;
      top: 0;
      display: inline-block;
      font-family: "Krona One", sans-serif;
      margin-left: 9.5%;
      z-index: 1;
      margin-top: 85px;
    `;

    const Sub = styled.span`
      color: #ac3f21;
    `;

    const Ul = styled.ul`
      list-style-type: none;
      position: fixed;
      right: 0;
      margin-right: 1.5em;
      font-family: "Montserrat", sans-serif;
      z-index: 3;
      line-height: 32px;
    `;

    const Socials = styled.ul`
        z-index: 3;
    `

    const Main = styled.main`
        position: absolute;
        bottom: 0;
        margin-top: 20%;
    `

    const SecHead = styled.h2`
        /* margin-top: 255px; */

    `

    const HeaderText = styled.div`
      position: absolute;
      color: #3b5441;
      bottom: 0;
      /* margin-top: 1em; */
    `;

    const CardContainer = styled.div`
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        height: 300px;
        width: 100vw;
        flex-direction: row;
        bottom: 0;
        margin-bottom: -22em;
    `


    return (
      <div>
        <header className="splashPage">
          <Ul>
            <ul className="links">
              <li>home</li>
              <li>about</li>
              <li>skills</li>
              <li>work</li>
              <li>contact</li>
            </ul>
          </Ul>
          <Title>
            <h1 className="black" style={{ margin: 0 }}>
              DESIGN <br />
              <Sub>
                <span className="red" style={{ marginLeft: ".5em" }}>
                  YOUR SPACE
                </span>
              </Sub>
            </h1>
          </Title>
          <Image>
            <img
              src="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
            />
          </Image>
          <Socials>
            <ul className="socials">
              <li>twitter</li>
              <li>linkedIn</li>
              <li>instagram</li>
            </ul>
          </Socials>
          <HeaderText>
            <div className="header-text">
              <h2 className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                earum aut sint sunt? Sint, ducimus. Quidem voluptas numquam
                quasi.
              </h2>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                minima aperiam placeat culpa deleniti ad soluta reiciendis
                tempora accusamus provident ipsum beatae voluptatem quibusdam
                corrupti consequuntur, aliquid molestias praesentium et qui.
                Cupiditate, mollitia adipisci quo asperiores necessitatibus quam
                ipsa iste ex facere incidunt itaque possimus animi neque tempora
                voluptatibus magnam laboriosam saepe! Doloribus laudantium
                voluptates cum?
              </p>
            </div>
          </HeaderText>
        </header>
        <Main>
          <main>
            <SecHead>
              <h2
                style={{
                  marginLeft: "4em",
                  width: "50vw",
                  color: "#40514e",
                  fontWeight: "600",
                  fontSize: "2em",
                  position: "absolute",
                  marginTop: "8em",
                }}
              >
                WHAT WE DO
              </h2>
              <CardContainer>
                <div
                  className="card-container"
                  style={{ position: "absolute", marginTop: "300px", top: "0" }}
                >
                  <div
                    className="card"
                    style={{ width: "300px", backgroundColor: "#ac3f21" }}
                  >
                    <h3
                      style={{ textAlign: "center", fontFamily: "Montserrat" }}
                    >
                      Commercial
                    </h3>
                    <img
                      style={{
                        width: "300px",
                        height: "250px",
                        position: "relative",
                        marginTop: "0",
                      }}
                      src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt=""
                    />
                  </div>
                  <div className="card">
                    <h3
                      style={{ textAlign: "center", fontFamily: "Montserrat" }}
                    >
                      Residential
                    </h3>
                    <img
                      style={{
                        width: "300px",
                        height: "250px",
                        position: "relative",
                        marginTop: "0",
                      }}
                      src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt=""
                    />
                  </div>
                  <div className="card">
                    <h3
                      style={{ textAlign: "center", fontFamily: "Montserrat", fontWeight: 200 }}
                    >
                      Events
                    </h3>
                    <img
                      style={{
                        width: "300px",
                        height: "250px",
                        position: "relative",
                        marginTop: "0",
                      }}
                      src="https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt=""
                    />
                  </div>
                </div>
              </CardContainer>
            </SecHead>
          </main>
        </Main>
      </div>
    );

}

export default Home