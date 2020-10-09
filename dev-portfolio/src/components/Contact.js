import React from 'react'
import Nav from "./Nav"
import ContactImg from "../assets/contact-page.jpg"
import styled from "styled-components"

const Wrapper = styled.div`
  font-family: "Source Sans Pro", sans-serif;



  .container {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    top: 0;
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    background: black;
    height: 100vh;
    width: 100%;
    opacity: 0.5;
  }

  h1 {
    color: #fff;
    font-weight: 200;
    margin-bottom: 38px;
  }

  p {
    color: #fff;
    font-size: 25px;
    font-weight: 200;
    margin: 8px 0;
  }

  form {
    background: transparent;
    width: 35%;
    position: absolute;
    right: 0;
    top: 0;
    /* padding: 24px; */
    color: #fff;
    /* z-index: 1; */
    height: 100%;
  }

  label {
    font-weight: 200;
  }

  .info {
    position: absolute;
    left: 0;
    margin-left: 10%;
    border-left: 1px solid white;
    padding-left: 2em;
  }

  input {
    width: 100%;
    margin: 0.5em 0;
    border-radius: 4px;
    height: 30px;
  }

  input:focus{
    outline: none
  }

  textarea {
    width: 100%;
    margin-top: 0.5em;
    border-radius: 4px;
  }

  .flex {
    display: flex;
    width: 90%;
    margin: 6em auto;
    justify-content: center;
    position: absolute;
    z-index: 3;
    /* height: 100%; */
  }

  .form-inner {
    position: absolute;
    top: 0;
    background: #000;
    height: 25em;
    left: 0;
    z-index: -1;
    opacity: 0.8;
    padding: 32px;
    position: absolute;
    right: 0;
    border-radius: 12px;
  }
  button {
    margin-top: 2em;
    font-size: 16px;
    background: transparent;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    font-weight: 200;
  }

  .contact-img {
    background-image: url(${ContactImg});
    background-size: cover;
    background-position: center;
    top: 0;
    height: 100%;
    width: 100vw;
    position: absolute;
  }

  button {
    width: 50%;
    height: 40px;
  }
`;
export default function Contact() {
    return (
      <>
        <Nav />
        <Wrapper>
          <div className="container">
            <div className="contact-img"></div>
            <div className="overlay"></div>
            <div className="flex">
              <div className="info">
                <h1>Jared Manwaring</h1>
                <p>Jaredmanwaring@me.com</p>
                <p>720-646-7683</p>
              </div>
              <form
                action="mailto:jaredmanwaring@me.com"
                method="post"
                enctype="text/plain"
              >
                <div className="form-inner">
                  <label htmlFor="">First Name</label>
                  <br />
                  <input type="text" name="first-name" />
                  <br />
                  <label htmlFor="">Last Name</label>
                  <br />
                  <input type="text" name="last-name" />
                  <br />
                  <label htmlFor="">Message</label>
                  <br />
                  <textarea name="message" id="" cols="30" rows="10"></textarea>
                  <br />
                  <button type="submit" value="Send">
                    Send me a message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Wrapper>
      </>
    );
}
