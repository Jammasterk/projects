const mongoose = require('mongoose')
const Schema = mongoose.Schema

const descriptionSchema = new Schema({
  created: {
    type: Date,
    default: Date.now,
  },

  description: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: String,
    required: true,
  },
  due: {
    type: String,
    required: true,
  },
  teamLead: {
    type: String,
    required: false,
  },
  priority: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
});

module.exports = mongoose.model("Description", descriptionSchema)