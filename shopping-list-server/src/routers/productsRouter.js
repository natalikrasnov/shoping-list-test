import { Router } from "express";
import { Product } from "../models/Product.js";

export const productsRouter = new Router();

productsRouter.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

productsRouter.post("/products/new", async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(req.body, {
      $inc: { count: 1 },
    });
    if (updatedProduct) return res.send(updatedProduct);

    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send(newProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});
