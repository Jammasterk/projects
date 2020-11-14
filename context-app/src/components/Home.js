import React from "react"
import styled from "styled-components";
import Netflex from "../assets/condo.svg"
import Condo from "../assets/decent-condos.jpg"

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 400;

  .wrapper {
    background: url(${Condo});
    height: 100%;
    width: 100vw;
    z-index: 1;
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .appbar {
    /* display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto; */
  }

  img {
    display: inline-block;
    margin-top: -75px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  h1,
  h4,
  p {
    font-weight: 400;
    color: #fff;
    margin: 1em 0;
  }

  h4 {
    font-size: 24px;
  }

  h1 {
    width: 60%;
    text-align: center;
    font-weight: 400;
    font-size: 38px;
  }

  .container {
    width: 90%;
    height: 50%;
    margin: auto;
    position: absolute;

    /*  top: 50%; */
    /* -ms-transform: translateY(-50%);
    transform: translateY(-50%); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .controls {
    display: flex;
    width: 80%;
  }

  input {
    height: 55px;
    width: 110%;
    padding-left: 1em;
    border-radius: 4px 0 0 4px;
    font-size: 24px;
    border: none;
  }

  input:focus {
    outline: none;
  }
  .get-started {
    height: 55px;
    width: 70%;
    background: #40514e;
    color: white;
    border: none;
    font-size: 24px;
    font-weight: 200;
  }

  .sign-up {
    height: 30px;
    padding: 0 1em;
    background: #40514e;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-top: 1.5em;
  }

  .overlay {
    position: absolute;
    width: 100vw;
    height: 100%;
    background: black;
    opacity: 0.3;
  }
`;

function Home(){

    const rightCaret = () => {
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-caret-right"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
            />
          </svg>
        );
    }

    const logo = () => {
        return 
    }

    return (
      <Wrapper>
        <div className="wrapper">
            {/* <div className="overlay"></div> */}
            <div className="appbar">
                <img src={Netflex} alt="" style={{width: '200px', padding: 0}}/>
            {/* <button className="sign-up">Sign In</button> */}

            </div>
          <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership
            </p>
            <div className="controls">
              <input type="text" placeholder="Email address"/>
              <button className="get-started">GET STARTED {rightCaret}</button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}

export default Home