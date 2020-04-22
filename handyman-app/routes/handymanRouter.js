const express = require('express')
const handymanRouter = express.Router()
const Handyman = require('../models/handyman.js')

// Get all Handyman

handymanRouter.get('/', (res, next) => {
    Handyman.find((err, worker) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(worker)
    })
})

// Get handyman by ID

handymanRouter.get('/user', (req, res, next) => {
    Handyman.find({user: req.user._id}, (err, worker) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(worker)
    })
})

// Add new entry

handymanRouter.post('/', (req, res, next) => {
    req.body.user = req.body._id
    const newEntry = new Handyman(req.body)
    newEntry.save((err, savedEntry) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedEntry)
    })
})

//Delete entry

handymanRouter.delete('/:entryId', (req, res, next) => {
    Handyman.findOneAndDelete(
        {_id: req.params.entryId, user: req.user._id},
        (err, deleteEntry) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted entry: ${deleteEntry}`)
        }
    )
})

//Update entry, 

handymanRouter.put('/:entryId', (req, res) => {
    Handyman.findOneAndUpdate(
        {_id: req.params.entryId, user: req.user._id},
        req.body,
        {new: true},
        (err, updateEntry) => {
            if(err){
                res.status(500)
                
            }
            res.status(200).send(updateEntry)
        }
    )
})

module.exports = handymanRouter