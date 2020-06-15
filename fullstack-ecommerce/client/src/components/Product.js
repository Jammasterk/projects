import React from "react"

function Product(props){
    const {name, description, image, price, manufacturer, _id} = props
    console.log(props)
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <img src={image} alt="" />
        <p>{price}</p>
        <p>{manufacturer}</p>
        <button
          className="btn btn-danger"
          onClick={() => props.deleteProduct(_id)}
        >
          Delete
        </button>
      </div>
    );
}

export default Product