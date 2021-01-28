const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Auth", authSchema)