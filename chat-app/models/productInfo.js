const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  prodDimensions: {
    type: String,
    required: false,
  },
  itemWeight: {
    type: String,
    required: false,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  userManual: {
    type: String,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
});

module.exports = mongoose.model("ProductInfo", productSchema)