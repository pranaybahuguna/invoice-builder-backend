import logger from "morgan";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../config/swagger.json";
import cors from "cors";
import passport from "passport";

export const setGlobalMiddleware = app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(logger("common"));
  app.use(passport.initialize());
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, { explorer: true })
  );
};
