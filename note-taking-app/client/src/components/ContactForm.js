import React, {useState} from "react"
import styled from "styled-components"


const Wrapper = styled.div`
  form{
    width: 50%;
    margin: auto
  }
  button{
    width: 50%;
    margin-top: 2em;
    margin-bottom: 4em
  }
`


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
            <input
              type="text"
              placeholder="Name"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <input
              type="tel"
              placeholder="Number"
              name="number"
              value={number}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="email"
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