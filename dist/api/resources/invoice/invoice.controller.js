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

        _invoice2.default.findById(id).populate("client").then(function (invoice) {
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
    },
    download: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
            var id, invoice, templateBody;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            id = req.params.id;
                            _context.next = 3;
                            return _invoice2.default.findById(id).populate("client");

                        case 3:
                            invoice = _context.sent;
                            templateBody = "<div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                    </div>\n                    <div class=\"col-xs-6 text-right\">\n                        <h1>INVOICE</h1>\n                        <h1>\n                            <small>" + invoice.item + "</small>\n                        </h1>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-5\">\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">\n                                <h4>From:\n                                    <a>Jane</a>\n                                </h4>\n                            </div>\n                            <div class=\"panel-body\">\n                                <p>\n                                    jane_doe@gmail.com\n                                    <br>\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-5 col-xs-offset-2 text-right\">\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">\n                                <h4>To :\n                                    <a>Malik</a>\n                                </h4>\n                            </div>\n                            <div class=\"panel-body\">\n                                <p>\n                                    malik@gmail.com\n                                    <br>\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th>\n                                <h4>Qty</h4>\n                            </th>\n                            <th>\n                                <h4>Rate</h4>\n                            </th>\n                            <th>\n                                <h4>Tax</h4>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>10</td>\n                            <td>10</td>\n                            <td>\n                                1\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"row text-right\">\n                    <div class=\"col-xs-2 col-xs-offset-8\">\n                        <p>\n                            <strong>\n                                Sub Total :\n                                <br> TAX :\n                                <br> Total :\n                                <br>\n                            </strong>\n                        </p>\n                    </div>\n                    <div class=\"col-xs-2\">\n                        <strong>\n                            $100\n                            <br> $200\n                            <br> $300\n                            <br>\n                        </strong>\n                    </div>\n                </div>\n            </div>";
                            return _context.abrupt("return", res.pdfFromHTML({
                                filename: "hello-mean-stack.pdf",
                                htmlContent: templateBody
                            }));

                        case 6:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function download(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return download;
    }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImR1bW15SW52b2ljZXMiLCJfaWQiLCJpdGVtIiwicXR5IiwiZGF0ZSIsIkRhdGUiLCJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsInF1ZXJ5IiwicGFnZSIsInBlclBhZ2UiLCJmaWx0ZXIiLCJzb3J0RmllbGQiLCJzb3J0RGlyIiwib3B0aW9ucyIsInBhcnNlSW50IiwibGltaXQiLCJwb3B1bGF0ZSIsIiRyZWdleCIsInNvcnQiLCJJbnZvaWNlIiwicGFnaW5hdGUiLCJ0aGVuIiwianNvbiIsImludm9pY2VzIiwiY2F0Y2giLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZXJyIiwiY3JlYXRlIiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsInN0cmluZyIsInJlcXVpcmVkIiwibnVtYmVyIiwiaW50ZWdlciIsImR1ZSIsImNsaWVudCIsInRheCIsIm9wdGlvbmFsIiwicmF0ZSIsInZhbGlkYXRlIiwiYm9keSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiQkFEX1JFUVVFU1QiLCJtZXNzYWdlIiwiaW52b2ljZSIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiTk9UX0ZPVU5EIiwiZGVsZXRlIiwiZmluZEJ5SWRBbmRSZW1vdmUiLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwibmV3IiwiZG93bmxvYWQiLCJ0ZW1wbGF0ZUJvZHkiLCJwZGZGcm9tSFRNTCIsImZpbGVuYW1lIiwiaHRtbENvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLENBQ3BCLEVBQUVDLEtBQUssUUFBUCxFQUFpQkMsTUFBTSxnQkFBdkIsRUFBeUNDLEtBQUssRUFBOUMsRUFB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SWlCLElBQUosQ0FBUzRCLE9BQVQ7QUFDRCxTQUhILEVBSUcxQixLQUpILENBSVM7QUFBQSxtQkFBT25CLElBQUlvQixNQUFKLENBQVdDLDBCQUFXQyxxQkFBdEIsRUFBNkNMLElBQTdDLENBQWtETSxHQUFsRCxDQUFQO0FBQUEsU0FKVDtBQUtELEtBckdZO0FBc0dQaUMsWUF0R087QUFBQSw2R0FzR0V6RCxHQXRHRixFQXNHT0MsR0F0R1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUdIK0MsOEJBdkdHLEdBdUdJaEQsSUFBSWlELE1BdkdSLENBdUdIRCxFQXZHRztBQUFBO0FBQUEsbUNBd0dXakMsa0JBQVFtQyxRQUFSLENBQWlCRixFQUFqQixFQUFxQnBDLFFBQXJCLENBQThCLFFBQTlCLENBeEdYOztBQUFBO0FBd0dMa0MsbUNBeEdLO0FBeUdMWSx3Q0F6R0ssc1RBZ0hzQlosUUFBUW5ELElBaEg5QjtBQUFBLDZEQWlNSk0sSUFBSTBELFdBQUosQ0FBZ0I7QUFDckJDLDBDQUFVLHNCQURXO0FBRXJCQyw2Q0FBYUg7QUFGUSw2QkFBaEIsQ0FqTUk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6Imludm9pY2UuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnZvaWNlIGZyb20gXCIuL2ludm9pY2UubW9kZWxcIjtcbmltcG9ydCBKb2kgZnJvbSBcImpvaVwiO1xuaW1wb3J0IEh0dHBTdGF0dXMgZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmNvbnN0IGR1bW15SW52b2ljZXMgPSBbXG4gIHsgX2lkOiBcIjEyMzQzMlwiLCBpdGVtOiBcIkFtYXpvbiBQcm9kdWN0XCIsIHF0eTogMTAsIGRhdGU6IG5ldyBEYXRlKCkgfSxcbiAgeyBfaWQ6IFwiMTIzNDQzXCIsIGl0ZW06IFwiR29vZ2xlIFByb2R1Y3RcIiwgcXR5OiAxNCwgZGF0ZTogbmV3IERhdGUoKSB9LFxuICB7IF9pZDogXCIxMjM0MjFcIiwgaXRlbTogXCJFYmF5IFByb2R1Y3RcIiwgcXR5OiAxMSwgZGF0ZTogbmV3IERhdGUoKSB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpbmRBbGwocmVxLCByZXMsIG5leHQpIHtcbiAgICBjb25zdCB7IHBhZ2UgPSAxLCBwZXJQYWdlID0gMTAsIGZpbHRlciwgc29ydEZpZWxkLCBzb3J0RGlyIH0gPSByZXEucXVlcnk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHBhZ2U6IHBhcnNlSW50KHBhZ2UsIDEwKSxcbiAgICAgIGxpbWl0OiBwYXJzZUludChwZXJQYWdlLCAxMCksXG4gICAgICBwb3B1bGF0ZTogXCJjbGllbnRcIlxuICAgIH07XG4gICAgY29uc3QgcXVlcnkgPSB7fTtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBxdWVyeS5pdGVtID0ge1xuICAgICAgICAkcmVnZXg6IGZpbHRlclxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHNvcnRGaWVsZCAmJiBzb3J0RGlyKSB7XG4gICAgICBvcHRpb25zLnNvcnQgPSB7XG4gICAgICAgIFtzb3J0RmllbGRdOiBzb3J0RGlyXG4gICAgICB9O1xuICAgIH1cblxuICAgIEludm9pY2UucGFnaW5hdGUocXVlcnksIG9wdGlvbnMpXG4gICAgICAudGhlbihpbnZvaWNlcyA9PiB7XG4gICAgICAgIHJlcy5qc29uKGludm9pY2VzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XG4gIH0sXG4gIGNyZWF0ZShyZXEsIHJlcykge1xuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgIGl0ZW06IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgcXR5OiBKb2kubnVtYmVyKClcbiAgICAgICAgLmludGVnZXIoKVxuICAgICAgICAucmVxdWlyZWQoKSxcbiAgICAgIGRhdGU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcbiAgICAgIGR1ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxuICAgICAgY2xpZW50OiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXG4gICAgICByYXRlOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKVxuICAgIH0pO1xuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSk7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICAgIEludm9pY2UuY3JlYXRlKHZhbHVlKVxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XG4gICAgICAgIHJlcy5qc29uKGludm9pY2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcbiAgfSxcbiAgZmluZE9uZShyZXEsIHJlcykge1xuICAgIGxldCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIEludm9pY2UuZmluZEJ5SWQoaWQpXG4gICAgICAucG9wdWxhdGUoXCJjbGllbnRcIilcbiAgICAgIC50aGVuKGludm9pY2UgPT4ge1xuICAgICAgICBpZiAoIWludm9pY2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuTk9UX0ZPVU5EKVxuICAgICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52b2ljZSBpZCBub3QgZm91bmRcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oaW52b2ljZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKTtcbiAgICAgIH0pO1xuICB9LFxuICBkZWxldGUocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIEludm9pY2UuZmluZEJ5SWRBbmRSZW1vdmUoaWQpXG4gICAgICAudGhlbihpbnZvaWNlID0+IHtcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORClcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludm9pY2UgaWQgbm90IGZvdW5kXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XG4gICAgICB9KTtcbiAgfSxcbiAgdXBkYXRlKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICBpdGVtOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgIHF0eTogSm9pLm51bWJlcigpXG4gICAgICAgIC5pbnRlZ2VyKClcbiAgICAgICAgLm9wdGlvbmFsKCksXG4gICAgICBkYXRlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXG4gICAgICBkdWU6IEpvaS5kYXRlKCkub3B0aW9uYWwoKSxcbiAgICAgIGNsaWVudDogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgICB0YXg6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxuICAgICAgcmF0ZTogSm9pLm51bWJlcigpLm9wdGlvbmFsKClcbiAgICB9KTtcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKHJlcS5ib2R5LCBzY2hlbWEpO1xuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgICBJbnZvaWNlLmZpbmRPbmVBbmRVcGRhdGUoeyBfaWQ6IGlkIH0sIHZhbHVlLCB7IG5ldzogdHJ1ZSB9KVxuICAgICAgLnRoZW4oaW52b2ljZSA9PiB7XG4gICAgICAgIHJlcy5qc29uKGludm9pY2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcbiAgfSxcbiAgYXN5bmMgZG93bmxvYWQocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIGNvbnN0IGludm9pY2UgPSBhd2FpdCBJbnZvaWNlLmZpbmRCeUlkKGlkKS5wb3B1bGF0ZShcImNsaWVudFwiKTtcbiAgICBjb25zdCB0ZW1wbGF0ZUJvZHkgPSBgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPklOVk9JQ0U8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ke2ludm9pY2UuaXRlbX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkZyb206XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5KYW5lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgamFuZV9kb2VAZ21haWwuY29tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy01IGNvbC14cy1vZmZzZXQtMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5UbyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5NYWxpazwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbGlrQGdtYWlsLmNvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlF0eTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5SYXRlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlRheDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0yIGNvbC14cy1vZmZzZXQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3ViIFRvdGFsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPiBUQVggOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+IFRvdGFsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+ICQyMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+ICQzMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgIHJldHVybiByZXMucGRmRnJvbUhUTUwoe1xuICAgICAgZmlsZW5hbWU6IFwiaGVsbG8tbWVhbi1zdGFjay5wZGZcIixcbiAgICAgIGh0bWxDb250ZW50OiB0ZW1wbGF0ZUJvZHlcbiAgICB9KTtcbiAgfVxufTtcbiJdfQ==