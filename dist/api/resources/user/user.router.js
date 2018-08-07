"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _user = require("./user.controller");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = exports.userRouter = _express2.default.Router();
userRouter.post("/signup", _user2.default.signup);
userRouter.post("/login", _user2.default.login);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5yb3V0ZXIuanMiXSwibmFtZXMiOlsidXNlclJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJwb3N0IiwidXNlckNvbnRyb2xsZXIiLCJzaWdudXAiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLGtDQUFhQyxrQkFBUUMsTUFBUixFQUFuQjtBQUNQRixXQUFXRyxJQUFYLENBQWdCLFNBQWhCLEVBQTJCQyxlQUFlQyxNQUExQztBQUNBTCxXQUFXRyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCQyxlQUFlRSxLQUF6QyIsImZpbGUiOiJ1c2VyLnJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB1c2VyQ29udHJvbGxlciBmcm9tIFwiLi91c2VyLmNvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxudXNlclJvdXRlci5wb3N0KFwiL3NpZ251cFwiLCB1c2VyQ29udHJvbGxlci5zaWdudXApO1xyXG51c2VyUm91dGVyLnBvc3QoXCIvbG9naW5cIiwgdXNlckNvbnRyb2xsZXIubG9naW4pO1xyXG4iXX0=