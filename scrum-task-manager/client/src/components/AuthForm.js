import React, {useState} from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;

  h1 {
    font-weight: 300;
    font-size: 2em;
    text-align: center;
    margin-bottom: 1em;
    /* background: #3b5441; */
    display: block;
    width: 100%;
    margin: auto;
    color: #f5f5f5;
    padding: 0.25em 0;
  }

  p {
    text-align: center;
    width: 50%;
    display: block;
    margin: 1.5em auto;
    color: #f5f5f5;
    font-weight: 200;
    /* padding: 0 1em */
  }

  .form {
    width: 100vw;
    height: 100vh;
    background: #107a8b;
    padding: 0 1em;
    padding-top: 4em;
    background-repeat: no-repeat;
    background-size: cover;
  }
  form {
    width: 40%;
    height: 80%;
    /* position: absolute; */
    margin: 0 auto;
    border-radius: 0.5em;
    border-radius: 50px;
    border-radius: 50px;
    background: #107a8b;
    box-shadow: 20px 20px 27px #0e6876, -20px -20px 27px #128ca0;
    padding-top: 4em;
    min-width: 325px;
  }
  input,
  button {
    width: 60%;
    margin: 0 auto;
    display: block;
    height: 45px;
  }

  .input-fields {
    min-width: 275px;
  }

  button {
    border: none;
    background: #2cb978;
    color: #f5f5f5;
    font-size: 20px;
  }

  button,
  input:focus {
    outline: none;
  }

  .checkbox {
    height: 13px;
    /* display: inline-block; */
    max-width: 16px !important;
    /* padding: 0; */
    /* margin: 0; */
  }

  .flex {
    display: flex;
    /* max-width: 25px;
    justify-content: space-around;
    width: 80% */
    width: 35%;
    margin: 0 auto;
    margin-bottom: 1em;
  }
  small {
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    color: #fff
  }
`;

function AuthForm(props) {

    const [ show, setShow] = useState(false)

    const{
        handleChange,
        handleSubmit,
        btnText,
        inputs: {
            username,
            password
        }
    } = props

    function toggler(e){
        e.preventDefault()
        setShow(!show)
    }

    return (
      <Wrapper>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>Scrumblr</h1>
            <p>Welcome to Scrumblr a kanban style collaboration tool</p>
            <input
            className="input-fields"
              name="username"
              value={username}
              type="text"
              onChange={handleChange}
            />
            <br />
            <input
            className="input-fields"
              type={show ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleChange}
            />
            <br />
            <div className="flex">
              <small>Show password:</small>
              <input className="checkbox" type="checkbox" name="" id="" onClick={toggler}/>
            </div>
            <button>{btnText}</button>
          </form>
        </div>
      </Wrapper>
    );
}

export default AuthForm
