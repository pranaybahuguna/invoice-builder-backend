import userService from "./user.service";
import User from "./user.model";
import jwt from "jsonwebtoken";
import HttpStatus from "http-status-codes";
import bcryptjs from "bcryptjs";
import { devConfig } from "../../../config/env/development";

export default {
  async signup(req, res) {
    try {
      const { value, error } = userService.validateSignupSchema(req.body);
      if (error && error.details) {
        return res.status(HttpStatus.BAD_REQUEST).json(error.message);
      }
      const user = await User.create(value);
      return res.json({ success: true, message: "user created successfully" });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error.message);
    }
  },
  async login(req, res) {
    try {
      const { value, error } = userService.validateSignupSchema(req.body);
      if (error && error.details) {
        return res.status(HttpStatus.BAD_REQUEST).json(error.message);
      }
      const user = await User.findOne({ email: value.email });
      if (!user) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ err: "invalid email or password" });
      }
      const matched = await bcryptjs.compare(value.password, user.password);
      if (!matched) {
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ err: "invalid credentials" });
      }
      jwt.sign(
        { id: user._id },
        devConfig.secret,
        { expiresIn: "1d" },
        function(err, token) {
          return res.json({ success: true, token });
        }
      );
    } catch (err) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json(HttpStatus.INTERNAL_SERVER_ERROR, err.message);
    }
  },
  async test(req, res) {
    return res.json(req.user);
  }
};
