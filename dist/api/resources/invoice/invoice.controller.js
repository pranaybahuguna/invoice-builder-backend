"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invoice = require("./invoice.model");

var _invoice2 = _interopRequireDefault(_invoice);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      sort: {
        date: "desc"
      }
    };
    var query = {};
    if (filter) {
      query.item = {
        $regex: filter
      };
    }
    if (sortField && sortDir) {
      options.sort = _defineProperty({}, sortField, sortDir);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImR1bW15SW52b2ljZXMiLCJfaWQiLCJpdGVtIiwicXR5IiwiZGF0ZSIsIkRhdGUiLCJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsInF1ZXJ5IiwicGFnZSIsInBlclBhZ2UiLCJmaWx0ZXIiLCJzb3J0RmllbGQiLCJzb3J0RGlyIiwib3B0aW9ucyIsInBhcnNlSW50IiwibGltaXQiLCJzb3J0IiwiJHJlZ2V4IiwiSW52b2ljZSIsInBhZ2luYXRlIiwidGhlbiIsImpzb24iLCJpbnZvaWNlcyIsImNhdGNoIiwic3RhdHVzIiwiSHR0cFN0YXR1cyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImVyciIsImNyZWF0ZSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJzdHJpbmciLCJyZXF1aXJlZCIsIm51bWJlciIsImludGVnZXIiLCJkdWUiLCJ0YXgiLCJvcHRpb25hbCIsInJhdGUiLCJ2YWxpZGF0ZSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsIkJBRF9SRVFVRVNUIiwibWVzc2FnZSIsImludm9pY2UiLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsIk5PVF9GT1VORCIsImRlbGV0ZSIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIm5ldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixDQUNwQixFQUFFQyxLQUFLLFFBQVAsRUFBaUJDLE1BQU0sZ0JBQXZCLEVBQXlDQyxLQUFLLEVBQTlDLEVBQWtEQyxNQUFNLElBQUlDLElBQUosRUFBeEQsRUFEb0IsRUFFcEIsRUFBRUosS0FBSyxRQUFQLEVBQWlCQyxNQUFNLGdCQUF2QixFQUF5Q0MsS0FBSyxFQUE5QyxFQUFr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Li9pbnZvaWNlLm1vZGVsXCI7XG5pbXBvcnQgSm9pIGZyb20gXCJqb2lcIjtcbmltcG9ydCBIdHRwU3RhdHVzIGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5jb25zdCBkdW1teUludm9pY2VzID0gW1xuICB7IF9pZDogXCIxMjM0MzJcIiwgaXRlbTogXCJBbWF6b24gUHJvZHVjdFwiLCBxdHk6IDEwLCBkYXRlOiBuZXcgRGF0ZSgpIH0sXG4gIHsgX2lkOiBcIjEyMzQ0M1wiLCBpdGVtOiBcIkdvb2dsZSBQcm9kdWN0XCIsIHF0eTogMTQsIGRhdGU6IG5ldyBEYXRlKCkgfSxcbiAgeyBfaWQ6IFwiMTIzNDIxXCIsIGl0ZW06IFwiRWJheSBQcm9kdWN0XCIsIHF0eTogMTEsIGRhdGU6IG5ldyBEYXRlKCkgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaW5kQWxsKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgY29uc3QgeyBwYWdlID0gMSwgcGVyUGFnZSA9IDEwLCBmaWx0ZXIsIHNvcnRGaWVsZCwgc29ydERpciB9ID0gcmVxLnF1ZXJ5O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBwYWdlOiBwYXJzZUludChwYWdlLCAxMCksXG4gICAgICBsaW1pdDogcGFyc2VJbnQocGVyUGFnZSwgMTApLFxuICAgICAgc29ydDoge1xuICAgICAgICBkYXRlOiBcImRlc2NcIlxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcXVlcnkgPSB7fTtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBxdWVyeS5pdGVtID0ge1xuICAgICAgICAkcmVnZXg6IGZpbHRlclxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNvcnRGaWVsZCAmJiBzb3J0RGlyKSB7XG4gICAgICBvcHRpb25zLnNvcnQgPSB7XG4gICAgICAgIFtzb3J0RmllbGRdOiBzb3J0RGlyXG4gICAgICB9O1xuICAgIH1cblxuICAgIEludm9pY2UucGFnaW5hdGUocXVlcnksIG9wdGlvbnMpXG4gICAgICAudGhlbihpbnZvaWNlcyA9PiB7XG4gICAgICAgIHJlcy5qc29uKGludm9pY2VzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XG4gIH0sXG4gIGNyZWF0ZShyZXEsIHJlcykge1xuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgIGl0ZW06IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgcXR5OiBKb2kubnVtYmVyKClcbiAgICAgICAgLmludGVnZXIoKVxuICAgICAgICAucmVxdWlyZWQoKSxcbiAgICAgIGRhdGU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcbiAgICAgIGR1ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxuICAgICAgdGF4OiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcbiAgICAgIHJhdGU6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpXG4gICAgfSk7XG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IEpvaS52YWxpZGF0ZShyZXEuYm9keSwgc2NoZW1hKTtcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gICAgSW52b2ljZS5jcmVhdGUodmFsdWUpXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcbiAgICAgICAgcmVzLmpzb24oaW52b2ljZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xuICB9LFxuICBmaW5kT25lKHJlcSwgcmVzKSB7XG4gICAgbGV0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgSW52b2ljZS5maW5kQnlJZChpZClcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xuICAgICAgICBpZiAoIWludm9pY2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuTk9UX0ZPVU5EKVxuICAgICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52b2ljZSBpZCBub3QgZm91bmRcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oaW52b2ljZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKTtcbiAgICAgIH0pO1xuICB9LFxuICBkZWxldGUocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIEludm9pY2UuZmluZEJ5SWRBbmRSZW1vdmUoaWQpXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORClcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludm9pY2UgaWQgbm90IGZvdW5kXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XG4gICAgICB9KTtcbiAgfSxcbiAgdXBkYXRlKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICBpdGVtOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIHF0eTogSm9pLm51bWJlcigpXG4gICAgICAgIC5pbnRlZ2VyKClcbiAgICAgICAgLm9wdGlvbmFsKCksXG4gICAgICBkYXRlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXG4gICAgICBkdWU6IEpvaS5kYXRlKCkub3B0aW9uYWwoKSxcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXG4gICAgICByYXRlOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKVxuICAgIH0pO1xuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICAgIEludm9pY2UuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwgdmFsdWUsIHsgbmV3OiB0cnVlIH0pXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcbiAgICAgICAgcmVzLmpzb24oaW52b2ljZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xuICB9XG59O1xuIl19