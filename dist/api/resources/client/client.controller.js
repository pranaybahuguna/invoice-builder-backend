"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _client = require("./client.service");

var _client2 = _interopRequireDefault(_client);

var _client3 = require("./client.model");

var _client4 = _interopRequireDefault(_client3);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  create: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var _clientService$valida, value, _error, client;

      return regeneratorRuntime.wrap(function _callee$(_context) {
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

              res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(error.message);

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
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJyZXEiLCJyZXMiLCJjbGllbnRTZXJ2aWNlIiwidmFsaWRhdGVDcmVhdGVTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwibWVzc2FnZSIsIkNsaWVudCIsImNsaWVudCIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztrQkFFZTtBQUNQQSxRQURPO0FBQUEsd0ZBQ0FDLEdBREEsRUFDS0MsR0FETDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FHZ0JDLGlCQUFjQyxvQkFBZCxDQUFtQ0gsSUFBSUksSUFBdkMsQ0FIaEIsRUFHREMsS0FIQyx5QkFHREEsS0FIQyxFQUdNQyxNQUhOLHlCQUdNQSxLQUhOOztBQUFBLG9CQUlMQSxVQUFTQSxPQUFNQyxPQUpWO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUtBTixJQUFJTyxNQUFKLENBQVdDLDBCQUFXQyxXQUF0QixFQUFtQ0MsSUFBbkMsQ0FBd0NMLE9BQU1NLE9BQTlDLENBTEE7O0FBQUE7QUFBQTtBQUFBLHFCQU9ZQyxpQkFBT2QsTUFBUCxDQUFjTSxLQUFkLENBUFo7O0FBQUE7QUFPSFMsb0JBUEc7QUFBQSwrQ0FRRmIsSUFBSVUsSUFBSixDQUFTRyxNQUFULENBUkU7O0FBQUE7QUFBQTtBQUFBOztBQVVUYixrQkFBSU8sTUFBSixDQUFXQywwQkFBV00scUJBQXRCLEVBQTZDSixJQUE3QyxDQUFrREwsTUFBTU0sT0FBeEQ7O0FBVlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6ImNsaWVudC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFNlcnZpY2UgZnJvbSBcIi4vY2xpZW50LnNlcnZpY2VcIjtcbmltcG9ydCBDbGllbnQgZnJvbSBcIi4vY2xpZW50Lm1vZGVsXCI7XG5pbXBvcnQgSHR0cFN0YXR1cyBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3luYyBjcmVhdGUocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IGNsaWVudFNlcnZpY2UudmFsaWRhdGVDcmVhdGVTY2hlbWEocmVxLmJvZHkpO1xuICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IENsaWVudC5jcmVhdGUodmFsdWUpO1xuICAgICAgcmV0dXJuIHJlcy5qc29uKGNsaWVudCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufTtcbiJdfQ==