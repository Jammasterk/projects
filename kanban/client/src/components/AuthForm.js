import React, {useState, useContext} from 'react'
import styled from "styled-components"
import Team from "../assets/team-flow.png"
import { MDBBtn } from "mdbreact";

const Wrapper = styled.div`
  .flex {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .left-flex {
    width: 65%;
    height: 500px;
    background: #4592af;
    position: absolute;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
  }
  form {
    position: absolute;
    right: 0;
    margin-right: 4em;
    margin-top: 5em;
  }
  img{
      display: flex;
      justify-content: center
  }
  small{
     display: flex;
     float: right;
     margin-top: .25em;
     cursor: pointer
  }
`;




export default function AuthForm(props) {

    const [show, setShow] = useState(false)

    const {
        handleChange,
        handleSubmit,
        btnText,
        inputs: {
            username,
            password
        }
    } = props

    function handleClick(){
        setShow(!show)
    }

    return (
      <Wrapper>
        <div className="flex">
          <div className="left-flex">
            <div className="inner-flex">
              <img src={Team} alt="" />
              <div className="text"></div>
            </div>
          </div>
          <form className="form-group w-25" onSubmit={handleSubmit}>
            <label htmlFor="formGroupExampleInput">Username</label>

            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <label htmlFor="formGroupExampleInput">Password</label>
            <input
              type={show ? "text" : "password"}
              className="form-control"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <small onClick={handleClick}>{show ? "Hide" : "Show"} password</small>
            <br/>
            <label htmlFor="formGroupExampleInput">Email</label>
            <input
              type="text"
              className="form-control"
            />
            <MDBBtn type="submit" className="mt-4 w-100">{btnText}</MDBBtn>
          </form>
        </div>
      </Wrapper>
    );
}
