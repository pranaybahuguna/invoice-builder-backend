import express from "express";
import invoiceController from "./invoice.controller";
export const invoiceRouter = express.Router();

invoiceRouter
  .route("/")
  .post(invoiceController.create)
  .get(invoiceController.findAll);

invoiceRouter
  .route("/:id")
  .get(invoiceController.findOne)
  .delete(invoiceController.delete)
  .put(invoiceController.update);
