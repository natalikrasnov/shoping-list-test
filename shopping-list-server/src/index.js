import express from "express";
import cors from "cors";

//start mongoose connection to mongoDB
import "./db/mongoose.js";

//get all routers
import { productsRouter } from "./routers/productsRouter.js";
import { categoriesRouter } from "./routers/categoriesRouter.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use(productsRouter);
app.use(categoriesRouter);

app.listen(port, () => {
  console.log("server connect on port:", port);
});
