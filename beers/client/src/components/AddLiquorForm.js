import React, {useState} from "react"
import { MDBInput } from "mdbreact";

export default function AddLiquorForm(props){
    const initInputs = {brand: props.brand || "", type: props.type || "", notes: props.notes || ""}
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Sauce</h1>
        <form className="w-50 m-auto" action="" onSubmit={handleSubmit}>
          <MDBInput
            label="Brand"
            type="text"
            name="brand"
            value={inputs.brand}
            onChange={handleChange}
          />
          <MDBInput
            type="textarea"
            label="Notes"
            name="notes"
            value={inputs.notes}
            onChange={handleChange}
          />
          <MDBInput
            label="Type"
            type="text"
            name="type"
            value={inputs.type}
            onChange={handleChange}
          />
          <button class="btn btn-blue-grey w-100">
            {props.btnText}
          </button>
        </form>
      </div>
    );
}