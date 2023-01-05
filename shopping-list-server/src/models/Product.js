import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    ref: "Category",
  },
  count: {
    type: Number,
    defaultValue: 1,
  },
});

export const Product = mongoose.model("Product", productSchema);
