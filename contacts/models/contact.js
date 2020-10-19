const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: false,
        unique: true
    },
    twitter:{
        type: String,
        required: false,
        unique: true
    },
    facebook:{
        type: String,
        required: false,
        unique: true
    },
    instagram: {
        type: String,
        required: false,
        unique: true
    },
    img:{
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Contact", contactSchema)