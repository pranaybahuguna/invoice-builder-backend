"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user = require("./user.service");

var _user2 = _interopRequireDefault(_user);

var _user3 = require("./user.model");

var _user4 = _interopRequireDefault(_user3);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _development = require("../../../config/env/development");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signup: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _userService$validate, value, _error, user;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _userService$validate = _user2.default.validateSignupSchema(req.body), value = _userService$validate.value, _error = _userService$validate.error;

              if (!(_error && _error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(_error.message));

            case 4:
              _context.next = 6;
              return _user4.default.create(value);

            case 6:
              user = _context.sent;
              return _context.abrupt("return", res.json({ success: true, message: "user created successfully" }));

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

    function signup(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return signup;
  }(),
  login: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _userService$validate2, value, _error2, user, matched;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _userService$validate2 = _user2.default.validateSignupSchema(req.body), value = _userService$validate2.value, _error2 = _userService$validate2.error;

              if (!(_error2 && _error2.details)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(_error2.message));

            case 4:
              _context2.next = 6;
              return _user4.default.findOne({ email: value.email });

            case 6:
              user = _context2.sent;

              if (user) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: "invalid email or password" }));

            case 9:
              _context2.next = 11;
              return _bcryptjs2.default.compare(value.password, user.password);

            case 11:
              matched = _context2.sent;

              if (matched) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.UNAUTHORIZED).json({ err: "invalid credentials" }));

            case 14:
              _jsonwebtoken2.default.sign({ id: user._id }, _development.devConfig.secret, { expiresIn: "1d" }, function (err, token) {
                return res.json({ success: true, token: token });
              });
              _context2.next = 20;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR, _context2.t0.message));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 17]]);
    }));

    function login(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return login;
  }(),
  test: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", res.json(req.user));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function test(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return test;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTaWdudXBTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwibWVzc2FnZSIsIlVzZXIiLCJjcmVhdGUiLCJ1c2VyIiwic3VjY2VzcyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImxvZ2luIiwiZmluZE9uZSIsImVtYWlsIiwiZXJyIiwiYmNyeXB0anMiLCJjb21wYXJlIiwicGFzc3dvcmQiLCJtYXRjaGVkIiwiVU5BVVRIT1JJWkVEIiwiand0Iiwic2lnbiIsImlkIiwiX2lkIiwiZGV2Q29uZmlnIiwic2VjcmV0IiwiZXhwaXJlc0luIiwidG9rZW4iLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztrQkFFZTtBQUNQQSxRQURPO0FBQUEseUdBQ0FDLEdBREEsRUFDS0MsR0FETDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FHZ0JDLGVBQVlDLG9CQUFaLENBQWlDSCxJQUFJSSxJQUFyQyxDQUhoQixFQUdEQyxLQUhDLHlCQUdEQSxLQUhDLEVBR01DLE1BSE4seUJBR01BLEtBSE47O0FBQUEsb0JBSUxBLFVBQVNBLE9BQU1DLE9BSlY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBS0FOLElBQUlPLE1BQUosQ0FBV0MsMEJBQVdDLFdBQXRCLEVBQW1DQyxJQUFuQyxDQUF3Q0wsT0FBTU0sT0FBOUMsQ0FMQTs7QUFBQTtBQUFBO0FBQUEscUJBT1VDLGVBQUtDLE1BQUwsQ0FBWVQsS0FBWixDQVBWOztBQUFBO0FBT0hVLGtCQVBHO0FBQUEsK0NBUUZkLElBQUlVLElBQUosQ0FBUyxFQUFFSyxTQUFTLElBQVgsRUFBaUJKLFNBQVMsMkJBQTFCLEVBQVQsQ0FSRTs7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FVRlgsSUFBSU8sTUFBSixDQUFXQywwQkFBV1EscUJBQXRCLEVBQTZDTixJQUE3QyxDQUFrREwsTUFBTU0sT0FBeEQsQ0FWRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWFQTSxPQWJPO0FBQUEsMkdBYURsQixHQWJDLEVBYUlDLEdBYko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBZWdCQyxlQUFZQyxvQkFBWixDQUFpQ0gsSUFBSUksSUFBckMsQ0FmaEIsRUFlREMsS0FmQywwQkFlREEsS0FmQyxFQWVNQyxPQWZOLDBCQWVNQSxLQWZOOztBQUFBLG9CQWdCTEEsV0FBU0EsUUFBTUMsT0FoQlY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBaUJBTixJQUFJTyxNQUFKLENBQVdDLDBCQUFXQyxXQUF0QixFQUFtQ0MsSUFBbkMsQ0FBd0NMLFFBQU1NLE9BQTlDLENBakJBOztBQUFBO0FBQUE7QUFBQSxxQkFtQlVDLGVBQUtNLE9BQUwsQ0FBYSxFQUFFQyxPQUFPZixNQUFNZSxLQUFmLEVBQWIsQ0FuQlY7O0FBQUE7QUFtQkhMLGtCQW5CRzs7QUFBQSxrQkFvQkpBLElBcEJJO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQXFCQWQsSUFDSk8sTUFESSxDQUNHQywwQkFBV0MsV0FEZCxFQUVKQyxJQUZJLENBRUMsRUFBRVUsS0FBSywyQkFBUCxFQUZELENBckJBOztBQUFBO0FBQUE7QUFBQSxxQkF5QmFDLG1CQUFTQyxPQUFULENBQWlCbEIsTUFBTW1CLFFBQXZCLEVBQWlDVCxLQUFLUyxRQUF0QyxDQXpCYjs7QUFBQTtBQXlCSEMscUJBekJHOztBQUFBLGtCQTBCSkEsT0ExQkk7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBMkJBeEIsSUFDSk8sTUFESSxDQUNHQywwQkFBV2lCLFlBRGQsRUFFSmYsSUFGSSxDQUVDLEVBQUVVLEtBQUsscUJBQVAsRUFGRCxDQTNCQTs7QUFBQTtBQStCVE0scUNBQUlDLElBQUosQ0FDRSxFQUFFQyxJQUFJZCxLQUFLZSxHQUFYLEVBREYsRUFFRUMsdUJBQVVDLE1BRlosRUFHRSxFQUFFQyxXQUFXLElBQWIsRUFIRixFQUlFLFVBQVNaLEdBQVQsRUFBY2EsS0FBZCxFQUFxQjtBQUNuQix1QkFBT2pDLElBQUlVLElBQUosQ0FBUyxFQUFFSyxTQUFTLElBQVgsRUFBaUJrQixZQUFqQixFQUFULENBQVA7QUFDRCxlQU5IO0FBL0JTO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBd0NGakMsSUFDSk8sTUFESSxDQUNHQywwQkFBV1EscUJBRGQsRUFFSk4sSUFGSSxDQUVDRiwwQkFBV1EscUJBRlosRUFFbUMsYUFBSUwsT0FGdkMsQ0F4Q0U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUE2Q1B1QixNQTdDTztBQUFBLDJHQTZDRm5DLEdBN0NFLEVBNkNHQyxHQTdDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBOENKQSxJQUFJVSxJQUFKLENBQVNYLElBQUllLElBQWIsQ0E5Q0k7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6InVzZXIuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VyU2VydmljZSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IEh0dHBTdGF0dXMgZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzeW5jIHNpZ251cChyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gdXNlclNlcnZpY2UudmFsaWRhdGVTaWdudXBTY2hlbWEocmVxLmJvZHkpO1xuICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcInVzZXIgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfSxcbiAgYXN5bmMgbG9naW4ocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRlU2lnbnVwU2NoZW1hKHJlcS5ib2R5KTtcbiAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHZhbHVlLmVtYWlsIH0pO1xuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpXG4gICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52YWxpZCBlbWFpbCBvciBwYXNzd29yZFwiIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgbWF0Y2hlZCA9IGF3YWl0IGJjcnlwdGpzLmNvbXBhcmUodmFsdWUucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuICAgICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuVU5BVVRIT1JJWkVEKVxuICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludmFsaWQgY3JlZGVudGlhbHNcIiB9KTtcbiAgICAgIH1cbiAgICAgIGp3dC5zaWduKFxuICAgICAgICB7IGlkOiB1c2VyLl9pZCB9LFxuICAgICAgICBkZXZDb25maWcuc2VjcmV0LFxuICAgICAgICB7IGV4cGlyZXNJbjogXCIxZFwiIH0sXG4gICAgICAgIGZ1bmN0aW9uKGVyciwgdG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCB0b2tlbiB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUilcbiAgICAgICAgLmpzb24oSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH0sXG4gIGFzeW5jIHRlc3QocmVxLCByZXMpIHtcbiAgICByZXR1cm4gcmVzLmpzb24ocmVxLnVzZXIpO1xuICB9XG59O1xuIl19