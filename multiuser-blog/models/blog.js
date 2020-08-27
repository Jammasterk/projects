const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: false
    },
    tags:{
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})


module.exports = mongoose.model('Blog', blogSchema)