"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalMiddleware = undefined;

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _swaggerUiExpress = require("swagger-ui-express");

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _swagger = require("../../config/swagger.json");

var _swagger2 = _interopRequireDefault(_swagger);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = require("./passport-jwt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setGlobalMiddleware = exports.setGlobalMiddleware = function setGlobalMiddleware(app) {
  app.use(_express2.default.json());
  app.use(_express2.default.urlencoded({ extended: true }));
  app.use((0, _cors2.default)());
  app.use((0, _morgan2.default)("common"));
  app.use(_passport2.default.initialize());
  (0, _passportJwt.configureJWTStrategy)();
  app.use("/api-docs", _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, { explorer: true }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvZ2xvYmFsLW1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsic2V0R2xvYmFsTWlkZGxld2FyZSIsImFwcCIsInVzZSIsImV4cHJlc3MiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicGFzc3BvcnQiLCJpbml0aWFsaXplIiwic3dhZ2dlclVpIiwic2VydmUiLCJzZXR1cCIsInN3YWdnZXJEb2N1bWVudCIsImV4cGxvcmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxvREFBc0IsU0FBdEJBLG1CQUFzQixNQUFPO0FBQ3hDQyxNQUFJQyxHQUFKLENBQVFDLGtCQUFRQyxJQUFSLEVBQVI7QUFDQUgsTUFBSUMsR0FBSixDQUFRQyxrQkFBUUUsVUFBUixDQUFtQixFQUFFQyxVQUFVLElBQVosRUFBbkIsQ0FBUjtBQUNBTCxNQUFJQyxHQUFKLENBQVEscUJBQVI7QUFDQUQsTUFBSUMsR0FBSixDQUFRLHNCQUFPLFFBQVAsQ0FBUjtBQUNBRCxNQUFJQyxHQUFKLENBQVFLLG1CQUFTQyxVQUFULEVBQVI7QUFDQTtBQUNBUCxNQUFJQyxHQUFKLENBQ0UsV0FERixFQUVFTywyQkFBVUMsS0FGWixFQUdFRCwyQkFBVUUsS0FBVixDQUFnQkMsaUJBQWhCLEVBQWlDLEVBQUVDLFVBQVUsSUFBWixFQUFqQyxDQUhGO0FBS0QsQ0FaTSIsImZpbGUiOiJnbG9iYWwtbWlkZGxld2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dnZXIgZnJvbSBcIm1vcmdhblwiO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgc3dhZ2dlclVpIGZyb20gXCJzd2FnZ2VyLXVpLWV4cHJlc3NcIjtcclxuaW1wb3J0IHN3YWdnZXJEb2N1bWVudCBmcm9tIFwiLi4vLi4vY29uZmlnL3N3YWdnZXIuanNvblwiO1xyXG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZUpXVFN0cmF0ZWd5IH0gZnJvbSBcIi4vcGFzc3BvcnQtand0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsTWlkZGxld2FyZSA9IGFwcCA9PiB7XHJcbiAgYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbiAgYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcbiAgYXBwLnVzZShjb3JzKCkpO1xyXG4gIGFwcC51c2UobG9nZ2VyKFwiY29tbW9uXCIpKTtcclxuICBhcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XHJcbiAgY29uZmlndXJlSldUU3RyYXRlZ3koKTtcclxuICBhcHAudXNlKFxyXG4gICAgXCIvYXBpLWRvY3NcIixcclxuICAgIHN3YWdnZXJVaS5zZXJ2ZSxcclxuICAgIHN3YWdnZXJVaS5zZXR1cChzd2FnZ2VyRG9jdW1lbnQsIHsgZXhwbG9yZXI6IHRydWUgfSlcclxuICApO1xyXG59O1xyXG4iXX0=