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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJpbnZvaWNlUm91dGVyIiwiY2xpZW50Um91dGVyIiwidXNlclJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxrQ0FBYUMsa0JBQVFDLE1BQVIsRUFBbkI7QUFDUEYsV0FBV0csR0FBWCxDQUFlLFdBQWYsRUFBNEJDLHNCQUE1QjtBQUNBSixXQUFXRyxHQUFYLENBQWUsVUFBZixFQUEyQkUsb0JBQTNCO0FBQ0FMLFdBQVdHLEdBQVgsQ0FBZSxPQUFmLEVBQXdCRyxnQkFBeEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgaW52b2ljZVJvdXRlciB9IGZyb20gXCIuL3Jlc291cmNlcy9pbnZvaWNlL2ludm9pY2Uucm91dGVyXCI7XG5pbXBvcnQgeyBjbGllbnRSb3V0ZXIgfSBmcm9tIFwiLi9yZXNvdXJjZXMvY2xpZW50L2NsaWVudC5yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZXJSb3V0ZXIgfSBmcm9tIFwiLi9yZXNvdXJjZXMvdXNlci91c2VyLnJvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgcmVzdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5yZXN0Um91dGVyLnVzZShcIi9pbnZvaWNlc1wiLCBpbnZvaWNlUm91dGVyKTtcbnJlc3RSb3V0ZXIudXNlKFwiL2NsaWVudHNcIiwgY2xpZW50Um91dGVyKTtcbnJlc3RSb3V0ZXIudXNlKFwiL3VzZXJcIiwgdXNlclJvdXRlcik7XG4iXX0=