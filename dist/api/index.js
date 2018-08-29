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

var _auth = require("./resources/auth/auth.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();
restRouter.use("/invoices", _invoice.invoiceRouter);
restRouter.use("/clients", _client.clientRouter);
restRouter.use("/user", _user.userRouter);
restRouter.use("/auth", _auth.authRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJpbnZvaWNlUm91dGVyIiwiY2xpZW50Um91dGVyIiwidXNlclJvdXRlciIsImF1dGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsa0NBQWFDLGtCQUFRQyxNQUFSLEVBQW5CO0FBQ1BGLFdBQVdHLEdBQVgsQ0FBZSxXQUFmLEVBQTRCQyxzQkFBNUI7QUFDQUosV0FBV0csR0FBWCxDQUFlLFVBQWYsRUFBMkJFLG9CQUEzQjtBQUNBTCxXQUFXRyxHQUFYLENBQWUsT0FBZixFQUF3QkcsZ0JBQXhCO0FBQ0FOLFdBQVdHLEdBQVgsQ0FBZSxPQUFmLEVBQXdCSSxnQkFBeEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgaW52b2ljZVJvdXRlciB9IGZyb20gXCIuL3Jlc291cmNlcy9pbnZvaWNlL2ludm9pY2Uucm91dGVyXCI7XG5pbXBvcnQgeyBjbGllbnRSb3V0ZXIgfSBmcm9tIFwiLi9yZXNvdXJjZXMvY2xpZW50L2NsaWVudC5yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZXJSb3V0ZXIgfSBmcm9tIFwiLi9yZXNvdXJjZXMvdXNlci91c2VyLnJvdXRlclwiO1xuaW1wb3J0IHsgYXV0aFJvdXRlciB9IGZyb20gXCIuL3Jlc291cmNlcy9hdXRoL2F1dGgucm91dGVyXCI7XG5cbmV4cG9ydCBjb25zdCByZXN0Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbnJlc3RSb3V0ZXIudXNlKFwiL2ludm9pY2VzXCIsIGludm9pY2VSb3V0ZXIpO1xucmVzdFJvdXRlci51c2UoXCIvY2xpZW50c1wiLCBjbGllbnRSb3V0ZXIpO1xucmVzdFJvdXRlci51c2UoXCIvdXNlclwiLCB1c2VyUm91dGVyKTtcbnJlc3RSb3V0ZXIudXNlKFwiL2F1dGhcIiwgYXV0aFJvdXRlcik7XG4iXX0=