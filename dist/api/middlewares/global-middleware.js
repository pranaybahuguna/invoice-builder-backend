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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setGlobalMiddleware = exports.setGlobalMiddleware = function setGlobalMiddleware(app) {
  app.use(_express2.default.json());
  app.use(_express2.default.urlencoded({ extended: true }));
  app.use((0, _cors2.default)());
  app.use((0, _morgan2.default)("dev"));
  app.use(_passport2.default.initialize);
  app.use("/api-docs", _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, { explorer: true }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvZ2xvYmFsLW1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsic2V0R2xvYmFsTWlkZGxld2FyZSIsImFwcCIsInVzZSIsImV4cHJlc3MiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicGFzc3BvcnQiLCJpbml0aWFsaXplIiwic3dhZ2dlclVpIiwic2VydmUiLCJzZXR1cCIsInN3YWdnZXJEb2N1bWVudCIsImV4cGxvcmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxvREFBc0IsU0FBdEJBLG1CQUFzQixNQUFPO0FBQ3hDQyxNQUFJQyxHQUFKLENBQVFDLGtCQUFRQyxJQUFSLEVBQVI7QUFDQUgsTUFBSUMsR0FBSixDQUFRQyxrQkFBUUUsVUFBUixDQUFtQixFQUFFQyxVQUFVLElBQVosRUFBbkIsQ0FBUjtBQUNBTCxNQUFJQyxHQUFKLENBQVEscUJBQVI7QUFDQUQsTUFBSUMsR0FBSixDQUFRLHNCQUFPLEtBQVAsQ0FBUjtBQUNBRCxNQUFJQyxHQUFKLENBQVFLLG1CQUFTQyxVQUFqQjtBQUNBUCxNQUFJQyxHQUFKLENBQ0UsV0FERixFQUVFTywyQkFBVUMsS0FGWixFQUdFRCwyQkFBVUUsS0FBVixDQUFnQkMsaUJBQWhCLEVBQWlDLEVBQUVDLFVBQVUsSUFBWixFQUFqQyxDQUhGO0FBS0QsQ0FYTSIsImZpbGUiOiJnbG9iYWwtbWlkZGxld2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2dnZXIgZnJvbSBcIm1vcmdhblwiO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgc3dhZ2dlclVpIGZyb20gXCJzd2FnZ2VyLXVpLWV4cHJlc3NcIjtcclxuaW1wb3J0IHN3YWdnZXJEb2N1bWVudCBmcm9tIFwiLi4vLi4vY29uZmlnL3N3YWdnZXIuanNvblwiO1xyXG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsTWlkZGxld2FyZSA9IGFwcCA9PiB7XHJcbiAgYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbiAgYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcbiAgYXBwLnVzZShjb3JzKCkpO1xyXG4gIGFwcC51c2UobG9nZ2VyKFwiZGV2XCIpKTtcclxuICBhcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUpO1xyXG4gIGFwcC51c2UoXHJcbiAgICBcIi9hcGktZG9jc1wiLFxyXG4gICAgc3dhZ2dlclVpLnNlcnZlLFxyXG4gICAgc3dhZ2dlclVpLnNldHVwKHN3YWdnZXJEb2N1bWVudCwgeyBleHBsb3JlcjogdHJ1ZSB9KVxyXG4gICk7XHJcbn07XHJcbiJdfQ==