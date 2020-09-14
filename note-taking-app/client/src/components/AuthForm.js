import React, {useState} from "react"
import styled from "styled-components"
import Navbar from "./AccountForm"
import Auth from "./Auth"
const Wrapper = styled.div`

  
  .wrapper{
      width: 50%;
      height: 100%;
      display: flex
  }

  source{
      width: 50%
  }

  .container {
    width: 400px;
    position: absolute;
    right: 0;
    margin-top: 12em;
    margin-right: 6em;
    box-shadow: 0 0 25px #f0f0f0;
    padding: 1.5em;
    border-radius: 8px;
  }

  h3 {
    margin-bottom: 1em;
  }

  a {
    width: 100%;
    margin: 3.5em 0;
  }
  input {
    margin: 6.5em 0;
  }
  p{
      width: 100%;
      text-align: center
  }
`;


const AuthForm = (props) => {

    const [toggle, setToggle] = useState(false)

    const {
      handleChange,
      handleSubmit,
      btnText,
      inputs: { username, password },
    } = props;

    return (
      <Wrapper>
        <div className="wrapper">
          <video autoPlay loop>
            <source src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d05f4b95b891603d2c14b6b_drawkit-grape-pack-illustration-2-transcode.mp4" />
          </video>
          <form className="container" onSubmit={handleSubmit}>
            <h3>Welcome</h3>
            <input
              placeholder="Username"
              value={username}
              name="username"
              id="first_name"
              type="text"
              class="validate"
              onChange={handleChange}
            ></input>
            <input
              type="password"
              value={password}
              name="password"
              placeholder="Password"
              id="first_name"
              class="validate"
              onChange={handleChange}
            ></input>
            <a className="waves-effect waves-light btn">{btnText}</a>
            {!toggle ? (
              <>
                <p
                  style={{ color: "#000 !important" }}
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Already A member?
                </p>
              </>
            ) : (
              <>
                <p onClick={() => setToggle((prev) => !prev)}>
                  Not yet a member?
                </p>
              </>
            )}
          </form>
        </div>
      </Wrapper>
    );

}

export default AuthForm