const express = require('express')
const profileRouter = express.Router()
const Profile = require('../models/profile')

// Get all profiles

profileRouter.get("/", (req, res, next) => {
    Profile.find((err, profiles) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(profiles)
    })
})

// Get profile by id

profileRouter.get('/user', (req, res, next) => {
    Profile.find({user: req.user._id}, (err, profiles) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(profiles)
    })
})

// Add profile

profileRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newProfile = new Profile(req.body)
    newProfile.save((err, savedProfile) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedProfile)
    })
})

// Delete Profile

profileRouter.delete("/:profileId", (req ,res, next) => {
    Profile.findOneAndDelete(
        {_id: req.params.profileId, user: req.user._id},
        (err, deleteProfile) => {
            if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deleteProfile.username}`)
    }
    )
})

// Edit Profile

profileRouter.put("/:profileId", (req, res, next) => {
    Profile.findOneAndUpdate(
        { _id: req.params.profileId, user: req.user._id},
        req.body,
        {new: true},
        (err, updateProfile) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updateProfile)
        }
    )
})

module.exports = profileRouter
