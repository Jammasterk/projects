const express = require('express')
const accountRouter = express.Router()
const uuid = require('uuid').v4

const accounts = [
    {name: "Jared", age: "30", email: "jaredmanwaring@me.com", bio: "I am a 30 year old male looking for a software engineering job", city: "Denver", state: "Colorado", _id: uuid()}
]

accountRouter.get('/', (req, res) => {
    res.send(accounts)
})

accountRouter.get('/:accountId', (req, res, next) => {
    const accountId = req.params.accountId
    const foundAccount = accounts.find(account => account._id === accountId)
    if(!foundAccount){
        const error = new Error('The server responded with invalid account Id')
        return next(error)
    }
    res.send(foundAccount)
})

accountRouter.post("/", (req, res) => {
    const newAccount = req.body
    newAccount._id = uuid()
    accounts.push(newAccount)
    res.send(newAccount)
})

accountRouter.put('/:accountId', (req, res) => {
    const accountId = req.params.accountId
    const updateObject = req.body
    const accountIndex = accounts.findIndex(account => account._id === accountId)
    const updateAccount = Object.assign(accounts[accountIndex], updateObject)
    res.send(updateAccount)
})

module.exports = accountRouter