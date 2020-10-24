import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  background: #faee1c;

  .container {
    height: 100vh;
    padding: 3em;
  }

  .inner-container {
    height: 70vh;
    width: 90%;
    margin: auto;
    background: #faee1c;
    border-radius: 5px;
    box-shadow: 9.91px 9.91px 15px #e4d919, -9.91px -9.91px 15px #ffff1f;
    padding-top: 3em;
  }
  .message-pane {
    width: 95%;
    background: #faee1c;
    /* background: white; */
    border-radius: 5px;
    box-shadow: inset 9.91px 9.91px 15px #e4d919,
      inset -9.91px -9.91px 15px #ffff1f;
    height: 80%;
    margin: auto;
  }
  button {
    margin-left: 3%;
    width: 50%;
    height: 40px;
    margin-top: 1.5em;
    border: none;
    background: #faee1c;
    border-radius: 5px;
    box-shadow: 9.91px 9.91px 15px #e4d919, -9.91px -9.91px 15px #ffff1f;
    color: #17b978;
  }
`;

function Message() {
    return (
      <Wrapper>
        <div className="container">
            <div className="inner-container">
                <div className="message-pane">

                </div>
                <button>Send</button>
            </div>
        </div>
      </Wrapper>
    );
}

export default Message
