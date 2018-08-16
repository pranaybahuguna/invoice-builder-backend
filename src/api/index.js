import express from "express";
import { invoiceRouter } from "./resources/invoice/invoice.router";
import { clientRouter } from "./resources/client/client.router";
import { userRouter } from "./resources/user/user.router";
import { authRouter } from "./resources/auth/auth.router";

export const restRouter = express.Router();
restRouter.use("/invoices", invoiceRouter);
restRouter.use("/clients", clientRouter);
restRouter.use("/user", userRouter);
restRouter.use("/auth", authRouter);
