import userService from "./user.service";
import User from "./user.model";
import jwt from "jsonwebtoken";
import HttpStatus from "http-status-codes";
import bcryptjs from "bcryptjs";
import { devConfig } from "../../../config/env/development";

export default {
  signup(req, res) {
    const { value, error } = userService.validateSignupSchema(req.body);
    if (error && error.details) {
      res.status(HttpStatus.BAD_REQUEST).json(error.message);
    }
    User.create(value)
      .then(data => {
        res.json({
          success: true,
          message: "user created successfully"
        });
      })
      .catch(err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err.message);
      });
  },
  login(req, res) {
    const { value, error } = userService.validateSignupSchema(req.body);
    if (error && error.details) {
      res.status(HttpStatus.BAD_REQUEST).json(error.message);
    }
    findOne({ email: value.email })
      .then(user => {
        if (!user) {
          res
            .status(HttpStatus.BAD_REQUEST)
            .json({ err: "invalid email or password" });
        }
        bcryptjs.compare(value.password, user.password, (err, matched) => {
          if (!matched) {
            res
              .status(HttpStatus.UNAUTHORIZED)
              .json({ err: "invalid credentials" });
          }
          jwt.sign(
            { id: user._id },
            devConfig.secret,
            { expiresIn: "1d" },
            function(err, token) {
              res.json({ success: true, token });
            }
          );
        });
      })
      .catch(err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  },
  async test(req, res) {
    return res.json(req.user);
  }
};
