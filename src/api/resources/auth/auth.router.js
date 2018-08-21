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

authRouter.get("/github", passport.authenticate("github"));

authRouter.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/failure" }),
  authController.sendJWTToken
);

authRouter.get(
  "/authenticate",
  passport.authenticate("jwt", { session: false }),
  authController.authenticate
);
