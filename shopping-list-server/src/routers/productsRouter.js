import { Router } from "express";
import { Product } from "../models/Product.js";

export const productsRouter = new Router();

productsRouter.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    next(error);
  }
});

productsRouter.post("/products/new", async (req, res, next) => {
  try {
    if (!req.body.category || !req.body.product) {
      throw new Error("category or product name is missing");
    }
    const updatedProduct = await Product.findOneAndUpdate(
      req.body,
      {
        $inc: { count: 1 },
        ...req.body,
      },
      {
        upsert: true,
        new: true,
      }
    );
    return res.send(updatedProduct);
  } catch (error) {
    next(error);
  }
});
