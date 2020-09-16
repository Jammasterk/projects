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
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  nickname: {
    type: String,
    required: false,
  },
  birthday: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
});

module.exports = mongoose.model("Contact", contactSchema)