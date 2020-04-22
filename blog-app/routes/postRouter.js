const express = require('express')
const postRouter = express.Router()
const Post = require("../models/post.js")

// Get all posts

postRouter.get("/", (req, res, next) => {
    Post.find((err, posts)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// Get posts by user id

postRouter.get("/user", (req, res, next)=>{
    Post.find({user: req.user._id}, (err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// Add new posts

postRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id 
    const newPost = new Post(req.body)
    newPost.save((err, savedList) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedList)
    })  
})

// Delete post

postRouter.delete("/:postId", (req, res, next) => {
  Post.findOneAndDelete(
    { _id: req.params.postId, user: req.user._id },
    (err, deletedPost) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(`Successfully deleted post: ${deletedPost.title}`);
    }
  );
});

// Update Post

postRouter.put('/:postId', (req, res, next) => {
    Post.findOneAndUpdate(
        {_id: req.params.postId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedPost)
        }
    )
})

module.exports = postRouter 

