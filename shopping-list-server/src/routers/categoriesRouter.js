import { Router } from "express";
import { Category } from "../models/Category.js";

export const categoriesRouter = new Router();

categoriesRouter.get("/categories", async (req, res) => {
  try {
    const categoriesObjects = await Category.find();
    const categoriesNames = categoriesObjects.map((obj) => obj.categoryName);
    res.send(categoriesNames);
  } catch (error) {
    res.status(500).send(error);
  }
});

categoriesRouter.post("/categories/new", async (req, res) => {
  try {
    const categories = await Category.create(req.body);
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});
