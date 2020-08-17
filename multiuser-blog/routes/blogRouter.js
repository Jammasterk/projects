const express = require("express")
const blogRouter = express.Router()
const Blog = require("../models/blog")
const blog = require("../models/blog")

// Get all blogs

blogRouter.get('/', (req, res, next) => {
    Blog.find((err, blogs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(blogs)
    })
})

// Get blogs by user id

blogRouter.get('/user', (req, res, next) => {
    Blog.find({user: req.user._id}, (err, blogs) => {

        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(blogs)
    })
})

// Add blog

blogRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newBlog = new Blog(req.body)
    newBlog.save((err, savedBlog) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedBlog)    
    })
})

// Update Blog

blogRouter.put("/:blogId", (req, res, next) => {
    Blog.findOneAndUpdate(
        {_id: req.params.blogId, user: req.user._id},
        req.body,
        {new: true},
        (err, updateBlog) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updateBlog)
        }
    )
})

// Delete Blog

blogRouter.delete("/:blogId", (req, res, next) => {
    Blog.findOneAndDelete(
        {_id: req.params.blogId, user: req.user._id},
        (err, deleteBlog) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted blog: ${deleteBlog.title}`)
        }
    )
})

module.exports = blogRouter