import express from "express";
import invoiceController from "./invoice.controller";
import passport from "passport";
export const invoiceRouter = express.Router();

//Invoices

invoiceRouter
  .route("/")
  .post(
    passport.authenticate("jwt", { session: false }),
    invoiceController.create
  )
  .get(
    passport.authenticate("jwt", { session: false }),
    invoiceController.findAll
  );

invoiceRouter
  .route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    invoiceController.findOne
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    invoiceController.delete
  )
  .put(
    passport.authenticate("jwt", { session: false }),
    invoiceController.update
  );
invoiceRouter.get(
  "/:id/download",
  passport.authenticate("jwt", { session: false }),
  invoiceController.download
);
