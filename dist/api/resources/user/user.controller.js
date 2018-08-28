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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTaWdudXBTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwibWVzc2FnZSIsIlVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJleGlzdGluZ1VzZXIiLCJlcnIiLCJ1c2VyIiwibG9jYWwiLCJiY3J5cHRqcyIsImdlblNhbHQiLCJzYWx0IiwiaGFzaCIsInBhc3N3b3JkIiwic2F2ZSIsInN1Y2Nlc3MiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJsb2dpbiIsImNvbXBhcmUiLCJtYXRjaGVkIiwiVU5BVVRIT1JJWkVEIiwiand0Iiwic2lnbiIsImlkIiwiX2lkIiwiZGV2Q29uZmlnIiwic2VjcmV0IiwiZXhwaXJlc0luIiwidG9rZW4iLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztrQkFFZTtBQUNQQSxRQURPO0FBQUEseUdBQ0FDLEdBREEsRUFDS0MsR0FETDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FHZ0JDLGVBQVlDLG9CQUFaLENBQWlDSCxJQUFJSSxJQUFyQyxDQUhoQixFQUdEQyxLQUhDLHlCQUdEQSxLQUhDLEVBR01DLEtBSE4seUJBR01BLEtBSE47O0FBSVQsa0JBQUlBLFNBQVNBLE1BQU1DLE9BQW5CLEVBQTRCO0FBQzFCTixvQkFBSU8sTUFBSixDQUFXQywwQkFBV0MsV0FBdEIsRUFBbUNDLElBQW5DLENBQXdDTCxNQUFNTSxPQUE5QztBQUNEO0FBTlE7QUFBQSxxQkFPa0JDLGVBQUtDLE9BQUwsQ0FBYSxFQUFFLGVBQWVU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QyxhQUFJZixPQUZ2QyxDQXZERTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQTREUDRCLE1BNURPO0FBQUEsMkdBNERGeEMsR0E1REUsRUE0REdDLEdBNURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREE2REpBLElBQUlVLElBQUosQ0FBU1gsSUFBSWtCLElBQWIsQ0E3REk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6InVzZXIuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VyU2VydmljZSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IEh0dHBTdGF0dXMgZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzeW5jIHNpZ251cChyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gdXNlclNlcnZpY2UudmFsaWRhdGVTaWdudXBTY2hlbWEocmVxLmJvZHkpO1xuICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgICAgcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgXCJsb2NhbC5lbWFpbFwiOiB2YWx1ZS5lbWFpbCB9KTtcbiAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKHsgZXJyOiBcIkFjY291bnQgRXhpc3RzXCIgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgbmV3IFVzZXIoKTtcbiAgICAgIHVzZXIubG9jYWwuZW1haWwgPSB2YWx1ZS5lbWFpbDtcbiAgICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHRqcy5nZW5TYWx0KCk7XG4gICAgICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0anMuaGFzaCh2YWx1ZS5wYXNzd29yZCwgc2FsdCk7XG4gICAgICB1c2VyLmxvY2FsLnBhc3N3b3JkID0gaGFzaDtcbiAgICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xuICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgbWVzc2FnZTogXCJ1c2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCJcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfSxcbiAgYXN5bmMgbG9naW4ocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRlU2lnbnVwU2NoZW1hKHJlcS5ib2R5KTtcbiAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgXCJsb2NhbC5lbWFpbFwiOiB2YWx1ZS5lbWFpbCB9KTtcbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKVxuICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludmFsaWQgZW1haWwgb3IgcGFzc3dvcmRcIiB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hdGNoZWQgPSBhd2FpdCBiY3J5cHRqcy5jb21wYXJlKFxuICAgICAgICB2YWx1ZS5wYXNzd29yZCxcbiAgICAgICAgdXNlci5sb2NhbC5wYXNzd29yZFxuICAgICAgKTtcbiAgICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLlVOQVVUSE9SSVpFRClcbiAgICAgICAgICAuanNvbih7IGVycjogXCJpbnZhbGlkIGNyZWRlbnRpYWxzXCIgfSk7XG4gICAgICB9XG4gICAgICBqd3Quc2lnbihcbiAgICAgICAgeyBpZDogdXNlci5faWQgfSxcbiAgICAgICAgZGV2Q29uZmlnLnNlY3JldCxcbiAgICAgICAgeyBleHBpcmVzSW46IFwiMWRcIiB9LFxuICAgICAgICBmdW5jdGlvbihlcnIsIHRva2VuKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdG9rZW4gfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpXG4gICAgICAgIC5qc29uKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICBhc3luYyB0ZXN0KHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIHJlcy5qc29uKHJlcS51c2VyKTtcbiAgfVxufTtcbiJdfQ==