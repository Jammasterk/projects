import React from "react"
import ProductsData from "../productsData"
import Store from "./store"

export default function Products(){
    const productItem = ProductsData.map(product => <Store item={product}/>)
    return <div>
        {productItem}
    </div>
}