const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Auth",
    required: true
  },
});

module.exports = mongoose.model("Photo", photoSchema);
