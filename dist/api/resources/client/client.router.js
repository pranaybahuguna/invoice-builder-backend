"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _client = require("./client.controller");

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientRouter = exports.clientRouter = _express2.default.Router();

clientRouter.route("/").post(_client2.default.create);
clientRouter.route("/").post(_client2.default.create).get(_client2.default.findAll);

clientRouter.route("/:id").get(_client2.default.findOne).delete(_client2.default.delete).put(_client2.default.update);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQucm91dGVyLmpzIl0sIm5hbWVzIjpbImNsaWVudFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJyb3V0ZSIsInBvc3QiLCJjbGllbnRDb250cm9sbGVyIiwiY3JlYXRlIiwiZ2V0IiwiZmluZEFsbCIsImZpbmRPbmUiLCJkZWxldGUiLCJwdXQiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFDTyxJQUFNQSxzQ0FBZUMsa0JBQVFDLE1BQVIsRUFBckI7O0FBRVBGLGFBQWFHLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0JDLElBQXhCLENBQTZCQyxpQkFBaUJDLE1BQTlDO0FBQ0FOLGFBQ0dHLEtBREgsQ0FDUyxHQURULEVBRUdDLElBRkgsQ0FFUUMsaUJBQWlCQyxNQUZ6QixFQUdHQyxHQUhILENBR09GLGlCQUFpQkcsT0FIeEI7O0FBS0FSLGFBQ0dHLEtBREgsQ0FDUyxNQURULEVBRUdJLEdBRkgsQ0FFT0YsaUJBQWlCSSxPQUZ4QixFQUdHQyxNQUhILENBR1VMLGlCQUFpQkssTUFIM0IsRUFJR0MsR0FKSCxDQUlPTixpQkFBaUJPLE1BSnhCIiwiZmlsZSI6ImNsaWVudC5yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgY2xpZW50Q29udHJvbGxlciBmcm9tIFwiLi9jbGllbnQuY29udHJvbGxlclwiO1xyXG5leHBvcnQgY29uc3QgY2xpZW50Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbmNsaWVudFJvdXRlci5yb3V0ZShcIi9cIikucG9zdChjbGllbnRDb250cm9sbGVyLmNyZWF0ZSk7XHJcbmNsaWVudFJvdXRlclxyXG4gIC5yb3V0ZShcIi9cIilcclxuICAucG9zdChjbGllbnRDb250cm9sbGVyLmNyZWF0ZSlcclxuICAuZ2V0KGNsaWVudENvbnRyb2xsZXIuZmluZEFsbCk7XHJcblxyXG5jbGllbnRSb3V0ZXJcclxuICAucm91dGUoXCIvOmlkXCIpXHJcbiAgLmdldChjbGllbnRDb250cm9sbGVyLmZpbmRPbmUpXHJcbiAgLmRlbGV0ZShjbGllbnRDb250cm9sbGVyLmRlbGV0ZSlcclxuICAucHV0KGNsaWVudENvbnRyb2xsZXIudXBkYXRlKTtcclxuIl19