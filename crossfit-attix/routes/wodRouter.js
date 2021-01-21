const express = require('express')
const wodRouter = express.Router()
const WOD = require('../models/wod')

wodRouter.get('/', (req, res, next) => {
    WOD.find((err, wods) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(wods)
    })
})

wodRouter.get('/user', (req, res, next) => {
    WOD.find({user: req.user._id}, (err, wods) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(wods)
    })
})

wodRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newWod = new WOD(req.body)
    newWod.save((err, savedWod) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedWod)
    })

})

wodRouter.put("/:wodId", (req, res, next) => {
    WOD.findOneAndUpdate(
        {_id: req.params.wodId, user: req.user._id},
        req.body,
        {new: true},
        (err, updateWod) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updateWod)
        }
    )
})

wodRouter.delete("/:wodId", (req, res, next) => {
    WOD.findOneAndDelete(
        {_id: req.params.wodId, user: req.user._id},
        (err, deleteWod) => {
            if(err){
                res.status(500)
                return next(err)
            }

            return res.status(200).send(`Successfully delete ${deleteWod.workout}`)
        }
    )
})

module.exports = wodRouter