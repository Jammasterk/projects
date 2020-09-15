import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  .grid{
    display: grid;
    grid-template-columns: 20% 80%;
    grid-gap: 4em;
    width: 80%;
    margin: 0 auto
  }
  img{
    max-width: 200px;
  }
  p{
    font-size: 20px;
    border-bottom: 1px solid lightgray;
    border-left: 1px solid lightGray;
    padding-left: 8px;
    padding-bottom: 8px
  }
  span{
    font-size: 22px;
    text-decoration: underline;
    margin-bottom: 2em
  }
`

const Note = (props) => {

  const {title, note, date} = props
    return (
      <Wrapper>
        <div className="grid">
          <div className="left">
            <span>{title}</span>
            <h6>{date}</h6>
          </div>
          <p>{note}</p>
        </div>
      </Wrapper>
    );
}

export default Note