const express = require('express')
const noteRouter = express.Router()
const uuid = require('uuid').v4

const notes = [
    {title: "", date: '', note: '', _id: uuid()}
]

// Get all notes

noteRouter.get('/', (req, res) => {
    res.send(notes)
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

noteRouter.post('/', (req, res) => {
    const newNote = req.body
    newNote._id = uuid()
    notes.push(newNote)
    res.send(newNote)
})

// Update note

noteRouter.put('/:noteId', (req, res) => {
    const noteId = req.params.noteId
    const updateObject = req.body
    const noteIndex = notes.findIndex(note => note._id === noteId)
    const updateNote = Object.assign(notes[noteIndex], updateObject)
    res.send(updateNote)
})

// Delete Note

noteRouter.delete('/:noteId', (req, res) => {
    const noteId = req.params.noteId
    const noteIndex = notes.findIndex(note => note._id === noteId)
    notes.splice(noteIndex, 1)
    res.send(`Successfully deleted ${notes.title}`)
})



module.exports = noteRouter