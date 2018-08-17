import jwt from "jsonwebtoken";
import { devConfig } from "../../../config/env/development";

export default {
  sendJWTToken(req, res) {
    const token = jwt.sign(
      { id: req.currentUser._id },
      devConfig.secret,
      { expiresIn: "1d" },
      function(err, token) {
        return res.json({ success: true, token });
      }
    );
  }
};
