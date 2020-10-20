const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true,
        
    },
    email:{
        type: String,
        required: false,
        
    },
    twitter:{
        type: String,
        required: false,
        
    },
    facebook:{
        type: String,
        required: false,
        
    },
    instagram: {
        type: String,
        required: false,
        
    },
    img:{
        type: String,
        required: false
    },
    birthday: {
        type:String,
        required: false
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Contact", contactSchema)