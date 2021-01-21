const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wodSchema = new Schema({
    warmUp:{
        type: String,
        required: false
    },
    strength: {
        type: String,
        required: true
    },
    workout:{
        type: String,
        required: true,
    },
    coolDown:{
        type: String,
        required: false
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("WOD", wodSchema)