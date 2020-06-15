import React, {useState} from 'react'

function AddProductForm(props) {
    const initInputs = {name: "", description: "", image: "", price: "", manufacturer: ""} 
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target 
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addProduct(inputs)
        setInputs(initInputs)
        console.log(inputs)
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
className="form-control w-50 mb-2"
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
className="form-control w-50 mb-2"
          type="text"
          name="description"
          value={inputs.description}
          onChange={handleChange}
          placeholder="description"
        />
        <input
        className="form-control w-50 mb-2"
          type="text"
          name="image"
          value={inputs.image}
          onChange={handleChange}
          placeholder="image"
        />
        <input
        className="form-control w-50 mb-2"
          type="text"
          name="price"
          value={inputs.price}
          onChange={handleChange}
          placeholder="price"
        />
        <input
        className="form-control w-50 mb-2"
          type="text"
          name="manufacturer"
          value={inputs.manufacturer}
          onChange={handleChange}
          placeholder="manufacturer"
        />
        <button className="btn btn-outline-primary w-50">Add Product</button>
      </form>
    );
}

export default AddProductForm
