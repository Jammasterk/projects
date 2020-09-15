import React, {useState} from 'react'
import styled from "styled-components"

const initInputs = {
    title: "",
    note: '',
    date: '',
    image: ''
}


const Wrapper = styled.div`
  /* .wrapper {
    width: 50%;
    height: 100%;
    display: flex;
  }
  source {
    width: 50%;
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
  p {
    width: 100%;
    text-align: center;
  }
  button{
      width: 50%
  } */

  form {
    width: 75%;
    margin: 2em auto;
    box-shadow: 0 0 15px #f0f0f0;
    padding: 3em;
  }
  h4 {
    margin-bottom: 1.5em;
  }
  input {
    margin: 5em 0;
  }
  textarea:focus {
    outline: none;
  }
  textarea {
    border: none;
    border-bottom: 1px solid black;
    margin: 3em 0;
  }
  button {
    width: 50%;
    margin-top: 3em;
  }
  label {
    font-size: 16px;
    color: lightGrey;
  }
`;

function NoteForm(props) {
    const [inputs, setInputs] = useState(initInputs)
    const {addNote} = props

function handleChange(e){
    const {name, value} = e.target
    setInputs( prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
}

function handleSubmit(e){
    e.preventDefault()
    addNote(inputs)
    setInputs(initInputs)

}

const {title, note, date, image} = inputs
    return (
      
        <Wrapper>
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Subject"
                name="title"
                value={title}
                onChange={handleChange}
              />
              <textarea
                id=""
                cols="30"
                rows="10"
                placeholder="Note"
                name="note"
                value={note}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="">Date</label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Image"
                name="image"
                value={image}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-mdb-color">
                Submit
              </button>
            </form>
          </div>
        </Wrapper>
      
    );
}

export default NoteForm
