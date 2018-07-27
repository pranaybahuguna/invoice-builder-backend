import express from "express";
import mongoose from "mongoose";
import logger from "morgan";

import { router } from "./config/routes";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/invoice-builder");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger("common"));
app.use("/api", router);
app.use((req, res, next) => {
  const error = new Error("Invalid Route");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to invoice builder backend"
  });
});

app.get("/invoices", (req, res) => {
  res.json(invoices);
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
