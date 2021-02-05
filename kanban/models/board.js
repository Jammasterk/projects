const mongoose = require('mongoose')
const Schema = mongoose.Schema

const boardSchema = new Schema({
    boardName: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now

    },
    tasks: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "Auth",
        required: true
    }
})

module.exports = mongoose.model("Board", boardSchema)