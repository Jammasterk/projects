import React, {useState} from "react"
import styled from "styled-components"


const Wrapper = styled.div`
  form {
    width: 60%;
    margin: auto;
    box-shadow: 0 0 10px lightgray;
    padding: 1.5em;
    border-radius: 5px
  }
  button {
    width: 50%;
    margin-top: 2em;
    margin-bottom: 4em;
  }

  form {
  }
`;


const initInputs ={
    title: "",
    number: "",
    email: "",
    address: "",
    nickname: "",
    birthday: '',
    note: ""
}

function ContactForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const {addContact} = props

    function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addContact(inputs)
        setInputs(initInputs)
    }

    

    const {title, number, email, address, nickname, birthday, note} = inputs
    return (
      <Wrapper>
        <div>
          <form onSubmit={handleSubmit} className="m-auto">
            <label htmlFor="">Required</label>
            <input
              type="text"
              placeholder="Name"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <label htmlFor="">Required</label>
           <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Number"
              name="number"
              value={number}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Nickname"
              name="nickname"
              value={nickname}
              onChange={handleChange}
            />
            <input
              type="date"
              name="birthday"
              value={birthday}
              onChange={handleChange}
            />
            <input
              type="text"
              name="note"
              value={note}
              onChange={handleChange}
              placeholder="Note"
            />
            <button type="submit" className="btn btn-mdb-color">
              Submit
            </button>
          </form>
        </div>
      </Wrapper>
    );

}

export default ContactForm