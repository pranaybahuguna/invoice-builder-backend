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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTaWdudXBTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwibWVzc2FnZSIsIlVzZXIiLCJjcmVhdGUiLCJ1c2VyIiwic3VjY2VzcyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImxvZ2luIiwiZmluZE9uZSIsImVtYWlsIiwiZXJyIiwiYmNyeXB0anMiLCJjb21wYXJlIiwicGFzc3dvcmQiLCJtYXRjaGVkIiwiVU5BVVRIT1JJWkVEIiwiand0Iiwic2lnbiIsImlkIiwiX2lkIiwiZGV2Q29uZmlnIiwic2VjcmV0IiwiZXhwaXJlc0luIiwidG9rZW4iLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztrQkFFZTtBQUNQQSxRQURPO0FBQUEseUdBQ0FDLEdBREEsRUFDS0MsR0FETDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FHZ0JDLGVBQVlDLG9CQUFaLENBQWlDSCxJQUFJSSxJQUFyQyxDQUhoQixFQUdEQyxLQUhDLHlCQUdEQSxLQUhDLEVBR01DLE1BSE4seUJBR01BLEtBSE47O0FBQUEsb0JBSUxBLFVBQVNBLE9BQU1DLE9BSlY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBS0FOLElBQUlPLE1BQUosQ0FBV0MsMEJBQVdDLFdBQXRCLEVBQW1DQyxJQUFuQyxDQUF3Q0wsT0FBTU0sT0FBOUMsQ0FMQTs7QUFBQTtBQUFBO0FBQUEscUJBT1VDLGVBQUtDLE1BQUwsQ0FBWVQsS0FBWixDQVBWOztBQUFBO0FBT0hVLGtCQVBHO0FBQUEsK0NBUUZkLElBQUlVLElBQUosQ0FBUyxFQUFFSyxTQUFTLElBQVgsRUFBaUJKLFNBQVMsMkJBQTFCLEVBQVQsQ0FSRTs7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FVRlgsSUFBSU8sTUFBSixDQUFXQywwQkFBV1EscUJBQXRCLEVBQTZDTixJQUE3QyxDQUFrREwsTUFBTU0sT0FBeEQsQ0FWRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWFQTSxPQWJPO0FBQUEsMkdBYURsQixHQWJDLEVBYUlDLEdBYko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBZWdCQyxlQUFZQyxvQkFBWixDQUFpQ0gsSUFBSUksSUFBckMsQ0FmaEIsRUFlREMsS0FmQywwQkFlREEsS0FmQyxFQWVNQyxPQWZOLDBCQWVNQSxLQWZOOztBQUFBLG9CQWdCTEEsV0FBU0EsUUFBTUMsT0FoQlY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBaUJBTixJQUFJTyxNQUFKLENBQVdDLDBCQUFXQyxXQUF0QixFQUFtQ0MsSUFBbkMsQ0FBd0NMLFFBQU1NLE9BQTlDLENBakJBOztBQUFBO0FBQUE7QUFBQSxxQkFtQlVDLGVBQUtNLE9BQUwsQ0FBYSxFQUFFQyxPQUFPZixNQUFNZSxLQUFmLEVBQWIsQ0FuQlY7O0FBQUE7QUFtQkhMLGtCQW5CRzs7QUFBQSxrQkFvQkpBLElBcEJJO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQXFCQWQsSUFDSk8sTUFESSxDQUNHQywwQkFBV0MsV0FEZCxFQUVKQyxJQUZJLENBRUMsRUFBRVUsS0FBSywyQkFBUCxFQUZELENBckJBOztBQUFBO0FBQUE7QUFBQSxxQkF5QmFDLG1CQUFTQyxPQUFULENBQWlCbEIsTUFBTW1CLFFBQXZCLEVBQWlDVCxLQUFLUyxRQUF0QyxDQXpCYjs7QUFBQTtBQXlCSEMscUJBekJHOztBQUFBLGtCQTBCSkEsT0ExQkk7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBMkJBeEIsSUFDSk8sTUFESSxDQUNHQywwQkFBV2lCLFlBRGQsRUFFSmYsSUFGSSxDQUVDLEVBQUVVLEtBQUsscUJBQVAsRUFGRCxDQTNCQTs7QUFBQTtBQStCVE0scUNBQUlDLElBQUosQ0FDRSxFQUFFQyxJQUFJZCxLQUFLZSxHQUFYLEVBREYsRUFFRUMsdUJBQVVDLE1BRlosRUFHRSxFQUFFQyxXQUFXLElBQWIsRUFIRixFQUlFLFVBQVNaLEdBQVQsRUFBY2EsS0FBZCxFQUFxQjtBQUNuQix1QkFBT2pDLElBQUlVLElBQUosQ0FBUyxFQUFFSyxTQUFTLElBQVgsRUFBaUJrQixZQUFqQixFQUFULENBQVA7QUFDRCxlQU5IO0FBL0JTO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBd0NGakMsSUFDSk8sTUFESSxDQUNHQywwQkFBV1EscUJBRGQsRUFFSk4sSUFGSSxDQUVDRiwwQkFBV1EscUJBRlosRUFFbUMsYUFBSUwsT0FGdkMsQ0F4Q0U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUE2Q1B1QixNQTdDTztBQUFBLDJHQTZDRm5DLEdBN0NFLEVBNkNHQyxHQTdDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBOENKQSxJQUFJVSxJQUFKLENBQVNYLElBQUllLElBQWIsQ0E5Q0k7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6InVzZXIuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VyU2VydmljZSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IEh0dHBTdGF0dXMgZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XHJcbmltcG9ydCBiY3J5cHRqcyBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgZGV2Q29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhc3luYyBzaWdudXAocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNpZ251cFNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUodmFsdWUpO1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcInVzZXIgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGxvZ2luKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gdXNlclNlcnZpY2UudmFsaWRhdGVTaWdudXBTY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiB2YWx1ZS5lbWFpbCB9KTtcclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKVxyXG4gICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52YWxpZCBlbWFpbCBvciBwYXNzd29yZFwiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1hdGNoZWQgPSBhd2FpdCBiY3J5cHRqcy5jb21wYXJlKHZhbHVlLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgaWYgKCFtYXRjaGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLlVOQVVUSE9SSVpFRClcclxuICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludmFsaWQgY3JlZGVudGlhbHNcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBqd3Quc2lnbihcclxuICAgICAgICB7IGlkOiB1c2VyLl9pZCB9LFxyXG4gICAgICAgIGRldkNvbmZpZy5zZWNyZXQsXHJcbiAgICAgICAgeyBleHBpcmVzSW46IFwiMWRcIiB9LFxyXG4gICAgICAgIGZ1bmN0aW9uKGVyciwgdG9rZW4pIHtcclxuICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHRva2VuIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUilcclxuICAgICAgICAuanNvbihIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgdGVzdChyZXEsIHJlcykge1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKHJlcS51c2VyKTtcclxuICB9XHJcbn07XHJcbiJdfQ==