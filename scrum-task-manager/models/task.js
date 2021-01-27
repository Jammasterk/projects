const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    todo: {
        type: String,
        date: new Date(),
        required: true
    }
})

module.exports = mongoose.model("Task", taskSchema)