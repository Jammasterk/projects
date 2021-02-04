const express = require('express')
const productRouter = express.Router()
const Product = require("../models/product")

// Get all products

productRouter.get('/all', (req, res, next) => {
   Product.find((err, products) => {
       if(err){
           res.status(500)
           return next(err)
       }
       return res.status(200).send(products)
   })
})

// Get products by user id

productRouter.get("/user", (req, res, next) => {
    Product.find({user: req.user._id}, (err, products) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(products)
    })
})

productRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newProduct = new Product(req.body)
    newProduct.save((err, savedProduct) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedProduct)
    })
})

productRouter.put("/:productId", (req, res, next) => {
    Product.findOneAndUpdate({_id: req.params.productId, user: req.user._id},
    req.body,
    {new: true},
    (err, updateProduct) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully updated ${updateProduct.title}`)
    })
})

productRouter.delete('/:productId', (req, res, next) => {
    Product.findOneAndDelete(
        {_id: req.params.productId, user: req.user._id},
        (err, deleteProduct) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deleteProduct.title}`)
        }
    )
})

module.exports = productRouter