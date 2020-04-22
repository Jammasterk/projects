const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')

// Get all comments

commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// Get comments by user Id

commentRouter.get("/comments", (req, res,next) => {
    Comment.find({comment: req.body._id}, (err, comments)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// Add new Comment

commentRouter.post("/", (req, res, next)=>{
    req.body.user = req.user.id
    const newComment = new Comment(req.body)
    newComment.save((err, commentList) => {
        if(err){
        res.status(500)
        return next(err)
        }
        return res.status(200).send(commentList)
    })
})

// Delete Comment

commentRouter.delete('/:commentId', (req, res, next)=>{
    Comment.findOneAndDelete(
        {_id: req.params.commentId, user: req.user._id},
        (err, deleteComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deleteComment.comment}`)
        }
    )
})

// Update Comment

commentRouter.put('/:commentId', (req, res) => {
    Comment.findByIdAndUpdate(
        {_id: req.params.commentId, user: req.use._id},
        req.body,
        {new: true},
        (err, updateComment) => {
            if(err){
                res.status(500)
            }
            return res.status(200).send(updateComment)
        }
    )
})

module.exports = commentRouter

