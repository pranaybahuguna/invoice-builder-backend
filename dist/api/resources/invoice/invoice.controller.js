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
      populate: "client"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImR1bW15SW52b2ljZXMiLCJfaWQiLCJpdGVtIiwicXR5IiwiZGF0ZSIsIkRhdGUiLCJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsInF1ZXJ5IiwicGFnZSIsInBlclBhZ2UiLCJmaWx0ZXIiLCJzb3J0RmllbGQiLCJzb3J0RGlyIiwib3B0aW9ucyIsInBhcnNlSW50IiwibGltaXQiLCJwb3B1bGF0ZSIsIiRyZWdleCIsInNvcnQiLCJJbnZvaWNlIiwicGFnaW5hdGUiLCJ0aGVuIiwianNvbiIsImludm9pY2VzIiwiY2F0Y2giLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZXJyIiwiY3JlYXRlIiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsInN0cmluZyIsInJlcXVpcmVkIiwibnVtYmVyIiwiaW50ZWdlciIsImR1ZSIsImNsaWVudCIsInRheCIsIm9wdGlvbmFsIiwicmF0ZSIsInZhbGlkYXRlIiwiYm9keSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiQkFEX1JFUVVFU1QiLCJtZXNzYWdlIiwiaW52b2ljZSIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiTk9UX0ZPVU5EIiwiZGVsZXRlIiwiZmluZEJ5SWRBbmRSZW1vdmUiLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwibmV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLENBQ3BCLEVBQUVDLEtBQUssUUFBUCxFQUFpQkMsTUFBTSxnQkFBdkIsRUFBeUNDLEtBQUssRUFBOUMsRUFBa0RDLE1BQU0sSUFBSUMsSUFBSixFQUF4RCxFQURvQixFQUVwQixFQUFFSixLQUFLLFFBQVAsRUFBaUJDLE1BQU0sZ0JBQXZCLEVB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QUpUO0FBS0Q7QUFwR1ksQyIsImZpbGUiOiJpbnZvaWNlLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW52b2ljZSBmcm9tIFwiLi9pbnZvaWNlLm1vZGVsXCI7XHJcbmltcG9ydCBKb2kgZnJvbSBcImpvaVwiO1xyXG5pbXBvcnQgSHR0cFN0YXR1cyBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcclxuXHJcbmNvbnN0IGR1bW15SW52b2ljZXMgPSBbXHJcbiAgeyBfaWQ6IFwiMTIzNDMyXCIsIGl0ZW06IFwiQW1hem9uIFByb2R1Y3RcIiwgcXR5OiAxMCwgZGF0ZTogbmV3IERhdGUoKSB9LFxyXG4gIHsgX2lkOiBcIjEyMzQ0M1wiLCBpdGVtOiBcIkdvb2dsZSBQcm9kdWN0XCIsIHF0eTogMTQsIGRhdGU6IG5ldyBEYXRlKCkgfSxcclxuICB7IF9pZDogXCIxMjM0MjFcIiwgaXRlbTogXCJFYmF5IFByb2R1Y3RcIiwgcXR5OiAxMSwgZGF0ZTogbmV3IERhdGUoKSB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZmluZEFsbChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgY29uc3QgeyBwYWdlID0gMSwgcGVyUGFnZSA9IDEwLCBmaWx0ZXIsIHNvcnRGaWVsZCwgc29ydERpciB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgcGFnZTogcGFyc2VJbnQocGFnZSwgMTApLFxyXG4gICAgICBsaW1pdDogcGFyc2VJbnQocGVyUGFnZSwgMTApLFxyXG4gICAgICBwb3B1bGF0ZTogXCJjbGllbnRcIlxyXG4gICAgfTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0ge307XHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIHF1ZXJ5Lml0ZW0gPSB7XHJcbiAgICAgICAgJHJlZ2V4OiBmaWx0ZXJcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmIChzb3J0RmllbGQgJiYgc29ydERpcikge1xyXG4gICAgICBvcHRpb25zLnNvcnQgPSB7XHJcbiAgICAgICAgW3NvcnRGaWVsZF06IHNvcnREaXJcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBJbnZvaWNlLnBhZ2luYXRlKHF1ZXJ5LCBvcHRpb25zKVxyXG4gICAgICAudGhlbihpbnZvaWNlcyA9PiB7XHJcbiAgICAgICAgcmVzLmpzb24oaW52b2ljZXMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfSxcclxuICBjcmVhdGUocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgaXRlbTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHF0eTogSm9pLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoKVxyXG4gICAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgICBkYXRlOiBKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXHJcbiAgICAgIGR1ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBjbGllbnQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICB0YXg6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICByYXRlOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKHJlcS5ib2R5LCBzY2hlbWEpO1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIEludm9pY2UuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcclxuICAgICAgICByZXMuanNvbihpbnZvaWNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gIH0sXHJcbiAgZmluZE9uZShyZXEsIHJlcykge1xyXG4gICAgbGV0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBJbnZvaWNlLmZpbmRCeUlkKGlkKVxyXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcclxuICAgICAgICBpZiAoIWludm9pY2UpIHtcclxuICAgICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORClcclxuICAgICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52b2ljZSBpZCBub3QgZm91bmRcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgZGVsZXRlKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgSW52b2ljZS5maW5kQnlJZEFuZFJlbW92ZShpZClcclxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XHJcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5OT1RfRk9VTkQpXHJcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludm9pY2UgaWQgbm90IGZvdW5kXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihpbnZvaWNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHVwZGF0ZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgaXRlbTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgIHF0eTogSm9pLm51bWJlcigpXHJcbiAgICAgICAgLmludGVnZXIoKVxyXG4gICAgICAgIC5vcHRpb25hbCgpLFxyXG4gICAgICBkYXRlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgIGR1ZTogSm9pLmRhdGUoKS5vcHRpb25hbCgpLFxyXG4gICAgICBjbGllbnQ6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgICB0YXg6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICByYXRlOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKHJlcS5ib2R5LCBzY2hlbWEpO1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIEludm9pY2UuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwgdmFsdWUsIHsgbmV3OiB0cnVlIH0pXHJcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xyXG4gICAgICAgIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfVxyXG59O1xyXG4iXX0=