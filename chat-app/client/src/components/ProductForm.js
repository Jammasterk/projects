import React, {useState} from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
select{
    display: block;
    color: grey
}
form{
    width: 80%;
    min-width: 340px;
    margin: 0 auto
}
button{
    width: 50%
}

h4{
    text-align: center;
    font-weight: 200
}
`

function ProductForm(props) {

    const initInputs = {
        title: "",
        subTitle: "",
        price: null,
        shippingDetails: "",
        image: "",
        query: "" 

    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(inputs);
        props.submit(inputs, props._id);
        setInputs(initInputs);
    }

    const {title, subTitle, price, shippingDetails, image, query} =inputs

    return (
      <Wrapper>
        <h4>Product Form</h4>
        <form onSubmit={handleSubmit}>
          <div class="input-field col s6">
            <input
              id="product_name"
              type="text"
              className="validate"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <label for="product_name">Product Name</label>
          </div>
          <div class="input-field col s6">
            <input
              id="description"
              type="text"
              className="validate"
              name="subTitle"
              value={subTitle}
              onChange={handleChange}
            />
            <label for="description">Product Description</label>
          </div>
          <div class="input-field col s6">
            <input
              id="price"
              type="text"
              className="validate"
              name="price"
              value={price}
              onChange={handleChange}
            />
            <label for="price">Price</label>
          </div>
          <label>Shipping Details</label>
          <div class="input-field col s12">
            <select
              name="shippingDetails"
              value={shippingDetails}
              onChange={handleChange}
              id=""
            >
              <option value="" disabled selected>
                Choose shipping option
              </option>
              <option value="USPS">USPS</option>
              <option value="UPS">UPS</option>
              <option value="FEDEX">FedEx</option>
              <option value="DHL">DHL</option>
            </select>
          </div>
          <br />
          <div class="input-field col s6">
            <input
              id="image"
              type="text"
              className="validate"
              name="image"
              value={image}
              onChange={handleChange}
            />
            <label for="image">Upload Image</label>
          </div>
          <div className="input-field col s6">
            <input
              id="query"
              type="text"
              className="validate"
              name="query"
              value={query}
              onChange={handleChange}
            />
            <label for="image">Add query</label>
          </div>
          <select name="query" value={query} id="">
            <option value="" disabled selected>Choose department</option>
            <option value="CLothing And accessories">
              Clothing and accessories
            </option>
            <option value="Books">Books</option>
            <option value="Movies, Music & Games">Movies, Music & Games</option>
            <option value="Electronics">Electronics</option>
            <option value="Computers">Computers</option>
            <option value="Home and Garden">Home and garden</option>
            <option value="Pet supplies">Pet supplies</option>
            <option value="Food">Food</option>
            <option value="Beauty and health">Beauty and health</option>
            <option value="Toys, kids and baby">Toys, Kids, and Babies</option>
            <option value="Handmade">Handmade</option>
            <option value="Sports">Sports</option>
            <option value="Outdoors">Outdoors</option>
            <option value="Automotive">Automotive</option>
          </select>
          <button style={{marginTop: "1em"}} className="waves-effect waves-light btn">Add Product</button>
        </form>
      </Wrapper>
    );
}

export default ProductForm
