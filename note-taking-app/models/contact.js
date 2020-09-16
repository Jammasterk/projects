const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
});

module.exports = mongoose.model("Contact", contactSchema)