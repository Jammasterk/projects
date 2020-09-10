import React, {useState} from 'react'
import { MDBInput } from "mdbreact";

export default function AddBeerForm(props) {
    const initInputs = {brand: props.brand || '', type: props.type || ''}
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }



    const handleSubmit = e => {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
      <div className="w-100">
        <h1 style={{ textAlign: "center" }}>Brewskis</h1>
        <form className="w-50 m-auto" action="" onSubmit={handleSubmit}>
          <MDBInput
            label="Brand"
            type="text"
            name="brand"
            value={inputs.brand}
            onChange={handleChange}
            placeholder="Brand"
          />
          <MDBInput
            label="Type"
            type="text"
            name="type"
            value={inputs.type}
            onChange={handleChange}
            placeholder="Type"
          />
          <button class="btn btn-blue-grey w-100">{props.btnText}</button>
        </form>
      </div>
    );
}
