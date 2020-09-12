const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Note", noteSchema)