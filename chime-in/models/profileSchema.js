const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  location: {
    type: String,
    // required: true,
  },
  avatar: {
    type: String,
    required: true
  },
  cloudinary_id: {
    type: String
   
  },
  Name: {
    type: String,
  },

  email: {
    type: String,
    // required: true,
  },
  portfolio: {
    type: String,
    // required: false,
  },
  bio: {
    type: String,
    // required: true,
  },
  twitter: {
    type: String,
    // required: false
  },
  dribble: {
    type: String,
    required: false,
  },
  behance: {
    type: String,
    required: false,
  },
  linkedIn: {
    type: String,
    required: false,
  },
  occupation: {
    type: String,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Auth"
  },
});

module.exports = mongoose.model("Profile", profileSchema)