import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  .wrap {
    display: table;
    width: 100%;
    height: 100%;
    margin-top: 8em;
    justify-content: space-around;
  }
  form {
    height: 40%;
    width: 40%;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    background: linear-gradient(145deg, #cacccf, #ffffff);
    border-radius: 5%;
    box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;
    padding: 6em 3em;
    margin-bottom: 1em;
  }

  input {
    width: 200px;
    height: 30px;
    margin: 1em 0;
  }

  button {
    width: 200px;
    height: 30px;
    margin: 1em 0;
    font-family: "Poppins", sans-serif;
  }

  h1 {
    font-family: "Poppins", sans-serif;
  }
  .blank_space {
    width: 100%;
  }
`;

const AdminForm =  (props) => {
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username, password
        }
    } = props

    return (
      <Wrapper>
        <div className="wrap">
            <div className="blank_space"></div>
          <form onSubmit={handleSubmit}>
              <h1>Admin Access</h1>
            <input
              type="text"
              value={username}
              name="username"
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
            />
            <br />
            <button>{btnText}</button>
            <p>{errMsg}</p>
          </form>
          <div className="blank_space"></div>
        </div>
      </Wrapper>
    );
}

export default AdminForm