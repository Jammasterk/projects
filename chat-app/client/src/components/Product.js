import React from "react"
import ProductForm from "./ProductForm"
import styled from "styled-components"

const Wrapper = styled.div`
  .card {
    width: 200px;
    padding: 1em;
    margin: 1em;
  }

  h1 {
    font-size: 0.8em;
    line-height: 14px;
    margin: 0 0 1.68rem 0;
    font-weight: bold;
  }

  p {
    font-size: 0.75em;
  }

  img {
    width: 100%;;
    height: 200px
  }
  .container {
    margin: 0;
    padding: 0
  }

  .card{
      display: inline-block;
      padding: .35em
  }

  button {
    background: none;
    border: none;
  }
  .redColor {
    color: red;
  }
  .tealColor {
    color: teal;
  }
`;
function Product(props){
    const {title, subTitle, price, shippingDetails, query, image, _id} = props
    const [editToggle, setEditToggle] = React.useState(false)

    return (
      <Wrapper>
        <div>
          {!editToggle ? (
            <>
              <div className="container">
                <div className="card">
                  <a href="">
                    <img src={image} alt="" />
                    <h1>{title}</h1>
                  </a>
                  {/* <p>{subTitle}</p> */}
                  <p>{price}</p>
                  <small>Shipping: {shippingDetails}</small>
                  <br />
                  <small>{query}</small>
                  <br />
                  <button onClick={() => props.deleteProduct(_id)}>
                    <i className=" redColor bi bi-trash"></i>
                  </button>
                  <button
                    onClick={() => setEditToggle((prevToggle) => !prevToggle)}
                  >
                    <i className="tealColor bi bi-pen"></i>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <ProductForm
                  title={title}
                  subTitle={subTitle}
                  price={price}
                  shippingDetails={shippingDetails}
                  query={query}
                  image={image}
                  _id={_id}
                  btnText="Submit edit"
                  submit={props.updateProduct}
                />
                <button
                  onClick={() => setEditToggle((prevToggle) => !prevToggle)}
                >
                  Save
                </button>
              </div>
            </>
          )}
        </div>
      </Wrapper>
    );

}

export default Product