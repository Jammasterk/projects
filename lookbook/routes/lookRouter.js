const express = require('express')
const lookRouter = express.Router()
const Look = require('../models/look.js')

// Get all Looks

lookRouter.get('/', (req, res, next) => {
    Look.find((err, looks)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(looks)
    })
})

// Gel looks by user Id

lookRouter.get('/look', (req, res, next)=>{
    Look.find({look: req.look._id}, (err, looks) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(looks)
    })
})

// Add new looks

lookRouter.post('/', (req, res, next)=>{
    req.body.user = req.user
    const newLook = new Look(req.body)
    newLook.save((err, savedLooks)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedLooks)
    })
})

// Delete Look

lookRouter.delete('/:lookId', (req, res, next)=>{
    Look.findOneAndDelete(
        {_id: req.params.lookId, look: req.look},
        (err, deletedLook) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted look ${deletedLook.name}`)
        }
    )
})

// Update Look

lookRouter.put('/:lookId', (req, res, next)=> {
    Look.findOneAndUpdate(
        {_id: req.params.lookId, look: req.look},
        req.body,
        {new: true},
        (err, updatedLook) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedLook)
        }
    )
})

module.exports = lookRouter