import React from "react"

function Product(props){
    const {name, description, image, price, manufacturer, _id} = props
    console.log(props)
    return (
      <div className="product-grid card mt-5">
        <div className="inner card-body mt-5">
          <div className="col">
            <h1 style={{ textAlign: "center" }} className="card-title">
              {name}
            </h1>
            <h6 className="card-text">{description}</h6>
            <img className="card-img-top" src={image} alt="" />
            <p style={{ textAlign: "center" }}>{price}</p>
            <p style={{ textAlign: "center" }}>{manufacturer}</p>
            <button
              className="btn btn-danger w-100 mb-1"
              onClick={() => props.deleteProduct(_id)}
            >
              Delete
            </button>
            <button className="btn btn-success w-100">See More</button>
          </div>
        </div>
      </div>
    );
}

export default Product