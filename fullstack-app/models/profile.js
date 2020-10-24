const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    intro:{
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Profile", profileSchema)