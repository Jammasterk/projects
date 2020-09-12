const express = require('express')
const noteRouter = express.Router()
const Note = require('../models/note')
// const uuid = require('uuid').v4

// const notes = [
//     {title: "", date: '', note: '', _id: uuid()}
// ]

// Get all notes

noteRouter.get('/', (req, res, next) => {
   Note.find((err, notes) => {
       if(err){
            res.status(500)
            return next(err)
       }
       return res.status(201).send(notes)
   })
})

// Get notes by id

noteRouter.get('/:noteId', (req, res, next) => {
    const noteId = req.params.noteId
    const foundNote = notes.find(note => note._id === noteId)
    if(!foundNote){
        const error = new Error('The server returned a response of undefined - Invalid ID')
        return next(err)
    }
    res.send(foundNote)
})

// Add new note

noteRouter.post('/', (req, res, next) => {
    const newNote = new Note(req.body)
    newNote.save((err, savedNote) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedNote)
    })
})

// Update note

// noteRouter.put('/:noteId', (req, res) => {
//     const noteId = req.params.noteId
//     const updateObject = req.body
//     const noteIndex = notes.findIndex(note => note._id === noteId)
//     const updateNote = Object.assign(notes[noteIndex], updateObject)
//     res.send(updateNote)
// })

noteRouter.put("/:noteId", (req, res, next) => {
    Note.findOneAndUpdate(
        {_id: req.params.noteId},
        req.body,
        {new: true},
        (err, updateNote) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updateNote)
        }
    )
})

// Delete Note

// noteRouter.delete('/:noteId', (req, res) => {
//     const noteId = req.params.noteId
//     const noteIndex = notes.findIndex(note => note._id === noteId)
//     notes.splice(noteIndex, 1)
//     res.send(`Successfully deleted ${notes.title}`)
// })

noteRouter.delete('/:noteId', (req, res, next) => {
    Note.findOneAndDelete(
        {_id: req.params.noteId},
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