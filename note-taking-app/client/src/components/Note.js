import React, {useState} from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 20% 80%;
    /* grid-gap: 2em; */
    width: 90%;
    margin: 0 auto;
    margin-top: 5.5em;
    border-bottom: 1px solid lightgrey
  }
  img {
    max-width: 200px;
  }
  p {
    font-size: 14px;
    box-shadow: 0 0 5px lightgrey;
    padding-left: 8px;
    padding: 1em;
    /* width: 80%; */
    margin: 1em auto;
  }
  span {
    font-size: 20px;
    text-decoration: underline;
    /* margin-bottom: 2em; */
    font-weight: 600;
  }

  small {
    font-size: 16px;
    cursor: pointer;
  }

  button {
    border: none;
    background: transparent;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 849px) {
    p {
      font-size: 14px;
    }
    .span {
      font-size: 16px;
    }
    h6 {
      font-size: 10px;
    }
  }
`;

const Note = (props) => {

  const [show, setShow] = useState(false)

  function handleClick(e){
    e.preventDefault(setShow(!show))
  }

  const {title, note, date} = props
    return (
      <Wrapper>
        <div className="grid">
          <div className="left">
            <span>{title}</span>
            <h6>{date}</h6>
          </div>
          <div className="">
            <a onClick={handleClick}>Show note </a>
            <p style={show ? { display: "block" } : { display: "none" }}>
              {note}
            </p>
          </div>
        </div>
      </Wrapper>
    );
}

export default Note