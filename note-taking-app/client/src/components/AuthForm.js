import React from "react"
import styled from "styled-components"
const Wrapper = styled.div`
  .wrapper {
    /* width: 50%; */
    height: 100%;
    display: grid;
    grid-auto-columns: repeat(2, 50%)
  }

  video {
    max-width: 50%;
    margin: 0 !important
  }

  source {
    max-width: 50%;
  }

  .container {
    width: 400px;
    position: absolute;
    right: 0;
    margin-top: 12em;
    margin-right: 6em;
    box-shadow: 0 0 25px #f0f0f0;
    padding: 6em 1.5em;
    border-radius: 8px;
  }

  h3 {
    margin-bottom: 1em;
  }

  button {
    width: 100%;
    margin: 3.5em 0;
  }
  input {
    margin: 6.5em 0;
  }
  p {
    width: 100%;
    text-align: center;
  }

  @media only screen and (max-width: 849px) {
    .container {
      margin: 0 auto;
      width: 90%;
      padding: 0;
      top: 400px;
      position: absolute;
      display: block;
    }
    h1 {
      margin: 0 !important;
      font-size: 24px;
    }
  }
  video {
    margin: 0 auto;
    position: relative;
    width: 90%;
  }
  source {
    margin: 0 auto;
    position: absolute;
    width: 90%;
  }
  .wrapper{
    margin: 0 auto
  }
`;


const AuthForm = (props) => {

    // const [toggle, setToggle] = useState(false)

    const {
      handleChange,
      handleSubmit,
      btnText,
      errMsg,
      inputs: { username, password },
    } = props;

    return (
      <Wrapper>
        <div className="wrapper">
          <video autoPlay loop>
            <source src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d05f4b95b891603d2c14b6b_drawkit-grape-pack-illustration-2-transcode.mp4" />
          </video>
          <form className="container mx-auto" onSubmit={handleSubmit}>
            <h3>Welcome</h3>
            <input
              placeholder="Username"
              value={username}
              name="username"
              type="text"
              className="validate"
              onChange={handleChange}
            ></input>
            <input
              type="password"
              value={password}
              name="password"
              placeholder="Password"
              className="validate"
              onChange={handleChange}
            ></input>
            <button type="submit" className="waves-effect waves-light btn">{btnText}</button>
            <p style={{color: "red", margin: "auto"}}>{errMsg}</p>
          </form>
        </div>
      </Wrapper>
    );

}

export default AuthForm