"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _invoice = require("./invoice.model");

var _invoice2 = _interopRequireDefault(_invoice);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dummyInvoices = [{ _id: "123432", item: "Amazon Product", qty: 10, date: new Date() }, { _id: "123443", item: "Google Product", qty: 14, date: new Date() }, { _id: "123421", item: "Ebay Product", qty: 11, date: new Date() }];

exports.default = {
  findAll: function findAll(req, res, next) {
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === undefined ? 1 : _req$query$page,
        _req$query$perPage = _req$query.perPage,
        perPage = _req$query$perPage === undefined ? 10 : _req$query$perPage,
        filter = _req$query.filter,
        sortField = _req$query.sortField,
        sortDir = _req$query.sortDir;

    var options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      populate: "client"
    };
    var query = {};
    if (filter) {
      query.item = {
        $regex: filter
      };
    }
    if (sortField && sortDir) {
      options.sort = (0, _defineProperty3.default)({}, sortField, sortDir);
    }

    _invoice2.default.paginate(query, options).then(function (invoices) {
      res.json(invoices);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  create: function create(req, res) {
    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().required(),
      qty: _joi2.default.number().integer().required(),
      date: _joi2.default.date().required(),
      due: _joi2.default.date().required(),
      client: _joi2.default.string().required(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.number().optional()
    });

    var _Joi$validate = _joi2.default.validate(req.body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message);
    }
    _invoice2.default.create(value).then(function (invoice) {
      res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _invoice2.default.findById(id).then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "invoice id not found" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  delete: function _delete(req, res) {
    var id = req.params.id;

    _invoice2.default.findByIdAndRemove(id).then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "invoice id not found" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().optional(),
      qty: _joi2.default.number().integer().optional(),
      date: _joi2.default.date().optional(),
      due: _joi2.default.date().optional(),
      client: _joi2.default.string().optional(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.number().optional()
    });

    var _Joi$validate2 = _joi2.default.validate(req.body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

    if (error && error.details) {
      return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message);
    }
    _invoice2.default.findOneAndUpdate({ _id: id }, value, { new: true }).then(function (invoice) {
      res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImR1bW15SW52b2ljZXMiLCJfaWQiLCJpdGVtIiwicXR5IiwiZGF0ZSIsIkRhdGUiLCJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsInF1ZXJ5IiwicGFnZSIsInBlclBhZ2UiLCJmaWx0ZXIiLCJzb3J0RmllbGQiLCJzb3J0RGlyIiwib3B0aW9ucyIsInBhcnNlSW50IiwibGltaXQiLCJwb3B1bGF0ZSIsIiRyZWdleCIsInNvcnQiLCJJbnZvaWNlIiwicGFnaW5hdGUiLCJ0aGVuIiwianNvbiIsImludm9pY2VzIiwiY2F0Y2giLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZXJyIiwiY3JlYXRlIiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsInN0cmluZyIsInJlcXVpcmVkIiwibnVtYmVyIiwiaW50ZWdlciIsImR1ZSIsImNsaWVudCIsInRheCIsIm9wdGlvbmFsIiwicmF0ZSIsInZhbGlkYXRlIiwiYm9keSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiQkFEX1JFUVVFU1QiLCJtZXNzYWdlIiwiaW52b2ljZSIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiTk9UX0ZPVU5EIiwiZGVsZXRlIiwiZmluZEJ5SWRBbmRSZW1vdmUiLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwibmV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsQ0FDcEIsRUFBRUMsS0FBSyxRQUFQLEVBQWlCQyxNQUFNLGdCQUF2QixFQUF5Q0MsS0FBSyxFQUE5QyxFQUFrREMsTUFBTSxJQUFJQyxJQUFKLEVBQXhELEVBRG9CLEVBRXBCLEVBQUVKLEtBQUssUUFBUCxFQUFpQkMsTUFBTSxnQkFBdkIs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LEtBSlQ7QUFLRDtBQXBHWSxDIiwiZmlsZSI6Imludm9pY2UuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnZvaWNlIGZyb20gXCIuL2ludm9pY2UubW9kZWxcIjtcclxuaW1wb3J0IEpvaSBmcm9tIFwiam9pXCI7XHJcbmltcG9ydCBIdHRwU3RhdHVzIGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xyXG5cclxuY29uc3QgZHVtbXlJbnZvaWNlcyA9IFtcclxuICB7IF9pZDogXCIxMjM0MzJcIiwgaXRlbTogXCJBbWF6b24gUHJvZHVjdFwiLCBxdHk6IDEwLCBkYXRlOiBuZXcgRGF0ZSgpIH0sXHJcbiAgeyBfaWQ6IFwiMTIzNDQzXCIsIGl0ZW06IFwiR29vZ2xlIFByb2R1Y3RcIiwgcXR5OiAxNCwgZGF0ZTogbmV3IERhdGUoKSB9LFxyXG4gIHsgX2lkOiBcIjEyMzQyMVwiLCBpdGVtOiBcIkViYXkgUHJvZHVjdFwiLCBxdHk6IDExLCBkYXRlOiBuZXcgRGF0ZSgpIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBmaW5kQWxsKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zdCB7IHBhZ2UgPSAxLCBwZXJQYWdlID0gMTAsIGZpbHRlciwgc29ydEZpZWxkLCBzb3J0RGlyIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBwYWdlOiBwYXJzZUludChwYWdlLCAxMCksXHJcbiAgICAgIGxpbWl0OiBwYXJzZUludChwZXJQYWdlLCAxMCksXHJcbiAgICAgIHBvcHVsYXRlOiBcImNsaWVudFwiXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcXVlcnkgPSB7fTtcclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgcXVlcnkuaXRlbSA9IHtcclxuICAgICAgICAkcmVnZXg6IGZpbHRlclxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKHNvcnRGaWVsZCAmJiBzb3J0RGlyKSB7XHJcbiAgICAgIG9wdGlvbnMuc29ydCA9IHtcclxuICAgICAgICBbc29ydEZpZWxkXTogc29ydERpclxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIEludm9pY2UucGFnaW5hdGUocXVlcnksIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKGludm9pY2VzID0+IHtcclxuICAgICAgICByZXMuanNvbihpbnZvaWNlcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9LFxyXG4gIGNyZWF0ZShyZXEsIHJlcykge1xyXG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICBpdGVtOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgcXR5OiBKb2kubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcigpXHJcbiAgICAgICAgLnJlcXVpcmVkKCksXHJcbiAgICAgIGRhdGU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgZHVlOiBKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXHJcbiAgICAgIGNsaWVudDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXHJcbiAgICAgIHJhdGU6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgSW52b2ljZS5jcmVhdGUodmFsdWUpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfSxcclxuICBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICBsZXQgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIEludm9pY2UuZmluZEJ5SWQoaWQpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIGlmICghaW52b2ljZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuTk9UX0ZPVU5EKVxyXG4gICAgICAgICAgICAuanNvbih7IGVycjogXCJpbnZvaWNlIGlkIG5vdCBmb3VuZFwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oaW52b2ljZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBkZWxldGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBJbnZvaWNlLmZpbmRCeUlkQW5kUmVtb3ZlKGlkKVxyXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcclxuICAgICAgICBpZiAoIWludm9pY2UpIHtcclxuICAgICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORClcclxuICAgICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52b2ljZSBpZCBub3QgZm91bmRcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdXBkYXRlKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICBpdGVtOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgcXR5OiBKb2kubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcigpXHJcbiAgICAgICAgLm9wdGlvbmFsKCksXHJcbiAgICAgIGRhdGU6IEpvaS5kYXRlKCkub3B0aW9uYWwoKSxcclxuICAgICAgZHVlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgIGNsaWVudDogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXHJcbiAgICAgIHJhdGU6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgSW52b2ljZS5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBpZCB9LCB2YWx1ZSwgeyBuZXc6IHRydWUgfSlcclxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XHJcbiAgICAgICAgcmVzLmpzb24oaW52b2ljZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9XHJcbn07XHJcbiJdfQ==