const express = require('express')
const reviewRouter = express.Router()
const Review = require('../models/review')

reviewRouter.get("/", (req, res, next) => {
    Review.find((err, reviews) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(reviews)
    })
})

reviewRouter.get("/user", (req, res, next) => {
    Review.find({user: req.user._id}, (err, reviews) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(reviews)
    })
})

reviewRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newReview = new Review(req.body)
    newReview.save((err, savedReview) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedReview)
    })
})

reviewRouter.put("/:reviewId", (req, res, next) => {
    Review.findOneAndUpdate(
        {_id: req.params.reviewId, user: req.user._id},
    req.body,
    {new: true},
    (err, updateReview) => {
        if(err){
            res.status(400)
            return next(err)
        }
        return res.status(200).send(updateReview)
    }
    )
})

reviewRouter.delete("/:reviewId", (req, res, next) => {
    Review.findOneAndDelete({_id: req.params.reviewId, user: req.user._id}, (err, deletedReview) =>  {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedReview.title}`)
    })
})

module.exports = reviewRouter