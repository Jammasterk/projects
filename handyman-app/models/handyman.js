const mongoose = require('mongoose')
const Schema = mongoose.Schema

const handymanSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    certification: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Handyman", handymanSchema)