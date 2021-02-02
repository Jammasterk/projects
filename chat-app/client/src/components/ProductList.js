import React, {useContext} from "react"
import Product from "./Product"
import ProductForm from "./ProductForm"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
  .column {
      display: grid;
    grid-template-columns: repeat(auto-fit, 220px);
    /* grid-gap: .5em; */
    width: 95%;
    margin: .5em auto
  }

  /* @media only screen and (max-width: 800px){
      .container{
          display: grid;
            grid-template-columns: repeat(3, 220px)
      }
  } */
`;



export default function ProductList(props){
    const {addProduct} = props
    const {products, deleteProduct, updateProduct} = useContext(UserContext)
    return (
      <Wrapper>
        <div>
          <ProductForm submit={addProduct} btnText="Add product" />
          <div className="column">
            {products.map((product) => (
              <Product
                {...product}
                key={product.title}
                deleteProduct={deleteProduct}
                updateProduct={updateProduct}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
}