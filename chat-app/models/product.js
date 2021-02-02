const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  subTitle: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shippingDetails: {
    type: String,
    required: true,
  },
  addToWishList: {
    type: Boolean,
    default: false,
  },
  addToRegistry: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    required: true,
  },
  query:{
      type: String,
      required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema)