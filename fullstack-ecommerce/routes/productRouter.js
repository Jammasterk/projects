const express = require('express')
const productRouter = express.Router()
const Product = require("../models/product")

// Get All Products

productRouter.get("/", (req, res, next) => {
    Product.find((err, products) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(products)
    })
})

productRouter.get("/:productId", (req, res, next) => {
    const productId = req.params.productId
    const foundProduct = products.find(product => product.id === productId)
    console.log(foundProduct)
    if(!foundProduct){
        const err = new Error('The product is not found')
        res.status(500)
        return next(err)
    }
    res.send(foundProduct)
})

// product by type

productRouter.get('/search/product', (req, res, next) => {
    Product.find({product: req.query.product}, (err, products) => {
        if(err){
            res.status(400)
            return next(err)
        }
        return res.status(201).send(products)
    })
})

productRouter.post("/", (req, res, next) => {
    const newProduct = new Product(req.body)
    newProduct.save((err, savedProduct) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedProduct)
    })
})

// Delete Product

productRouter.delete("/:productId", (req, res, next) => {
    Product.findOneAndDelete({_id: req.params.productId}, (err, deletedProduct) => {
        if(err){
        res.status(500)
        return next(err)
        }
        return res.status(201).send(`Successfully deleted ${deletedProduct}`)
    })
})

productRouter.put("/:productId", (req, res, next) => {
    Product.findOneAndUpdate(
        {_id: req.params.productId},
        req.body,
        {new: true},
        (err, updatedProduct) => {
            if(err){
                res.status(500)
                return next(err)
            }
            res.status(201).send(updatedProduct)
        }
    )
})

module.exports = productRouter