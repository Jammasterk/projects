const mongoose = require('mongoose')
const Schema = mongoose.Schema

const merchantSchema = new Schema({
    merchant: {
        type: String,
        required: true
    },
    merchantImg: {
        type: String,
        required: false
    },
    serviceName:{
        type: String,
        required: true
    },
    skills:{
        type: String,
        required: true
    },
    rates:{
        type: String,
        required: false
    },
    profile:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Merchant', merchantSchema)