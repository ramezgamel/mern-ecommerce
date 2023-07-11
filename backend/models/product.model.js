const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
    name: {
      type: String,
      unique: true,
      required: [true, "Name is required"],
    },
    slug: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    images: [{ type: String }],
    imageCover: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
