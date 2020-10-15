import React from "react"
import {Jumbotron, Button, Form} from "react-bootstrap"
import Moment from "react-moment"
import styled from "styled-components"
import Typewriter from "typewriter-effect";


const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  background: #e8ffe8;

  height: 100vh;

  h1,
  p {
    font-family: "Montserrat", sans-serif;
  }

  h6 {
    margin: 2em 0;
  }

  .border {
    border: 1px solid gray;
  }
  .margin-container {
    width: 100% !important;
  }

  .jumbotron {
    height: 100vh !important;
    width: 90%;
  }

  .btn-flat {
    background: #fc5185;
    color: #fff;
  }

  .h6-flex {
    display: flex;
  }

  @media screen and (max-width: 850px) {
    body {
      background: #e8ffe8;
    }

    .margin-container {
      display: block !important;
      width: 100% !important;
    }

    .media-div {
      margin-bottom: 1em;
    }

    p,
    h1 {
      width: 100% !important;
    }
  }

  @media screen and (max-width: 660px) {
    h1{
        font-size: 30px
    }
  }
`;

const AuthForm = (props) => {

  // const [toggle, setToggle] = useState(false)

  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: {
      username,
      password
    },
  } = props

    const typing = (
      <Typewriter
        options={{
          strings: ["Welcome to robust"],
          autoStart: true,
          loop: true
        }}
      />
    );
  
  return (
    <>
      <Wrapper>
        <Jumbotron
          className="jumbotron m-auto"
          style={{ background: "#e8ffe8" }}
        >
          <div className="d-flex mx-auto margin-container">
            <div className="w-75 mt-5 media-div">
              <h1>{typing}</h1>
              {/* <p>Today is {live}</p> */}
              <div className="h6-flex">
                <h6>
                  {`It is now`}{" "}
                  {
                    <Moment
                      interval={1000}
                      format="dddd, MMMM Do YYYY, h:mm a"
                    ></Moment>
                  }
                </h6>
              </div>
              <p className="w-75">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat quam enim rerum necessitatibus quos, vitae cupiditate
                dolorum quibusdam animi excepturi.
              </p>
              <Button variant="flat" className="w-50 mt-1 mb-4">
                Check us out!
              </Button>
            </div>
            <div className="right">
              <Form.Group
                onSubmit={handleSubmit}
                className="w-100 border p-5 rounded right-0"
                style={{ background: "#f0f696", height: "400px" }}
              >
                <h1>Login / Signup</h1>
                <Form.Label className="text-muted">Username:</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Enter username" 
                    value={username} 
                    name="username" 
                    onChange={handleChange}/>
                <Form.Label className="text-muted">Password:</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter password" 
                    value={password} 
                    name="password" 
                    onChange={handleChange}/>
                <Button type="submit" variant="success" className="w-100 mt-3">
                  {btnText}
                </Button>
                <p style={{color: "red"}}>{errMsg}</p>
              </Form.Group>
            </div>
          </div>
        </Jumbotron>
      </Wrapper>
    </>
  );
};

export default AuthForm