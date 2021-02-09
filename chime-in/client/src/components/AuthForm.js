import React, { useState } from "react";
import styled from "styled-components";
import Mural from "../assets/cropped-mural.png";

const Wrapper = styled.div`
  img {
    width: 100vw;
    height: 650px;
    margin-top: 75px;
  }

  .text {
    position: absolute;
    top: 0;
    color: #e5e4e2;
    font-family: "Titillium Web", sans-serif;
    z-index: 4;
    width: 100%;
    left: 0;
  }
  form {
    width: 450px;
    height: 550px;
    position: absolute;
    background: #2d4059;
    /* opacity: 0.2; */
    z-index: 2;
    /* position: relative; */
    top: 0;
    right: 0;
    /* margin-top: 125px; */
    opacity: 0.9;
  }
  h1 {
    font-size: 32px;
    font-family: "Titillium Web", sans-serif;
    color: #e5e4e2;
    padding-left: 50px;
    padding-top: 1em;
  }

  .title {
    margin-top: 250px;
    color: #fff;
  }
  p {
    font-size: 28px;
    font-weight: 200;
    display: inline-block;
    padding-left: 50px;
    width: 50%;
  }

  label {
    color: #fff;
  }
  .overlay {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.5;
    z-index: 0;
    height: 650px;
    margin-top: 75px;
  }
  .inner-form {
    position: absolute;
    z-index: 5;
    color: #000;
    padding-left: 1em;
    width: 80%;
    padding-top: 50px;
  }
  .container {
    display: flex !important;
    width: 100vw;
  }
  .signup-text {
    margin-bottom: 1em;
    margin-left: 0
  }
`;

export default function AuthForm(props) {
  const [toggle, setToggle] = useState(false);

  function tog() {
    setToggle(!toggle);
  }

  const {
      handleChange,
      handleSubmit,
      btnText,
      errMsg,
      inputs: {
          email,
          password
      }
  } = props

  return (
    <Wrapper>
      <div>
        <img src={Mural} alt="" />
        <div className="overlay"></div>
        <div className="container">
          <div className="text">
            <h1 className="title">
              Chime In <i class="fas fa-concierge-bell"></i>
            </h1>

            <p>Share, view, and review design projects from artists, designers, and developers.</p>
            <form onSubmit={handleSubmit}>
              <div className="inner-form">
                <h1 className="signup-text">Signup / Login</h1>
                <div class="mb-4">
                  <label class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control w-100"
                    placeholder="name@example.com"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">
                    password
                  </label>
                  <input
                    type={toggle ? "text" : "password"}
                    class="form-control"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={tog}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    {toggle ? "Hide" : "Show"} password
                  </label>
                </div>
                <button type="submit" class="btn btn-dark w-75 mt-4">
                    {btnText}
                </button>
              </div>
              <p>{errMsg}</p>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
