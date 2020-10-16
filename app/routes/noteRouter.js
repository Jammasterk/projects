const express = require('express')
const noteRouter = express.Router()
const Note = require('../models/note')
const authRouter = require('./authRouter')

// Get all notes

noteRouter.get("/", (req, res, next) => {
    Note.find((err, notes) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(notes)
    })
})

// Get notes by id

noteRouter.get("/user", (req, res, next) => {
    Note.find({user: req.user._id}, (err, notes) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(notes)
    })
})

// Add new note

noteRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newNote = new Note(req.body)
    newNote.save((err, savedNote) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedNote)
    })
})

// Delete note

noteRouter.delete("/:noteId", (req, res, next) => {
    Note.findOneAndDelete(
        {_id: req.params.noteId, user: req.user._id},
        (err, deleteNote) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deleteNote.title}`)
        }
    )
})

module.exports = noteRouter