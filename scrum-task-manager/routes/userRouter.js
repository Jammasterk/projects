const express = require("express")
const userRouter = express.Router()
const User = require('../models/user')

userRouter.get('/', (req, res, next) => {
    User.find((err, users) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})

userRouter.get('/', (req, res, next) => {
    User.find({user: req.user._id}, (err, users) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})

userRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id;
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedUser)
    })
})

userRouter.put("/:userId", (req, res, next) => {
    User.findOneAndUpdate(
      { _id: req.params.userId, user: req.user._id },
      req.body,
      { new: true },
      (err, updateUser) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res.status(200).send(updateUser);
      }
    );
})

userRouter.delete("/:userId", (req, res, next) => {
    User.findOneAndDelete(
      { _id: req.params.userId, user: req.user._id },
      (err, deleteUser) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res
          .status(200)
          .send(`Successfully deleted ${deleteUser.firstName}`);
      }
    );
})

module.exports = userRouter