const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const mediaSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: false
    },
    video:{
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Media", mediaSchema)