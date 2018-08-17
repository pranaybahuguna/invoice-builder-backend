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
      var _userService$validate, value, error, existingUser, user, salt, hash;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _userService$validate = _user2.default.validateSignupSchema(req.body), value = _userService$validate.value, error = _userService$validate.error;

              if (error && error.details) {
                res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message);
              }
              _context.next = 5;
              return _user4.default.findOne({ "local.email": value.email });

            case 5:
              existingUser = _context.sent;

              if (existingUser) {
                res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: "Account Exists" });
              }
              _context.next = 9;
              return new _user4.default();

            case 9:
              user = _context.sent;

              user.local.email = value.email;
              _context.next = 13;
              return _bcryptjs2.default.genSalt();

            case 13:
              salt = _context.sent;
              _context.next = 16;
              return _bcryptjs2.default.hash(value.password, salt);

            case 16:
              hash = _context.sent;

              user.local.password = hash;
              _context.next = 20;
              return user.save();

            case 20:
              return _context.abrupt("return", res.json({
                success: true,
                message: "user created successfully"
              }));

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_context.t0.message));

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 23]]);
    }));

    function signup(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return signup;
  }(),
  login: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _userService$validate2, value, error, user, matched;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _userService$validate2 = _user2.default.validateSignupSchema(req.body), value = _userService$validate2.value, error = _userService$validate2.error;

              if (!(error && error.details)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message));

            case 4:
              _context2.next = 6;
              return _user4.default.findOne({ "local.email": value.email });

            case 6:
              user = _context2.sent;

              if (user) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: "invalid email or password" }));

            case 9:
              _context2.next = 11;
              return _bcryptjs2.default.compare(value.password, user.local.password);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTaWdudXBTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwibWVzc2FnZSIsIlVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJleGlzdGluZ1VzZXIiLCJlcnIiLCJ1c2VyIiwibG9jYWwiLCJiY3J5cHRqcyIsImdlblNhbHQiLCJzYWx0IiwiaGFzaCIsInBhc3N3b3JkIiwic2F2ZSIsInN1Y2Nlc3MiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJsb2dpbiIsImNvbXBhcmUiLCJtYXRjaGVkIiwiVU5BVVRIT1JJWkVEIiwiand0Iiwic2lnbiIsImlkIiwiX2lkIiwiZGV2Q29uZmlnIiwic2VjcmV0IiwiZXhwaXJlc0luIiwidG9rZW4iLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztrQkFFZTtBQUNQQSxRQURPO0FBQUEseUdBQ0FDLEdBREEsRUFDS0MsR0FETDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FHZ0JDLGVBQVlDLG9CQUFaLENBQWlDSCxJQUFJSSxJQUFyQyxDQUhoQixFQUdEQyxLQUhDLHlCQUdEQSxLQUhDLEVBR01DLEtBSE4seUJBR01BLEtBSE47O0FBSVQsa0JBQUlBLFNBQVNBLE1BQU1DLE9BQW5CLEVBQTRCO0FBQzFCTixvQkFBSU8sTUFBSixDQUFXQywwQkFBV0MsV0FBdEIsRUFBbUNDLElBQW5DLENBQXdDTCxNQUFNTSxPQUE5QztBQUNEO0FBTlE7QUFBQSxxQkFPa0JDLGVBQUtDLE9BQUwsQ0FBYSxFQUFFLGVBQWVU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QyxhQUFJZixPQUZ2QyxDQXZERTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQTREUDRCLE1BNURPO0FBQUEsMkdBNERGeEMsR0E1REUsRUE0REdDLEdBNURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREE2REpBLElBQUlVLElBQUosQ0FBU1gsSUFBSWtCLElBQWIsQ0E3REk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6InVzZXIuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VyU2VydmljZSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IEh0dHBTdGF0dXMgZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XHJcbmltcG9ydCBiY3J5cHRqcyBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgZGV2Q29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhc3luYyBzaWdudXAocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNpZ251cFNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IFwibG9jYWwuZW1haWxcIjogdmFsdWUuZW1haWwgfSk7XHJcbiAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oeyBlcnI6IFwiQWNjb3VudCBFeGlzdHNcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgbmV3IFVzZXIoKTtcclxuICAgICAgdXNlci5sb2NhbC5lbWFpbCA9IHZhbHVlLmVtYWlsO1xyXG4gICAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0anMuZ2VuU2FsdCgpO1xyXG4gICAgICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0anMuaGFzaCh2YWx1ZS5wYXNzd29yZCwgc2FsdCk7XHJcbiAgICAgIHVzZXIubG9jYWwucGFzc3dvcmQgPSBoYXNoO1xyXG4gICAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwidXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGxvZ2luKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gdXNlclNlcnZpY2UudmFsaWRhdGVTaWdudXBTY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IFwibG9jYWwuZW1haWxcIjogdmFsdWUuZW1haWwgfSk7XHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVClcclxuICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludmFsaWQgZW1haWwgb3IgcGFzc3dvcmRcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtYXRjaGVkID0gYXdhaXQgYmNyeXB0anMuY29tcGFyZShcclxuICAgICAgICB2YWx1ZS5wYXNzd29yZCxcclxuICAgICAgICB1c2VyLmxvY2FsLnBhc3N3b3JkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghbWF0Y2hlZCkge1xyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5VTkFVVEhPUklaRUQpXHJcbiAgICAgICAgICAuanNvbih7IGVycjogXCJpbnZhbGlkIGNyZWRlbnRpYWxzXCIgfSk7XHJcbiAgICAgIH1cclxuICAgICAgand0LnNpZ24oXHJcbiAgICAgICAgeyBpZDogdXNlci5faWQgfSxcclxuICAgICAgICBkZXZDb25maWcuc2VjcmV0LFxyXG4gICAgICAgIHsgZXhwaXJlc0luOiBcIjFkXCIgfSxcclxuICAgICAgICBmdW5jdGlvbihlcnIsIHRva2VuKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCB0b2tlbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpXHJcbiAgICAgICAgLmpzb24oSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIHRlc3QocmVxLCByZXMpIHtcclxuICAgIHJldHVybiByZXMuanNvbihyZXEudXNlcik7XHJcbiAgfVxyXG59O1xyXG4iXX0=