import React, {useContext} from "react"
import AllProduct from "./AllProduct"
import {UserContext} from "../context/UserProvider"
import styled from"styled-components"

const Wrapper = styled.div`
  .column {
    display: grid;
    grid-template-columns: repeat(auto-fit, 220px);
    /* grid-gap: .5em; */
    width: 95%;
    margin: 0.5em auto;
  }
`;

function AllProductList(props){
    const {getProduct} = props
    const {products} = useContext(UserContext)
    return (
      <Wrapper>
        <div className="column">
          {products.map((product) => (
            <AllProduct
              {...product}
              key={product.title}
              getProduct={getProduct}
            />
          ))}
        </div>
      </Wrapper>
    );
}

export default AllProductList