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
    _invoice2.default.find().then(function (invoices) {
      return res.json(invoices);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlcnMvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImR1bW15SW52b2ljZXMiLCJfaWQiLCJpdGVtIiwicXR5IiwiZGF0ZSIsIkRhdGUiLCJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsIkludm9pY2UiLCJmaW5kIiwidGhlbiIsImpzb24iLCJpbnZvaWNlcyIsImNhdGNoIiwic3RhdHVzIiwiSHR0cFN0YXR1cyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImVyciIsImNyZWF0ZSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJzdHJpbmciLCJyZXF1aXJlZCIsIm51bWJlciIsImludGVnZXIiLCJkdWUiLCJ0YXgiLCJvcHRpb25hbCIsInJhdGUiLCJ2YWxpZGF0ZSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsIkJBRF9SRVFVRVNUIiwibWVzc2FnZSIsImludm9pY2UiLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsIk5PVF9GT1VORCIsImRlbGV0ZSIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIm5ldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsQ0FDcEIsRUFBRUMsS0FBSyxRQUFQLEVBQWlCQyxNQUFNLGdCQUF2QixFQUF5Q0MsS0FBSyxFQUE5QyxFQUFrREMsTUFBTSxJQUFJQyxJQUFKLEVBQXhELEVBRG9CLEVBRXBCLEVBQUVKLEtBQUssUUFBUCxFQUFpQkMsTUFBTSxnQkFBdkIsRUFBeUNDLEtBQUssRUFBOUMsRUFBa0RDLE1BQU0sSUFBSUMsSUFBSixFQUF4RCxFQUZvQixFQUdwQixFQUFFSixLQUFLLFFBQVAsRUFBaUJDLE1BQU0sY0FBdkIsRUFBdUNDLEtBQUssRUFBNUMsRUFBZ0RDLE1BQU0sSUFBSUMsSUFBSixFQUF0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O0FBQ2ZKLFVBQUlLLElBQUosQ0FBUzJCLE9BQVQ7QUFDRCxLQUhILEVBSUd6QixLQUpILENBSVM7QUFBQSxhQUFPUCxJQUFJUSxNQUFKLENBQVdDLDBCQUFXQyxxQkFBdEIsRUFBNkNMLElBQTdDLENBQWtETSxHQUFsRCxDQUFQO0FBQUEsS0FKVDtBQUtEO0FBOUVZLEMiLCJmaWxlIjoiaW52b2ljZS5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludm9pY2UgZnJvbSBcIi4uL21vZGVscy9pbnZvaWNlLm1vZGVsXCI7XHJcbmltcG9ydCBKb2kgZnJvbSBcImpvaVwiO1xyXG5pbXBvcnQgSHR0cFN0YXR1cyBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcclxuXHJcbmNvbnN0IGR1bW15SW52b2ljZXMgPSBbXHJcbiAgeyBfaWQ6IFwiMTIzNDMyXCIsIGl0ZW06IFwiQW1hem9uIFByb2R1Y3RcIiwgcXR5OiAxMCwgZGF0ZTogbmV3IERhdGUoKSB9LFxyXG4gIHsgX2lkOiBcIjEyMzQ0M1wiLCBpdGVtOiBcIkdvb2dsZSBQcm9kdWN0XCIsIHF0eTogMTQsIGRhdGU6IG5ldyBEYXRlKCkgfSxcclxuICB7IF9pZDogXCIxMjM0MjFcIiwgaXRlbTogXCJFYmF5IFByb2R1Y3RcIiwgcXR5OiAxMSwgZGF0ZTogbmV3IERhdGUoKSB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZmluZEFsbChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgSW52b2ljZS5maW5kKClcclxuICAgICAgLnRoZW4oaW52b2ljZXMgPT4gcmVzLmpzb24oaW52b2ljZXMpKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfSxcclxuICBjcmVhdGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgaXRlbTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHF0eTogSm9pLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoKVxyXG4gICAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgICBkYXRlOiBKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXHJcbiAgICAgIGR1ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICB0YXg6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICByYXRlOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKHJlcS5ib2R5LCBzY2hlbWEpO1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIEludm9pY2UuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcclxuICAgICAgICByZXMuanNvbihpbnZvaWNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gIH0sXHJcbiAgZmluZE9uZShyZXEsIHJlcykge1xyXG4gICAgbGV0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBJbnZvaWNlLmZpbmRCeUlkKGlkKVxyXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcclxuICAgICAgICBpZiAoIWludm9pY2UpIHtcclxuICAgICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORClcclxuICAgICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52b2ljZSBpZCBub3QgZm91bmRcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgZGVsZXRlKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgSW52b2ljZS5maW5kQnlJZEFuZFJlbW92ZShpZClcclxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XHJcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5OT1RfRk9VTkQpXHJcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludm9pY2UgaWQgbm90IGZvdW5kXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihpbnZvaWNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHVwZGF0ZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgaXRlbTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgIHF0eTogSm9pLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoKVxyXG4gICAgICAgIC5vcHRpb25hbCgpLFxyXG4gICAgICBkYXRlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgIGR1ZTogSm9pLmRhdGUoKS5vcHRpb25hbCgpLFxyXG4gICAgICB0YXg6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICByYXRlOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKHJlcS5ib2R5LCBzY2hlbWEpO1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIEludm9pY2UuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwgdmFsdWUsIHsgbmV3OiB0cnVlIH0pXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfVxyXG59O1xyXG4iXX0=