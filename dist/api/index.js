"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _invoice = require("./resources/invoice/invoice.router");

var _client = require("./resources/client/client.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();
restRouter.use("/invoices", _invoice.invoiceRouter);
restRouter.use("/clients", _client.clientRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJpbnZvaWNlUm91dGVyIiwiY2xpZW50Um91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVPLElBQU1BLGtDQUFhQyxrQkFBUUMsTUFBUixFQUFuQjtBQUNQRixXQUFXRyxHQUFYLENBQWUsV0FBZixFQUE0QkMsc0JBQTVCO0FBQ0FKLFdBQVdHLEdBQVgsQ0FBZSxVQUFmLEVBQTJCRSxvQkFBM0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBpbnZvaWNlUm91dGVyIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5yb3V0ZXJcIjtcclxuaW1wb3J0IHsgY2xpZW50Um91dGVyIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2NsaWVudC9jbGllbnQucm91dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVzdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnJlc3RSb3V0ZXIudXNlKFwiL2ludm9pY2VzXCIsIGludm9pY2VSb3V0ZXIpO1xyXG5yZXN0Um91dGVyLnVzZShcIi9jbGllbnRzXCIsIGNsaWVudFJvdXRlcik7XHJcbiJdfQ==