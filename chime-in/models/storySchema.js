const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storySchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  thumbsUp: {
    type: Number,
    // required: true
  },
  projectName: {
    type: String,
    required: true,
  },
  projectAuthor: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
});

module.exports = mongoose.model("Story", storySchema)