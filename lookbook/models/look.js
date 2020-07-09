const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lookSchema = new Schema ({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    designer: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Look', lookSchema)