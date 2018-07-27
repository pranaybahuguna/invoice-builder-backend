"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _routes = require("./config/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect("mongodb://localhost:27017/invoice-builder");

var app = (0, _express2.default)();
var PORT = 3000;

app.use(_express2.default.json());
app.use((0, _morgan2.default)("common"));
app.use("/api", _routes.router);
app.use(function (req, res, next) {
  var error = new Error("Invalid Route");
  error.status = 404;
  next(error);
});

app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});

app.get("/", function (req, res) {
  res.json({
    msg: "Welcome to invoice builder backend"
  });
});

app.get("/invoices", function (req, res) {
  res.json(invoices);
});

app.listen(PORT, function () {
  console.log("Server is running at PORT " + PORT);
});
//# sourceMappingURL=app.js.map