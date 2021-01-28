const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date(),
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Auth",
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema)