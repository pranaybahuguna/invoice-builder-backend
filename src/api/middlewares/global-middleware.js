import logger from "morgan";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../config/swagger.json";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import { configureJWTStrategy } from "./passport-jwt";
import { configureGoogleStrategy } from "./passport-google";
import { configureGithubStrategy } from "./passport-github";
import { devConfig } from "../../config/env/development";
import User from "../resources/user/user.model";
import pdf from "express-pdf";

export const setGlobalMiddleware = app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(pdf);
  app.use(logger("dev"));
  app.use(passport.initialize({ userProperty: "currentUser" }));
  app.use(passport.session());
  configureJWTStrategy();
  configureGoogleStrategy();
  configureGithubStrategy();
  app.use(
    session({
      secret: devConfig.secret,
      resave: false,
      saveUninitialized: true
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user._id.toJSON());
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });

  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, { explorer: true })
  );
  app.get("failure", (req, res) => {
    return res.redirect("http://localhost:4200");
  });
};
