"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _invoice = require("./invoice.model");

var _invoice2 = _interopRequireDefault(_invoice);

var _invoice3 = require("./invoice.service");

var _invoice4 = _interopRequireDefault(_invoice3);

var _user = require("../user/user.service");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    console.log(options);
    _invoice2.default.paginate(query, options).then(function (invoices) {
      return res.json(invoices);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  create: function create(req, res, next) {
    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().required(),
      date: _joi2.default.date().required(),
      due: _joi2.default.date().required(),
      client: _joi2.default.string().required(),
      qty: _joi2.default.number().integer().required(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.number().optional()
    });

    var _Joi$validate = _joi2.default.validate(req.body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error);
    }
    _invoice2.default.create(value).then(function (invoice) {
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _invoice2.default.findById(id).populate("client").then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "Could not find any invoice" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  delete: function _delete(req, res) {
    var id = req.params.id;

    _invoice2.default.findByIdAndRemove(id).then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "Could not delete any invoice" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().optional(),
      date: _joi2.default.date().optional(),
      due: _joi2.default.date().optional(),
      qty: _joi2.default.number().integer().optional(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.number().optional(),
      client: _joi2.default.string().optional()
    });

    var _Joi$validate2 = _joi2.default.validate(req.body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

    if (error && error.details) {
      return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error);
    }
    _invoice2.default.findOneAndUpdate({ _id: id }, value, { new: true }).then(function (invoice) {
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  download: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var id, invoice, _invoiceService$getTo, subTotal, total, user, templateBody, html;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              id = req.params.id;
              _context.next = 4;
              return _invoice2.default.findById(id).populate("client");

            case 4:
              invoice = _context.sent;

              if (invoice) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes.NOT_FOUND).send({ err: "could not find any invice" }));

            case 7:
              _invoiceService$getTo = _invoice4.default.getTotal(invoice), subTotal = _invoiceService$getTo.subTotal, total = _invoiceService$getTo.total;
              user = _user2.default.getUser(req.currentUser);
              templateBody = _invoice4.default.getTemplateBody(invoice, subTotal, total, user);
              html = _invoice4.default.getInvoiceTemplate(templateBody);

              res.pdfFromHTML({
                filename: invoice.item + ".pdf",
                htmlContent: html
              });
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);

              console.error(_context.t0);
              return _context.abrupt("return", res.status(500).send(_context.t0));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 14]]);
    }));

    function download(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return download;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwicXVlcnkiLCJwYWdlIiwicGVyUGFnZSIsImZpbHRlciIsInNvcnRGaWVsZCIsInNvcnREaXIiLCJvcHRpb25zIiwicGFyc2VJbnQiLCJsaW1pdCIsInBvcHVsYXRlIiwiaXRlbSIsIiRyZWdleCIsInNvcnQiLCJjb25zb2xlIiwibG9nIiwiSW52b2ljZSIsInBhZ2luYXRlIiwidGhlbiIsImpzb24iLCJpbnZvaWNlcyIsImNhdGNoIiwic3RhdHVzIiwiSHR0cFN0YXR1cyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImVyciIsImNyZWF0ZSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJzdHJpbmciLCJyZXF1aXJlZCIsImRhdGUiLCJkdWUiLCJjbGllbnQiLCJxdHkiLCJudW1iZXIiLCJpbnRlZ2VyIiwidGF4Iiwib3B0aW9uYWwiLCJyYXRlIiwidmFsaWRhdGUiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJCQURfUkVRVUVTVCIsImludm9pY2UiLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsIk5PVF9GT1VORCIsImRlbGV0ZSIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIm5ldyIsImRvd25sb2FkIiwic2VuZCIsImludm9pY2VTZXJ2aWNlIiwiZ2V0VG90YWwiLCJzdWJUb3RhbCIsInRvdGFsIiwidXNlciIsInVzZXJTZXJ2aWNlIiwiZ2V0VXNlciIsImN1cnJlbnRVc2VyIiwidGVtcGxhdGVCb2R5IiwiZ2V0VGVtcGxhdGVCb2R5IiwiaHRtbCIsImdldEludm9pY2VUZW1wbGF0ZSIsInBkZkZyb21IVE1MIiwiZmlsZW5hbWUiLCJodG1sQ29udGVudCJdLCJtYXBwaW5n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QUE7QUFBQSxDIiwiZmlsZSI6Imludm9pY2UuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSBcImpvaVwiO1xuaW1wb3J0IEh0dHBTdGF0dXMsIHsgTk9UX0ZPVU5EIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5pbXBvcnQgSW52b2ljZSBmcm9tIFwiLi9pbnZvaWNlLm1vZGVsXCI7XG5pbXBvcnQgaW52b2ljZVNlcnZpY2UgZnJvbSBcIi4vaW52b2ljZS5zZXJ2aWNlXCI7XG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSBcIi4uL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmluZEFsbChyZXEsIHJlcywgbmV4dCkge1xuICAgIGNvbnN0IHsgcGFnZSA9IDEsIHBlclBhZ2UgPSAxMCwgZmlsdGVyLCBzb3J0RmllbGQsIHNvcnREaXIgfSA9IHJlcS5xdWVyeTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgcGFnZTogcGFyc2VJbnQocGFnZSwgMTApLFxuICAgICAgbGltaXQ6IHBhcnNlSW50KHBlclBhZ2UsIDEwKSxcbiAgICAgIHBvcHVsYXRlOiBcImNsaWVudFwiXG4gICAgfTtcbiAgICBjb25zdCBxdWVyeSA9IHt9O1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgIHF1ZXJ5Lml0ZW0gPSB7XG4gICAgICAgICRyZWdleDogZmlsdGVyXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoc29ydEZpZWxkICYmIHNvcnREaXIpIHtcbiAgICAgIG9wdGlvbnMuc29ydCA9IHtcbiAgICAgICAgW3NvcnRGaWVsZF06IHNvcnREaXJcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIEludm9pY2UucGFnaW5hdGUocXVlcnksIG9wdGlvbnMpXG4gICAgICAudGhlbihpbnZvaWNlcyA9PiByZXMuanNvbihpbnZvaWNlcykpXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XG4gIH0sXG4gIGNyZWF0ZShyZXEsIHJlcywgbmV4dCkge1xuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgIGl0ZW06IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgZGF0ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxuICAgICAgZHVlOiBKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXG4gICAgICBjbGllbnQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgcXR5OiBKb2kubnVtYmVyKClcbiAgICAgICAgLmludGVnZXIoKVxuICAgICAgICAucmVxdWlyZWQoKSxcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXG4gICAgICByYXRlOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKVxuICAgIH0pO1xuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xuICAgIH1cbiAgICBJbnZvaWNlLmNyZWF0ZSh2YWx1ZSlcbiAgICAgIC50aGVuKGludm9pY2UgPT4gcmVzLmpzb24oaW52b2ljZSkpXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XG4gIH0sXG4gIGZpbmRPbmUocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIEludm9pY2UuZmluZEJ5SWQoaWQpXG4gICAgICAucG9wdWxhdGUoXCJjbGllbnRcIilcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xuICAgICAgICBpZiAoIWludm9pY2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuTk9UX0ZPVU5EKVxuICAgICAgICAgICAgLmpzb24oeyBlcnI6IFwiQ291bGQgbm90IGZpbmQgYW55IGludm9pY2VcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oaW52b2ljZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xuICB9LFxuICBkZWxldGUocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIEludm9pY2UuZmluZEJ5SWRBbmRSZW1vdmUoaWQpXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORClcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcIkNvdWxkIG5vdCBkZWxldGUgYW55IGludm9pY2VcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oaW52b2ljZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xuICB9LFxuICB1cGRhdGUocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgIGl0ZW06IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgZGF0ZTogSm9pLmRhdGUoKS5vcHRpb25hbCgpLFxuICAgICAgZHVlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXG4gICAgICBxdHk6IEpvaS5udW1iZXIoKVxuICAgICAgICAuaW50ZWdlcigpXG4gICAgICAgIC5vcHRpb25hbCgpLFxuICAgICAgdGF4OiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcbiAgICAgIHJhdGU6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxuICAgICAgY2xpZW50OiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKVxuICAgIH0pO1xuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xuICAgIH1cbiAgICBJbnZvaWNlLmZpbmRPbmVBbmRVcGRhdGUoeyBfaWQ6IGlkIH0sIHZhbHVlLCB7IG5ldzogdHJ1ZSB9KVxuICAgICAgLnRoZW4oaW52b2ljZSA9PiByZXMuanNvbihpbnZvaWNlKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcbiAgfSxcbiAgYXN5bmMgZG93bmxvYWQocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICAgIGNvbnN0IGludm9pY2UgPSBhd2FpdCBJbnZvaWNlLmZpbmRCeUlkKGlkKS5wb3B1bGF0ZShcImNsaWVudFwiKTtcbiAgICAgIGlmICghaW52b2ljZSkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhOT1RfRk9VTkQpLnNlbmQoeyBlcnI6IFwiY291bGQgbm90IGZpbmQgYW55IGludmljZVwiIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBzdWJUb3RhbCwgdG90YWwgfSA9IGludm9pY2VTZXJ2aWNlLmdldFRvdGFsKGludm9pY2UpO1xuICAgICAgY29uc3QgdXNlciA9IHVzZXJTZXJ2aWNlLmdldFVzZXIocmVxLmN1cnJlbnRVc2VyKTtcbiAgICAgIGNvbnN0IHRlbXBsYXRlQm9keSA9IGludm9pY2VTZXJ2aWNlLmdldFRlbXBsYXRlQm9keShcbiAgICAgICAgaW52b2ljZSxcbiAgICAgICAgc3ViVG90YWwsXG4gICAgICAgIHRvdGFsLFxuICAgICAgICB1c2VyXG4gICAgICApO1xuICAgICAgY29uc3QgaHRtbCA9IGludm9pY2VTZXJ2aWNlLmdldEludm9pY2VUZW1wbGF0ZSh0ZW1wbGF0ZUJvZHkpO1xuICAgICAgcmVzLnBkZkZyb21IVE1MKHtcbiAgICAgICAgZmlsZW5hbWU6IGAke2ludm9pY2UuaXRlbX0ucGRmYCxcbiAgICAgICAgaHRtbENvbnRlbnQ6IGh0bWxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycik7XG4gICAgfVxuICB9XG59O1xuIl19