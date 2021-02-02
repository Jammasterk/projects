const express = require('express')
const productInfoRouter = express.Router()
const ProductInfo = require('../models/productInfo')

productInfoRouter.get("/", (req, res, next) => {
    ProductInfo.find((err, productInfo) => {
        if(err){
            res.status(400)
            return next(err)
        }
        return res.status(200).send(productInfo)
    })
})

productInfoRouter.get("/user", (req, res, next) => {
    ProductInfo.find({user: req.user._id}, (err, productInfo) => {
        if(err){
            res.status(400)
            return next(err)
        }
        return res.status(200).send(productInfo)
    })
})

productInfoRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newProductInfo = new ProductInfo(req.body)
    newProductInfo.save((err, savedProductInfo) => {
        if(err){
            res.status(400)
            return next(err)
        }
        return res.status(200).send(savedProductInfo)
    })
      
})

productInfoRouter.put("/:productInfoId", (req, res, next) => {
    ProductInfo.findOneAndUpdate({_id: req.params.productInfoId, user: req.user._id},
    req.body,
    {new: true},
    (err, updateProductInfo) => {
        if(err){
            res.status(400)
            return next(err)
        }
        return res.status(200).send(`Successfully updated ${updateProductInfo.manufacturer}`)
    }
    )
})

productInfoRouter.delete("/:productInfoId", (req, res, next) => {
    ProductInfo.findOneAndDelete({_id: req.params.productInfoId, user: req.user._id}, (err, deleteProductInfo) => {
        if(err){
            res.status(400)
            return next(err)
        }
        return res.status(201).send(`Successfully deleted ${deleteProductInfo.manufacturer}`)
    })
})

module.exports = productInfoRouter