const express = require('express')
const userRouter = express.Router()
const { v4: uuidv4 } = require("uuid");

const users = [
    {name: "Jared", company: "Google", role: "Admin", bio: "lorem ipsum dolet set", twitter: "twitter", linkedIn: "linkedIn", github: "github", _id: uuidv4()}
]


// Find all user
userRouter.get("/", (req, res) => {
    res.send(users)
})

//Find info by user
userRouter.get("/:userId", (req, res) => {
    const userId = req.params.userId
    const foundUser = users.find(user => user._id === userId)
    res.send(foundUser)
})

// find user by company
    userRouter.get("/search/company", (req, res) => {
        const company = req.query.company
        const filteredCompany = users.filter(user => user.company === company) 
        res.send(filteredCompany)
    })

userRouter.post("/", (req, res,) => {
    const newUser = req.body
    users.push(newUser)
    res.send(`Successfully add ${newUser.name} to database`)
})

userRouter.put("/:userId", (req, res) => {
    const userId = req.params.userId
    const updateObject = req.body
    const userIndex = users.findIndex(user => user._id === userId)
    const updateUser = Object.assign(users[userIndex], updateObject)
    res.send(updateUser)
})


module.exports = userRouter