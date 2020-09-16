import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  .flex {
    display: grid;
    grid-template-columns: 3% 97%;
    grid-gap: 2em;
    margin: 24px 0;
  }

  p {
    margin: 0 !important;
  }

  h4{
      font-size: 20px;
      width: 80%;
      padding: 1em;
      margin: 0 auto
  }

  svg {
    width: 20px !important;
    height: 20px !important;
  }

  i,
  .fas {
    width: 20px !important;
    height: 20px !important;
  }
  .container {
    width: 80%;
    box-shadow: 0 0 10px lightgray;
    padding: 1em;
    border-radius: 10px
  }
`;

const Contact = (props) => {
    const {
        title,
        number,
        nickname,
        birthday,
        address,
        note,
        email
    } = props

    const d = "M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513" +
            " 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.6" +
            "36 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693." +
            "693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.64" +
            "6c-.34-.967-.035-2.004.658-2.698l.97-.969z";

    const eMail = "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104" +
            "l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1" +
            ".144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z";

    const user = "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z";

    const upper = "M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.79" +
            "3V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"

    const lower = "M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854" +
            "a.5.5 0 1 1-.708-.708L7.293 1.5z"

    return (
      <Wrapper>
        <div>
          <h4>{title}</h4>
          <div className="container">
            <div className="flex">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-telephone-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" d={d} />
              </svg>
              <p>{number}</p>
            </div>
            <div className="flex">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-house-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" d={upper} />
                <path fill-rule="evenodd" d={lower} />
              </svg>
              <p>{address}</p>
            </div>
            <div className="flex">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-envelope-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" d={eMail} />
              </svg>
              <p>{email}</p>
            </div>
            <div className="flex">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-gift-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3z"
                />
                <path d="M15 7v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z" />
              </svg>
              <p>{birthday}</p>
            </div>
            <div className="flex">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-person-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" d={user} />
              </svg>
              <p>{nickname}</p>
            </div>
            <div className="flex">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-card-heading"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                />
                <path
                  fill-rule="evenodd"
                  d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                />
                <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
              </svg>
              <p>{note}</p>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}

export default Contact