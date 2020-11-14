import React from "react"
import styled from "styled-components"
import Person from "../assets/homeimage.svg"

const Wrapper = styled.div`
  h1 {
    font-size: 2em;
    font-family: "Titillium Web", sans-serif;
    font-size: 75px;
    color: #734496;
  }

  h2 {
    font-size: 40px;
    font-family: "Titillium Web", sans-serif;
    color: #734496;
    margin-bottom: 1em;
  }

  p,
  h5 {
    font-size: 30px;
    color: #3187c6;
    font-family: "Offside", cursive;
    margin: 1em 0;
  }

  h5 {
    font-size: 16px;
    margin-left: 1em;
  }

  small {
    margin-left: 1em;
    font-family: "Offside", cursive;
    font-size: 14px;
  }

  img {
    height: 346px;
  }

  .page-flex {
    display: flex;
    justify-content: space-around;
    margin-top: 0em;
  }

  .flex-left {
    display: inline-block;
    width: 50%;
    padding-left: 6em;
    margin-top: 4em;
  }

  .flex-right {
    width: 50%;
    padding-left: 5em;
    margin-top: 8em;
  }

  input {
    width: 50%;
    height: 40px;
    border-radius: 30px;
    margin: 1em;
    border: none;
    background: #e5e5e5;
    padding-left: 1em;
    color: #3187c6;
  }
  button {
    width: 30%;
    height: 40px;
    border-radius: 30px;
    margin: 1em;
    border: none;
    background: #734496;
    color: #fff;
    font-size: 20px;
  }

  @media only screen and (max-width: 745px) {
    .page-flex{
        display: block;
        margin-top: 0;
        width: 100vw
    }

    .flex-left{
        width: 100%;
        margin-left: 0;
        margin-top:1em;
        padding: 1em
    }

    .flex-right{
        width: 100%;
        margin-left: 0;
        padding: 1em ;
        margin-top: 0
    }

    input, button{
        width: 100%;
        padding-left: 0
    }
  }
`;

export default function Home(){

    return (
      <Wrapper>
        <div className="page-flex">
            <div className="flex-left">
            <h1>Goalie App</h1>
            <p>Set goals, Complete goals, Reward yourself</p>
            <img src={Person} alt=""/>
            </div>
            <form className="flex-right">
                <h2>Login Signup</h2>
                <input type="text" placeholder="username or email"/>
                <br/>
                <input type="text" placeholder="password"/>
                <br/>
                <small>Show Password</small>
                <br/>
                <button type="submit">Login</button>
                <h5>Not a member?</h5>
            </form>
        </div>
      </Wrapper>
    );
}