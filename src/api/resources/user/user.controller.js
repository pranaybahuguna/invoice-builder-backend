import userService from "./user.service";
import User from "./user.model";
import HttpStatus from "http-status-codes";
import bcrypt from "bcrypt";

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
      const matched = bcrypt.compare(value.password, user.password);
      console.log(matched);
      if (!matched) {
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ err: "invalid credentials" });
      }
      return res.json({ success: true, message: "logged in successfully" });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error.message);
    }
  }
};
