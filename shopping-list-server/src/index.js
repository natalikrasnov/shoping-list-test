import express from "express";
import cors from "cors";

//start mongoose connection to mongoDB
import "./db/mongoose.js";

import { productsRouter } from "./routers/productsRouter.js";
import { categoriesRouter } from "./routers/categoriesRouter.js";
import { ErrorHandler } from "./middleware/errorHandler.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use(productsRouter);
app.use(categoriesRouter);

app.use(ErrorHandler);

app.listen(port, () => {
  console.log("server connect on port:", port);
});
