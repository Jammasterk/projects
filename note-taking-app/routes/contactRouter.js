const express = require('express')
const accountRouter = require('./accountRouter')
const contactRouter = express.Router()
const uuid = require('uuid').v4

const contacts = [
    {name: "Jacob Bingham", phone: "208-234-4000", age: 34, email: "jacob@gmail.com", address: "1025 Gray", state: "Pocatello", state: "Idaho", _id: uuid()}
]

contactRouter.get("/", (req, res) => {
    res.send(contacts)
})

contactRouter.get('/:contactId', (req, res) => {
    const contactId = req.params.contactId
    const foundContact = contacts.find(contact => contact._id === contactId)
    if(!foundContact){
        const error = new Error(' The server could not find contact ID')
        return next(error)
    }
    res.send(foundContact)
})

contactRouter.post('/', (req, res) => {
    const newContact = req.body
    newContact._id = uuid()
    contacts.push(newContact)
    res.send(newContact)
})

contactRouter.put('/:contactId', (req, res) => {
    const contactId = req.params.contactId
    const updateObject = req.body
    const contactIndex = contacts.findIndex(contact => contact._id === contactId)
    const updateContact = Object.assign(contacts[contactIndex], updateObject)
    res.send(updateContact)
})

module.exports = contactRouter