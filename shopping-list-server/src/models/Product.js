import mongoose from "mongoose";
import { Category } from "./Category.js";

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

// productSchema.pre("save", async function (next) {
//   const product = this;
//   const category = await Category.findOne({ categoryName: product.category });
//   product.category = category._id;
//   next();
// });

// productSchema.post("find", async function (next) {
//   const products = this
//   for (let product of products) {

//   }
// })

export const Product = mongoose.model("Product", productSchema);
