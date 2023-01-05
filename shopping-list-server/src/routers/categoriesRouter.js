import { Router } from "express";
import { Category } from "../models/Category.js";

export const categoriesRouter = new Router();

categoriesRouter.get("/categories", async (_req, res, next) => {
  try {
    const categoriesObjects = await Category.find();
    const categoriesNames = categoriesObjects.map((obj) => obj.categoryName);
    res.send(categoriesNames);
  } catch (error) {
    next(error);
  }
});

categoriesRouter.post("/categories/new", async (req, res, next) => {
  try {
    const categories = await Category.create(req.body);
    res.send(categories);
  } catch (error) {
    next(error);
  }
});
