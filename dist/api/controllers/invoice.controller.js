"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invoice = require("../models/invoice.model");

var _invoice2 = _interopRequireDefault(_invoice);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var invoices = [{ _id: "123432", item: "Amazon Product", qty: 10, date: new Date() }, { _id: "123443", item: "Google Product", qty: 14, date: new Date() }, { _id: "123421", item: "Ebay Product", qty: 11, date: new Date() }];

exports.default = {
  findAll: function findAll(req, res, next) {
    res.json(invoices);
  },
  create: function create(req, res) {
    var _req$body = req.body,
        item = _req$body.item,
        qty = _req$body.qty,
        date = _req$body.date,
        due = _req$body.due,
        tax = _req$body.tax,
        rate = _req$body.rate;

    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().required(),
      qty: _joi2.default.number().integer().required(),
      date: _joi2.default.date().required(),
      due: _joi2.default.date().required(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.number().optional()
    });

    var _Joi$validate = _joi2.default.validate(req.body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return res.status(400).json(error.message);
    }
    _invoice2.default.create(value).then(function (invoice) {
      res.json(invoice);
    }).catch(function (err) {
      return res.status(500).json(err);
    });
  }
};
//# sourceMappingURL=invoice.controller.js.map