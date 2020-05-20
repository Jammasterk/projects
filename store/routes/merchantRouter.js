const express = require('express')
const merchantRouter = express.Router()
const Merchant = require('../models/merchant.js')

// Get all merchants

merchantRouter.get('/', (req, res,next)=>{
    Merchant.find((err, merchants) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(merchants)
    })
})

// Get merchants by ID

merchantRouter.get('/merchant', (req, res, next)=>{
    Merchant.find({user: req.user._id}, (err, merchants)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(merchants)
    })
})

// Add new merchant

merchantRouter.post('/', (req, res, next)=>{
    req.body.user = req.user._id
    const newMerchant = new Merchant(req.body)
    newMerchant.save((err, savedMerchant)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedMerchant)
    })
})

// Update merchant Info

merchantRouter.put("/:merchantId", (req, res, next)=>{
    Merchant.findOneAndUpdate(
        {_id: req.params.merchantId, user: req.user._id},
        req.body,
        {new: true},
        (err, updateMerchant) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updateMerchant)
        })
})

// Delete merchant info

merchantRouter.delete("/:merchantId", (req, res, next)=>{
    Merchant.findOneAndDelete(
        {_id: req.params.merchantId, user: req.user._id},
        (err, deleteMerchant) => {
            if(err){
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deleteMerchant.merchant}`)
        }
    )
})

module.exports = merchantRouter
