import React, { useState } from "react";

const AddDescriptionForm = (props) => {

    const initInputs = {description: "", assignedTo: "", due: "", teamLead: ""}

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
        props.addDescription(inputs)
        setInputs(initInputs) 
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" value={inputs.description} onChange={handleChange}/>
            <input type="text" name="assignedTo" value={inputs.assignedTo} onChange={handleChange}/>
            <input type="date" name="due" value={inputs.due} onChange={handleChange}/>
            <input type="text" name="teamLead" value={inputs.teamLead} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}

export default AddDescriptionForm