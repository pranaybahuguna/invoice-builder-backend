"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _invoice = require("../api/controllers/invoice.controller");

var _invoice2 = _interopRequireDefault(_invoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = exports.router = _express2.default.Router();

//Invoices
router.get("/invoices", _invoice2.default.findAll);
router.get("/invoices/:id", _invoice2.default.findOne);
router.delete("/invoices/:id", _invoice2.default.delete);
router.put("/invoices/:id", _invoice2.default.update);
router.post("/invoices", _invoice2.default.create);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvcm91dGVzLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJnZXQiLCJpbnZvaWNlQ29udHJvbGxlciIsImZpbmRBbGwiLCJmaW5kT25lIiwiZGVsZXRlIiwicHV0IiwidXBkYXRlIiwicG9zdCIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLDBCQUFTQyxrQkFBUUMsTUFBUixFQUFmOztBQUVQO0FBQ0FGLE9BQU9HLEdBQVAsQ0FBVyxXQUFYLEVBQXdCQyxrQkFBa0JDLE9BQTFDO0FBQ0FMLE9BQU9HLEdBQVAsQ0FBVyxlQUFYLEVBQTRCQyxrQkFBa0JFLE9BQTlDO0FBQ0FOLE9BQU9PLE1BQVAsQ0FBYyxlQUFkLEVBQStCSCxrQkFBa0JHLE1BQWpEO0FBQ0FQLE9BQU9RLEdBQVAsQ0FBVyxlQUFYLEVBQTRCSixrQkFBa0JLLE1BQTlDO0FBQ0FULE9BQU9VLElBQVAsQ0FBWSxXQUFaLEVBQXlCTixrQkFBa0JPLE1BQTNDIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgaW52b2ljZUNvbnRyb2xsZXIgZnJvbSBcIi4uL2FwaS9jb250cm9sbGVycy9pbnZvaWNlLmNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8vSW52b2ljZXNcbnJvdXRlci5nZXQoXCIvaW52b2ljZXNcIiwgaW52b2ljZUNvbnRyb2xsZXIuZmluZEFsbCk7XG5yb3V0ZXIuZ2V0KFwiL2ludm9pY2VzLzppZFwiLCBpbnZvaWNlQ29udHJvbGxlci5maW5kT25lKTtcbnJvdXRlci5kZWxldGUoXCIvaW52b2ljZXMvOmlkXCIsIGludm9pY2VDb250cm9sbGVyLmRlbGV0ZSk7XG5yb3V0ZXIucHV0KFwiL2ludm9pY2VzLzppZFwiLCBpbnZvaWNlQ29udHJvbGxlci51cGRhdGUpO1xucm91dGVyLnBvc3QoXCIvaW52b2ljZXNcIiwgaW52b2ljZUNvbnRyb2xsZXIuY3JlYXRlKTtcbiJdfQ==