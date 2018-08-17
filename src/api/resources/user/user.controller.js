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
        res.status(HttpStatus.BAD_REQUEST).json(error.message);
      }
      const existingUser = await User.findOne({ "local.email": value.email });
      if (existingUser) {
        res.status(HttpStatus.BAD_REQUEST).json({ err: "Account Exists" });
      }
      const user = await new User();
      user.local.email = value.email;
      const salt = await bcryptjs.genSalt();
      const hash = await bcryptjs.hash(value.password, salt);
      user.local.password = hash;
      await user.save();
      return res.json({
        success: true,
        message: "user created successfully"
      });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err.message);
    }
  },
  async login(req, res) {
    try {
      const { value, error } = userService.validateSignupSchema(req.body);
      if (error && error.details) {
        return res.status(HttpStatus.BAD_REQUEST).json(error.message);
      }
      const user = await User.findOne({ "local.email": value.email });
      if (!user) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ err: "invalid email or password" });
      }
      const matched = await bcryptjs.compare(
        value.password,
        user.local.password
      );
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
