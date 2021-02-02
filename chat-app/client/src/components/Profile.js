import React, {useContext} from "react"
import ProductList from "./ProductList"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
    font-family: "Poppins";
    h4, h6{
        font-weight: 200;
        text-align: center
    }
`

export default function Profile(){
    const {user: {username}, addProduct, updateProduct, deleteProduct} = useContext(UserContext)
    return (
      <Wrapper>
        <div>
          <h4>Welcome {username}</h4>
          <h6>Upload new Product</h6>
          <div>
            <ProductList
              addProduct={addProduct}
              updateProduct={updateProduct}
              deleteProduct={deleteProduct}
            />
          </div>
        </div>
      </Wrapper>
    );
}