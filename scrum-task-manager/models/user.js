const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    twitter:{
        type: String,
        required: false
    },
    linkedIn:{
        type: String,
        required: false
    },
    github:{
        type: String,
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Auth",
        required: true
    }
})

module.exports = mongoose.model("User", userSchema)