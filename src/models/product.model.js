const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    count: { type: Number, required: true },
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
