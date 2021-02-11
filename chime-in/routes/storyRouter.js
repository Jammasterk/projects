const express = require("express")
const storyRouter = express.Router()
const Story = require('../models/storySchema')

storyRouter.get("/", (req, res, next) => {
    Story.find((err, stories) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(stories)
    })
})

storyRouter.get("/user", (req, res, next) => {
    Story.find({user: req.user._id}, (err, stories) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(stories)
    })
})

storyRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newStory = new Story(req.body)
    newStory.save((err, savedStory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedStory)
    })
})

storyRouter.put("/:storyId", (req, res, next) => {
    Story.findOneAndUpdate(
        {_id: req.params.storyId, user: req.user._id},
        req.body,
        {new: true},
        (err, updateStory) => {
            if(err){
            res.status(500)
            return next(err)
            }
            return res.status(200).send(updateStory)
        }
    )
})

storyRouter.delete("/:storyId", (req, res, next) => {
    Story.findOneAndDelete(
        {_id: req.params.storyId, user: req.user._id},
        (err, deletedStory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedStory.projectName}`)
        }
    )
})

module.exports = storyRouter