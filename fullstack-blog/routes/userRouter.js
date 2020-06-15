const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')


//Get All

userRouter.get("/", (req, res, next) => {
  User.find((err, users) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(users)
  })
});

//Get One
userRouter.get("/:usersId", (req, res, next) => {
    const userId = req.params.userId
    const foundUser = users.find(user => user.id === userId)
    console.log(foundUser)
    if(!foundUser){
        const err = new Error('The Item was not found')
        return next(err)
    }
    res.send(foundUser)
})

// Get by age
userRouter.get('/search/age', (req, res, next)=> {
    User.find({age: req.query.age}, (err, users)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(users)
    })
});

// Delete user

userRouter.delete("/:userId", (req, res, next) => {
    User.findOneAndDelete({_id: req.params.userId}, (err, deletedUser) => {
        if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(`Successfully deleted name ${deletedUser.name}`)
    })
})

// Update user

userRouter.put("/:userId", (req, res, next) => {
    User.findOneAndUpdate(
        {_id: req.params.userId}, //find this one and update
        req.body,   //update the object with this data
        {new: true}, // send back the updated version
        (err, updatedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedUser)
        }
    )
})



module.exports = userRouter
