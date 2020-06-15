import React, {useState, useEffect} from "react"
import axios from "axios"
import Product from "./components/Product"
import AddProductForm from "./components/AddProductForm"

function App(){
    const [products, setProducts] = useState([])

    function getProduct(){
         axios
           .get("/products")
           .then((res) => setProducts(res.data))
           .catch((err) => console.log(err));
    }

function addProduct(newProduct){
    axios.post("/products", newProduct)
    .then(res => {
        setProducts(prevProducts => [...prevProducts, res.data])
    })
    .catch(err => console.log(err))
}

function deleteProduct(productId){
    axios.delete(`/products/${productId}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

    useEffect(() => {
       getProduct()
    }, [])
    return(
        <div>
            <AddProductForm addProduct={addProduct} />
            {products.map(product => <Product {...product} key={product.name} deleteProduct={deleteProduct}/>)}
        </div>
    )
}

export default App