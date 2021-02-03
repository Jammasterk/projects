import React, {useContext} from 'react'
import {UserContext} from "../context/UserProvider"
import AllProductList from "./AllProductList"

export default function Public() {
    const {getProduct} = useContext(UserContext)
    return (
        <div>
            <AllProductList
                getProduct={getProduct}
             />
        </div>
    )
}

