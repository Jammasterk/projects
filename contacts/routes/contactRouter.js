const express = require('express')
const contactRouter = express.Router()
const Contact = require("../models/contact")

// Get all contacts

contactRouter.get('/', (req, res,next) => {
    Contact.find((err, contacts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(contacts)
    })
})

// Get contact by id

contactRouter.get('/user', (req, res, next) => {
    Contact.find({user: req.user._id}, (err, contacts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(contacts)
    })
})

// Add contact

contactRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newContact = new Contact(req.body)
    newContact.save((err, savedContact) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedContact)
    })
})

// Delete Contact

contactRouter.delete("/:contactId", (req, res, next) => {
    Contact.findOneAndDelete(
        {_id: req.params.contactId, user: req.user._id},
        (err, deleteContact) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted contact`)
        }
    )
})

module.exports = contactRouter