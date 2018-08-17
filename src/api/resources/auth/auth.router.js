import express from "express";
import passport from "passport";
import authController from "./auth.controller";

export const authRouter = express.Router();

authRouter.route("/test").get((req, res) => {
  res.json({ msg: "working" });
});

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failure" }),
  authController.sendJWTToken
);
