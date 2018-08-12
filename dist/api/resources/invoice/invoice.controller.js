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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImR1bW15SW52b2ljZXMiLCJfaWQiLCJpdGVtIiwicXR5IiwiZGF0ZSIsIkRhdGUiLCJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsInF1ZXJ5IiwicGFnZSIsInBlclBhZ2UiLCJmaWx0ZXIiLCJzb3J0RmllbGQiLCJzb3J0RGlyIiwib3B0aW9ucyIsInBhcnNlSW50IiwibGltaXQiLCJwb3B1bGF0ZSIsIiRyZWdleCIsInNvcnQiLCJJbnZvaWNlIiwicGFnaW5hdGUiLCJ0aGVuIiwianNvbiIsImludm9pY2VzIiwiY2F0Y2giLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZXJyIiwiY3JlYXRlIiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsInN0cmluZyIsInJlcXVpcmVkIiwibnVtYmVyIiwiaW50ZWdlciIsImR1ZSIsImNsaWVudCIsInRheCIsIm9wdGlvbmFsIiwicmF0ZSIsInZhbGlkYXRlIiwiYm9keSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiQkFEX1JFUVVFU1QiLCJtZXNzYWdlIiwiaW52b2ljZSIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiTk9UX0ZPVU5EIiwiZGVsZXRlIiwiZmluZEJ5SWRBbmRSZW1vdmUiLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwibmV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsQ0FDcEIsRUFBRUMsS0FBSyxRQUFQLEVBQWlCQyxNQUFNLGdCQUF2QixFQUF5Q0MsS0FBSyxFQUE5QyxFQUFrREMsTUFBTSxJQUFJQyxJQUFKLEVBQXhELEVBRG9CLEVBRXBCLEVBQUVKLEtBQUssUUFBUCxFQUFpQkMsTUFBTSxnQkFBdkIs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LEtBSlQ7QUFLRDtBQXBHWSxDIiwiZmlsZSI6Imludm9pY2UuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnZvaWNlIGZyb20gXCIuL2ludm9pY2UubW9kZWxcIjtcbmltcG9ydCBKb2kgZnJvbSBcImpvaVwiO1xuaW1wb3J0IEh0dHBTdGF0dXMgZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmNvbnN0IGR1bW15SW52b2ljZXMgPSBbXG4gIHsgX2lkOiBcIjEyMzQzMlwiLCBpdGVtOiBcIkFtYXpvbiBQcm9kdWN0XCIsIHF0eTogMTAsIGRhdGU6IG5ldyBEYXRlKCkgfSxcbiAgeyBfaWQ6IFwiMTIzNDQzXCIsIGl0ZW06IFwiR29vZ2xlIFByb2R1Y3RcIiwgcXR5OiAxNCwgZGF0ZTogbmV3IERhdGUoKSB9LFxuICB7IF9pZDogXCIxMjM0MjFcIiwgaXRlbTogXCJFYmF5IFByb2R1Y3RcIiwgcXR5OiAxMSwgZGF0ZTogbmV3IERhdGUoKSB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpbmRBbGwocmVxLCByZXMsIG5leHQpIHtcbiAgICBjb25zdCB7IHBhZ2UgPSAxLCBwZXJQYWdlID0gMTAsIGZpbHRlciwgc29ydEZpZWxkLCBzb3J0RGlyIH0gPSByZXEucXVlcnk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHBhZ2U6IHBhcnNlSW50KHBhZ2UsIDEwKSxcbiAgICAgIGxpbWl0OiBwYXJzZUludChwZXJQYWdlLCAxMCksXG4gICAgICBwb3B1bGF0ZTogXCJjbGllbnRcIlxuICAgIH07XG4gICAgY29uc3QgcXVlcnkgPSB7fTtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBxdWVyeS5pdGVtID0ge1xuICAgICAgICAkcmVnZXg6IGZpbHRlclxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNvcnRGaWVsZCAmJiBzb3J0RGlyKSB7XG4gICAgICBvcHRpb25zLnNvcnQgPSB7XG4gICAgICAgIFtzb3J0RmllbGRdOiBzb3J0RGlyXG4gICAgICB9O1xuICAgIH1cblxuICAgIEludm9pY2UucGFnaW5hdGUocXVlcnksIG9wdGlvbnMpXG4gICAgICAudGhlbihpbnZvaWNlcyA9PiB7XG4gICAgICAgIHJlcy5qc29uKGludm9pY2VzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XG4gIH0sXG4gIGNyZWF0ZShyZXEsIHJlcykge1xuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgIGl0ZW06IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgcXR5OiBKb2kubnVtYmVyKClcbiAgICAgICAgLmludGVnZXIoKVxuICAgICAgICAucmVxdWlyZWQoKSxcbiAgICAgIGRhdGU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcbiAgICAgIGR1ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxuICAgICAgY2xpZW50OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXG4gICAgICByYXRlOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKVxuICAgIH0pO1xuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICAgIEludm9pY2UuY3JlYXRlKHZhbHVlKVxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XG4gICAgICAgIHJlcy5qc29uKGludm9pY2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcbiAgfSxcbiAgZmluZE9uZShyZXEsIHJlcykge1xuICAgIGxldCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIEludm9pY2UuZmluZEJ5SWQoaWQpXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORClcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludm9pY2UgaWQgbm90IGZvdW5kXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XG4gICAgICB9KTtcbiAgfSxcbiAgZGVsZXRlKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICBJbnZvaWNlLmZpbmRCeUlkQW5kUmVtb3ZlKGlkKVxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XG4gICAgICAgIGlmICghaW52b2ljZSkge1xuICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5OT1RfRk9VTkQpXG4gICAgICAgICAgICAuanNvbih7IGVycjogXCJpbnZvaWNlIGlkIG5vdCBmb3VuZFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbihpbnZvaWNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xuICAgICAgfSk7XG4gIH0sXG4gIHVwZGF0ZShyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgaXRlbTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICBxdHk6IEpvaS5udW1iZXIoKVxuICAgICAgICAuaW50ZWdlcigpXG4gICAgICAgIC5vcHRpb25hbCgpLFxuICAgICAgZGF0ZTogSm9pLmRhdGUoKS5vcHRpb25hbCgpLFxuICAgICAgZHVlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXG4gICAgICBjbGllbnQ6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgdGF4OiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcbiAgICAgIHJhdGU6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpXG4gICAgfSk7XG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IEpvaS52YWxpZGF0ZShyZXEuYm9keSwgc2NoZW1hKTtcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gICAgSW52b2ljZS5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBpZCB9LCB2YWx1ZSwgeyBuZXc6IHRydWUgfSlcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xuICAgICAgICByZXMuanNvbihpbnZvaWNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XG4gIH1cbn07XG4iXX0=