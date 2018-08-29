"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _client = require("./client.service");

var _client2 = _interopRequireDefault(_client);

var _client3 = require("./client.model");

var _client4 = _interopRequireDefault(_client3);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _clientService$valida, value, _error, client;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _clientService$valida = _client2.default.validateCreateSchema(req.body), value = _clientService$valida.value, _error = _clientService$valida.error;

              if (!(_error && _error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(_error.message));

            case 4:
              _context.next = 6;
              return _client4.default.create(value);

            case 6:
              client = _context.sent;
              return _context.abrupt("return", res.json(client));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(error.message));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 10]]);
    }));

    function create(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return create;
  }(),
  findAll: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var clients;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _client4.default.find();

            case 3:
              clients = _context2.sent;

              if (clients) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.NOT_FOUND).json(error.message));

            case 6:
              return _context2.abrupt("return", res.json(clients));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(error.message));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 9]]);
    }));

    function findAll(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return findAll;
  }(),
  findOne: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var client;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _client4.default.findById(req.params.id);

            case 3:
              client = _context3.sent;

              if (client) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt("return", res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "client id not found" }));

            case 6:
              return _context3.abrupt("return", res.json(client));

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(error.message));

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 9]]);
    }));

    function findOne(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return findOne;
  }(),
  delete: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var client;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _client4.default.findByIdAndRemove(req.params.id);

            case 3:
              client = _context4.sent;

              if (client) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "client id not found" }));

            case 6:
              return _context4.abrupt("return", res.json(client));

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(error.message));

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 9]]);
    }));

    function _delete(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return _delete;
  }(),
  update: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var _clientService$valida2, value, _error2, client;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _clientService$valida2 = _client2.default.validateCreateSchema(req.body), value = _clientService$valida2.value, _error2 = _clientService$valida2.error;

              if (!(_error2 && _error2.details)) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(_error2.message));

            case 4:
              _context5.next = 6;
              return _client4.default.create(value);

            case 6:
              client = _context5.sent;
              return _context5.abrupt("return", res.json(client));

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(error.message));

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[0, 10]]);
    }));

    function update(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return update;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQuY29udHJvbGxlcl8xLmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInJlcSIsInJlcyIsImNsaWVudFNlcnZpY2UiLCJ2YWxpZGF0ZUNyZWF0ZVNjaGVtYSIsImJvZHkiLCJ2YWx1ZSIsImVycm9yIiwiZGV0YWlscyIsInN0YXR1cyIsIkh0dHBTdGF0dXMiLCJCQURfUkVRVUVTVCIsImpzb24iLCJtZXNzYWdlIiwiQ2xpZW50IiwiY2xpZW50IiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZmluZEFsbCIsImZpbmQiLCJjbGllbnRzIiwiTk9UX0ZPVU5EIiwiZmluZE9uZSIsImZpbmRCeUlkIiwicGFyYW1zIiwiaWQiLCJlcnIiLCJkZWxldGUiLCJmaW5kQnlJZEFuZFJlbW92ZSIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNQQSxRQURPO0FBQUEseUdBQ0FDLEdBREEsRUFDS0MsR0FETDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FHZ0JDLGlCQUFjQyxvQkFBZCxDQUFtQ0gsSUFBSUksSUFBdkMsQ0FIaEIsRUFHREMsS0FIQyx5QkFHREEsS0FIQyxFQUdNQyxNQUhOLHlCQUdNQSxLQUhOOztBQUFBLG9CQUlMQSxVQUFTQSxPQUFNQyxPQUpWO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUtBTixJQUFJTyxNQUFKLENBQVdDLDBCQUFXQyxXQUF0QixFQUFtQ0MsSUFBbkMsQ0FBd0NMLE9BQU1NLE9BQTlDLENBTEE7O0FBQUE7QUFBQTtBQUFBLHFCQU9ZQyxpQkFBT2QsTUFBUCxDQUFjTSxLQUFkLENBUFo7O0FBQUE7QUFPSFMsb0JBUEc7QUFBQSwrQ0FRRmIsSUFBSVUsSUFBSixDQUFTRyxNQUFULENBUkU7O0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBVUZiLElBQUlPLE1BQUos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c0RBTixJQUFJTyxNQUFKLENBQVdDLDBCQUFXQyxXQUF0QixFQUFtQ0MsSUFBbkMsQ0FBd0NMLFFBQU1NLE9BQTlDLENBdERBOztBQUFBO0FBQUE7QUFBQSxxQkF3RFlDLGlCQUFPZCxNQUFQLENBQWNNLEtBQWQsQ0F4RFo7O0FBQUE7QUF3REhTLG9CQXhERztBQUFBLGdEQXlERmIsSUFBSVUsSUFBSixDQUFTRyxNQUFULENBekRFOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQTJERmIsSUFBSU8sTUFBSixDQUFXQywwQkFBV00scUJBQXRCLEVBQTZDSixJQUE3QyxDQUFrREwsTUFBTU0sT0FBeEQsQ0EzREU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6ImNsaWVudC5jb250cm9sbGVyXzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50U2VydmljZSBmcm9tIFwiLi9jbGllbnQuc2VydmljZVwiO1xuaW1wb3J0IENsaWVudCBmcm9tIFwiLi9jbGllbnQubW9kZWxcIjtcbmltcG9ydCBIdHRwU3RhdHVzIGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzeW5jIGNyZWF0ZShyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gY2xpZW50U2VydmljZS52YWxpZGF0ZUNyZWF0ZVNjaGVtYShyZXEuYm9keSk7XG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgQ2xpZW50LmNyZWF0ZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gcmVzLmpzb24oY2xpZW50KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfSxcbiAgYXN5bmMgZmluZEFsbChyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjbGllbnRzID0gYXdhaXQgQ2xpZW50LmZpbmQoKTtcbiAgICAgIGlmICghY2xpZW50cykge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORCkuanNvbihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbihjbGllbnRzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfSxcbiAgYXN5bmMgZmluZE9uZShyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBDbGllbnQuZmluZEJ5SWQocmVxLnBhcmFtcy5pZCk7XG4gICAgICBpZiAoIWNsaWVudCkge1xuICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORClcbiAgICAgICAgICAuanNvbih7IGVycjogXCJjbGllbnQgaWQgbm90IGZvdW5kXCIgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oY2xpZW50KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfSxcbiAgYXN5bmMgZGVsZXRlKHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IENsaWVudC5maW5kQnlJZEFuZFJlbW92ZShyZXEucGFyYW1zLmlkKTtcbiAgICAgIGlmICghY2xpZW50KSB7XG4gICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuTk9UX0ZPVU5EKVxuICAgICAgICAgIC5qc29uKHsgZXJyOiBcImNsaWVudCBpZCBub3QgZm91bmRcIiB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbihjbGllbnQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICBhc3luYyB1cGRhdGUocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IGNsaWVudFNlcnZpY2UudmFsaWRhdGVDcmVhdGVTY2hlbWEocmVxLmJvZHkpO1xuICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IENsaWVudC5jcmVhdGUodmFsdWUpO1xuICAgICAgcmV0dXJuIHJlcy5qc29uKGNsaWVudCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn07XG4iXX0=