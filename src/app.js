import express from "express";
import mongoose from "mongoose";
import HttpStatus from "http-status-codes";
import logger from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swagger.json";
import cors from "cors";
import { restRouter } from "./api";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/invoice-builder");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(logger("common"));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);
app.use("/api", restRouter);
app.use((req, res, next) => {
  const error = new Error("Invalid Route");
  error.status = HttpStatus.NOT_FOUND;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || HttpStatus.INTERNAL_SERVER_ERROR);
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
