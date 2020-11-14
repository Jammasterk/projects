import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  .page-flex {
    width: 100%;
    display: flex;
    height: 100vh;
  }

  .left-flex {
    background: #8c39a4;
    height: 100%;
    width: 50%;
    position: fixed;
  }
  form {
    background: #fff;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.3em;
    width: 80%;
    height: 90%;
  }

  h1,
  p,
  small,
  label {
    color: #8c39a4;
    font-family: "Mukta", sans-serif;
  }
  h1 {
    font-size: 52px;
    font-family: "Titillium Web", sans-serif;
    text-align: center;
    padding-top: 1em;
  }
  p {
    font-size: 18px;
  }
  label {
    font-size: 24px;
  }

  .alarm {
    padding: 1em 0;
  }
  .fields {
    width: 100%;
    margin: 1.5em 0;
    border: none;
    border-bottom: 2px solid #8c39a4;
    font-size: 22px;
  }

  .fields:focus {
    outline: none;
  }

  .date {
    width: 40%;
    margin: 1.5em 0;
    border: none;
    border-bottom: 2px solid #8c39a4;
    font-size: 22px;
  }

  .submit {
    width: 40%;
    height: 40px;
    border-radius: 25px;
    border: none;
    background: #3187c6;
    font-size: 22px;
    color: #fff;
    margin-top: 2em;
  }

  .inner-form {
    padding: 2em;
  }

  .reminder-flex {
    display: flex;
    margin-top: 0.5em;
  }

  .p {
    margin-bottom: 0.75em;
  }

  .goalies {
    color: #3187c6;
    display: inline-block;
    padding-left: 0.7em;
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    font-family: "Mukta", sans-serif;
    width: 50%;
    display: inline-block;
    margin-bottom: 1em;
  }

  p {
  }

  .goal-description {
    width: 85%;
    color: black;
    display: inline-block;
  }

  .goal-item {
    padding: 2.5em;
  }

  .right-flex {
    width: 50%;
    height: 200vh;
    right: 0;
    position: absolute
  }

  .due {
    color: #000;
    padding: 1em 0;
  }

  .edit,
  .complete {
    width: 75px;
    margin: 0 0.35em;
    padding: 0.3em 0;
    border: none;
    border-radius: 5px;
  }

  .edit {
    background-color: #e7ef5c;
  }

  .complete {
    background-color: #477769;
  }
`;

export default function Goals() {

    const alarm = () =>{
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-alarm"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
            />
          </svg>
        );
    }

    return (
      <Wrapper>
        <div className="page-flex">
          <div className="left-flex">
            <form action="">
              <div className="inner-form">
                <h1>New Goal</h1>
                <label htmlFor="">Goal</label>
                <br />
                <input className="fields" type="text" name="" id="" />
                <label htmlFor="">Description / Requirements</label>
                <input className="fields" type="text" />
                <br />
                <label htmlFor="">Due Date</label>
                <br />
                <input className="date" type="date" />
                <div>
                  <p className="p">Set Reminder:</p>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">1 week</label>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">3 days</label>
                </div>
                <br />
                <button className="submit" type="submit">
                  Add Goal
                </button>
              </div>
            </form>
          </div>
          <div className="right-flex">
            <h1 className="goalies">Goalies</h1>
            <div className="goal-item">
              <h2>Lorem Ipsum</h2>
              <p className="goal-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus iusto libero, voluptatem nesciunt, sunt voluptatibus
                nemo distinctio autem repudiandae doloremque harum quae magni
                qui reiciendis aut expedita repellendus voluptates nostrum.
              </p>
              <br />
              <div className="alarm">
                <i class="far fa-bell"></i>
                <small className="due"> 11/08/2020 8:00am</small>
              </div>
              <div className="buttons">
                  <button className="edit">Edit</button>
                  <button className="complete">Complete</button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}
