const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },

    post: {
        type: String,
        required: true
    },
    
    imgUrl: {
        type: String,
        required: false
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}) 

module.exports = mongoose.model('Post', postSchema)