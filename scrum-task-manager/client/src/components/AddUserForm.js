import React, {useState} from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  button {
    font-size: 1.2em;
    padding: 0.15em 0.25em;
    width: 258px;
    border-radius: 6px;
    font-family: "Poppins", sans-serif;
    border: none;
    background: #278ea5;
    color: #f5f5f5;
  }
  textarea {
    resize: none;
    width: 250px;
    border-radius: 6px;
    font-family: "Poppins", sans-serif;
    padding: 0.25em;
  }
  input {
    width: 250px;
    border-radius: 6px;
    font-family: "Poppins", sans-serif;
    padding: 0.25em;
    border: 1px solid black;
    margin: 0.25em 0;
  }
`;

const AddUserForm = (props) => {
    const initInputs = {name: "", company: "", role: "", bio: "", twitter: "", linkedIn: "", github: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value

        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addUser(inputs)
        setInputs(initInputs)
    }
    return (
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <br />
          <input
            type="text"
            name="company"
            value={inputs.company}
            onChange={handleChange}
            placeholder="Company"
          />
          <br />
          <input
            type="text"
            name="role"
            value={inputs.role}
            onChange={handleChange}
            placeholder="Team Role"
          />
          <br />
          <textarea
            type="text"
            name="bio"
            value={inputs.bio}
            onChange={handleChange}
            placeholder="Bio"
          ></textarea>
          <br/>
          <input
            type="text"
            name="twitter"
            value={inputs.twitter}
            onChange={handleChange}
            placeholder="Twitter"
          />
          <br />
          <input
            type="text"
            name="linkedIn"
            value={inputs.linkedIn}
            onChange={handleChange}
            placeholder="Linkedin"
          />
          <br />
          <input
            type="text"
            name="github"
            value={inputs.github}
            onChange={handleChange}
            placeholder="Github"
          />
          <br />
          <button>Complete Profile</button>
        </form>
      </Wrapper>
    );
    
    

}
export default AddUserForm