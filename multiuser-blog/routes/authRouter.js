const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

authRouter.post('/signup', (req ,res, next) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error('That username is not available'))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({token, user: savedUser.withoutPassword()})
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user )=>{
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
                res.status(403)
                return next(new Error('username or password is incorrect'))
            }
            if(!isMatch){
                res.status(403)
                return next(new Error('username or password is incorrect'))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.status(201).send({ token, user: user.withoutPassword()});
        })
    })
})

module.exports = authRouter