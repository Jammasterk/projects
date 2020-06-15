import React, {useState} from 'react'
// import Axios from 'axios'

export default function AddUser(props) {
    const initInputs = {name: "", age: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addUser(inputs)
        console.log(inputs)
        setInputs(initInputs)
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={inputs.name} onChange={handleChange} />
          <input type="text" name="age" value={inputs.age} onChange={handleChange} />
          <button className="">Add User</button>
        </form>
      </div>
    );
}
