"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invoice = require("../models/invoice.model");

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
        perPage = _req$query$perPage === undefined ? 10 : _req$query$perPage;

    var options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10)
    };
    _invoice2.default.paginate({}, options).then(function (invoices) {
      setTimeout(function () {}, 5000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlcnMvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImR1bW15SW52b2ljZXMiLCJfaWQiLCJpdGVtIiwicXR5IiwiZGF0ZSIsIkRhdGUiLCJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsInF1ZXJ5IiwicGFnZSIsInBlclBhZ2UiLCJvcHRpb25zIiwicGFyc2VJbnQiLCJsaW1pdCIsIkludm9pY2UiLCJwYWdpbmF0ZSIsInRoZW4iLCJzZXRUaW1lb3V0IiwianNvbiIsImludm9pY2VzIiwiY2F0Y2giLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZXJyIiwiY3JlYXRlIiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsInN0cmluZyIsInJlcXVpcmVkIiwibnVtYmVyIiwiaW50ZWdlciIsImR1ZSIsInRheCIsIm9wdGlvbmFsIiwicmF0ZSIsInZhbGlkYXRlIiwiYm9keSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiQkFEX1JFUVVFU1QiLCJtZXNzYWdlIiwiaW52b2ljZSIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiTk9UX0ZPVU5EIiwiZGVsZXRlIiwiZmluZEJ5SWRBbmRSZW1vdmUiLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwibmV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixDQUNwQixFQUFFQyxLQUFLLFFBQVAsRUFBaUJDLE1BQU0sZ0JBQXZCLEVBQXlDQyxLQUFLLEVBQTlDLEVBQWtEQyxNQUFNLElBQUlDLElBQUosRUFBeEQsRUFEb0IsRUFFcEIsRUFBRUosS0FBSyxRQUFQLEVBQWlCQyxNQUFNLGdCQUF2QixFQUF5Q0MsS0FBSyxFQUE5QyxFQUFrREMsTUFBTSxJQUFJQyxJQUFKLEVBQXhELEVBRm9CLEVBR3BCLEVBQUVKLEtB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QkFZVVQsY0FBSVcsUUFBSixDQUFhakMsSUFBSWtDLElBQWpCLEVBQXVCYixNQUF2QixDQVpWO0FBQUEsUUFZUGMsS0FaTyxrQkFZUEEsS0FaTztBQUFBLFFBWUFDLEtBWkEsa0JBWUFBLEtBWkE7O0FBYWYsUUFBSUQsU0FBU0EsTUFBTUUsT0FBbkIsRUFBNEI7QUFDMUIsYUFBT3BDLElBQUllLE1BQUosQ0FBV0MsMEJBQVdxQixXQUF0QixFQUFtQ3pCLElBQW5DLENBQXdDc0IsTUFBTUksT0FBOUMsQ0FBUDtBQUNEO0FBQ0Q5QixzQkFBUXdDLGdCQUFSLENBQXlCLEVBQUV2RCxLQUFLZ0QsRUFBUCxFQUF6QixFQUFzQ04sS0FBdEMsRUFBNkMsRUFBRWMsS0FBSyxJQUFQLEVBQTdDLEVBQ0d2QyxJQURILENBQ1EsbUJBQVc7QUFDZlYsVUFBSVksSUFBSixDQUFTMkIsT0FBVDtBQUNELEtBSEgsRUFJR3pCLEtBSkgsQ0FJUztBQUFBLGFBQU9kLElBQUllLE1BQUosQ0FBV0MsMEJBQVdDLHFCQUF0QixFQUE2Q0wsSUFBN0MsQ0FBa0RNLEdBQWxELENBQVA7QUFBQSxLQUpUO0FBS0Q7QUF0RlksQyIsImZpbGUiOiJpbnZvaWNlLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW52b2ljZSBmcm9tIFwiLi4vbW9kZWxzL2ludm9pY2UubW9kZWxcIjtcclxuaW1wb3J0IEpvaSBmcm9tIFwiam9pXCI7XHJcbmltcG9ydCBIdHRwU3RhdHVzIGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xyXG5cclxuY29uc3QgZHVtbXlJbnZvaWNlcyA9IFtcclxuICB7IF9pZDogXCIxMjM0MzJcIiwgaXRlbTogXCJBbWF6b24gUHJvZHVjdFwiLCBxdHk6IDEwLCBkYXRlOiBuZXcgRGF0ZSgpIH0sXHJcbiAgeyBfaWQ6IFwiMTIzNDQzXCIsIGl0ZW06IFwiR29vZ2xlIFByb2R1Y3RcIiwgcXR5OiAxNCwgZGF0ZTogbmV3IERhdGUoKSB9LFxyXG4gIHsgX2lkOiBcIjEyMzQyMVwiLCBpdGVtOiBcIkViYXkgUHJvZHVjdFwiLCBxdHk6IDExLCBkYXRlOiBuZXcgRGF0ZSgpIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBmaW5kQWxsKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zdCB7IHBhZ2UgPSAxLCBwZXJQYWdlID0gMTAgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHBhZ2U6IHBhcnNlSW50KHBhZ2UsIDEwKSxcclxuICAgICAgbGltaXQ6IHBhcnNlSW50KHBlclBhZ2UsIDEwKVxyXG4gICAgfTtcclxuICAgIEludm9pY2UucGFnaW5hdGUoe30sIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKGludm9pY2VzID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt9LCA1MDAwKTtcclxuICAgICAgICByZXMuanNvbihpbnZvaWNlcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9LFxyXG4gIGNyZWF0ZShyZXEsIHJlcykge1xyXG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICBpdGVtOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgcXR5OiBKb2kubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcigpXHJcbiAgICAgICAgLnJlcXVpcmVkKCksXHJcbiAgICAgIGRhdGU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgZHVlOiBKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXHJcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXHJcbiAgICAgIHJhdGU6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgSW52b2ljZS5jcmVhdGUodmFsdWUpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfSxcclxuICBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICBsZXQgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIEludm9pY2UuZmluZEJ5SWQoaWQpXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIGlmICghaW52b2ljZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuTk9UX0ZPVU5EKVxyXG4gICAgICAgICAgICAuanNvbih7IGVycjogXCJpbnZvaWNlIGlkIG5vdCBmb3VuZFwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oaW52b2ljZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBkZWxldGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBJbnZvaWNlLmZpbmRCeUlkQW5kUmVtb3ZlKGlkKVxyXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcclxuICAgICAgICBpZiAoIWludm9pY2UpIHtcclxuICAgICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORClcclxuICAgICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52b2ljZSBpZCBub3QgZm91bmRcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgdXBkYXRlKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xyXG4gICAgICBpdGVtOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgcXR5OiBKb2kubnVtYmVyKClcclxuICAgICAgICAuaW50ZWdlcigpXHJcbiAgICAgICAgLm9wdGlvbmFsKCksXHJcbiAgICAgIGRhdGU6IEpvaS5kYXRlKCkub3B0aW9uYWwoKSxcclxuICAgICAgZHVlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXHJcbiAgICAgIHJhdGU6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgSW52b2ljZS5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBpZCB9LCB2YWx1ZSwgeyBuZXc6IHRydWUgfSlcclxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XHJcbiAgICAgICAgcmVzLmpzb24oaW52b2ljZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9XHJcbn07XHJcbiJdfQ==