const express = require('express')
const authRouter = express.Router()
const Auth = require('../models/user')
const jwt = require("jsonwebtoken")

authRouter.post('/signup', (req, res, next) => {
    Auth.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(403)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("Username already exists"))
        }
        const newAuth = new Auth(req.body)
        newAuth.save((err, savedAuth) => {
            if(err){
                res.status(403)
                return next(err)
            }

            const token = jwt.sign(savedAuth.withoutPassword(), process.env.SECRET)
            return res.status(201).send({token, user: savedAuth.withoutPassword()})
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    Auth.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error("Username or password is incorrect"))
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(500)
                return next(new Error("Username or password is incorrect"))
            }
            if(!isMatch){
                res.status(403)
                return next(new Error("Username or password is incorrect"))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(201).send({token, user: user.withoutPassword()})
        })
    })
})

authRouter.delete("/:authId", (req, res, next) => {
    Auth.findOneAndDelete({_id: req.params.authId, user: req.user._id}, (err, deleteUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deleteUser.username}'s account'`)
    })
})

module.exports = authRouter