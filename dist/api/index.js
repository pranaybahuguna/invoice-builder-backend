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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJpbnZvaWNlUm91dGVyIiwiY2xpZW50Um91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVPLElBQU1BLGtDQUFhQyxrQkFBUUMsTUFBUixFQUFuQjtBQUNQRixXQUFXRyxHQUFYLENBQWUsV0FBZixFQUE0QkMsc0JBQTVCO0FBQ0FKLFdBQVdHLEdBQVgsQ0FBZSxVQUFmLEVBQTJCRSxvQkFBM0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgaW52b2ljZVJvdXRlciB9IGZyb20gXCIuL3Jlc291cmNlcy9pbnZvaWNlL2ludm9pY2Uucm91dGVyXCI7XG5pbXBvcnQgeyBjbGllbnRSb3V0ZXIgfSBmcm9tIFwiLi9yZXNvdXJjZXMvY2xpZW50L2NsaWVudC5yb3V0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJlc3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xucmVzdFJvdXRlci51c2UoXCIvaW52b2ljZXNcIiwgaW52b2ljZVJvdXRlcik7XG5yZXN0Um91dGVyLnVzZShcIi9jbGllbnRzXCIsIGNsaWVudFJvdXRlcik7XG4iXX0=