import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`

    form{
        width: 75%;
        margin: 2em auto;
        box-shadow: 0 0 15px #f0f0f0;
        padding: 3em
    }

    h4{
        
            margin-bottom: 1.5em
        
    }

    input{
        margin: 5em 0
    }

    textarea:focus{
        outline: none
    }

    textarea{
        border: none;
        border-bottom: 1px solid black;
        margin: 3em 0
    }

    button{
        width: 50%;
        margin-top: 3em
    }

    label{
        font-size: 16px;
        color: light-grey
    }

`

const Note = () => {
    return (
      <Wrapper>
        <form>
          <h4 className="h4 mb-4">Write a note...</h4>
          <input type="text" placeholder="Subject"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Note"></textarea>
          <label htmlFor="">Date</label>
          <input type="date" />
          <input type="text" placeholder="Image" />
          <button type="button" className="btn btn-mdb-color">
            Submit
          </button>
        </form>
      </Wrapper>
    );
}

export default Note