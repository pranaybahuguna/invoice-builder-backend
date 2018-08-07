"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _invoice = require("./resources/invoice/invoice.router");

var _client = require("./resources/client/client.router");

var _user = require("./resources/user/user.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();
restRouter.use("/invoices", _invoice.invoiceRouter);
restRouter.use("/clients", _client.clientRouter);
restRouter.use("/user", _user.userRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJpbnZvaWNlUm91dGVyIiwiY2xpZW50Um91dGVyIiwidXNlclJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxrQ0FBYUMsa0JBQVFDLE1BQVIsRUFBbkI7QUFDUEYsV0FBV0csR0FBWCxDQUFlLFdBQWYsRUFBNEJDLHNCQUE1QjtBQUNBSixXQUFXRyxHQUFYLENBQWUsVUFBZixFQUEyQkUsb0JBQTNCO0FBQ0FMLFdBQVdHLEdBQVgsQ0FBZSxPQUFmLEVBQXdCRyxnQkFBeEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBpbnZvaWNlUm91dGVyIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5yb3V0ZXJcIjtcclxuaW1wb3J0IHsgY2xpZW50Um91dGVyIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2NsaWVudC9jbGllbnQucm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZXJSb3V0ZXIgfSBmcm9tIFwiLi9yZXNvdXJjZXMvdXNlci91c2VyLnJvdXRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5yZXN0Um91dGVyLnVzZShcIi9pbnZvaWNlc1wiLCBpbnZvaWNlUm91dGVyKTtcclxucmVzdFJvdXRlci51c2UoXCIvY2xpZW50c1wiLCBjbGllbnRSb3V0ZXIpO1xyXG5yZXN0Um91dGVyLnVzZShcIi91c2VyXCIsIHVzZXJSb3V0ZXIpO1xyXG4iXX0=