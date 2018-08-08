"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  signup: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var _userService$validate, value, _error, user;

      return regeneratorRuntime.wrap(function _callee$(_context) {
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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var _userService$validate2, value, _error2, user, matched;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTaWdudXBTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwibWVzc2FnZSIsIlVzZXIiLCJjcmVhdGUiLCJ1c2VyIiwic3VjY2VzcyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImxvZ2luIiwiZmluZE9uZSIsImVtYWlsIiwiZXJyIiwiYmNyeXB0anMiLCJjb21wYXJlIiwicGFzc3dvcmQiLCJtYXRjaGVkIiwiVU5BVVRIT1JJWkVEIiwiand0Iiwic2lnbiIsImlkIiwiX2lkIiwiZGV2Q29uZmlnIiwic2VjcmV0IiwiZXhwaXJlc0luIiwidG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ1BBLFFBRE87QUFBQSx3RkFDQUMsR0FEQSxFQUNLQyxHQURMO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUdnQkMsZUFBWUMsb0JBQVosQ0FBaUNILElBQUlJLElBQXJDLENBSGhCLEVBR0RDLEtBSEMseUJBR0RBLEtBSEMsRUFHTUMsTUFITix5QkFHTUEsS0FITjs7QUFBQSxvQkFJTEEsVUFBU0EsT0FBTUMsT0FKVjtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FLQU4sSUFBSU8sTUFBSixDQUFXQywwQkFBV0MsV0FBdEIsRUFBbUNDLElBQW5DLENBQXdDTCxPQUFNTSxPQUE5QyxDQUxBOztBQUFBO0FBQUE7QUFBQSxxQkFPVUMsZUFBS0MsTUFBTCxDQUFZVCxLQUFaLENBUFY7O0FBQUE7QUFPSFUsa0JBUEc7QUFBQSwrQ0FRRmQsSUFBSVUsSUFBSixDQUFTLEVBQUVLLFNBQVMsSUFBWCxFQUFpQkosU0FBUywyQkFBMUIsRUFBVCxDQVJFOztBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQVVGWCxJQUFJTyxNQUFKLENBQVdDLDBCQUFXUSxxQkFBdEIsRUFBNkNOLElBQTdDLENBQWtETCxNQUFNTSxPQUF4RCxDQVZFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBYVBNLE9BYk87QUFBQSwwRkFhRGxCLEdBYkMsRUFhSUMsR0FiSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FlZ0JDLGVBQVlDLG9CQUFaLENBQWlDSCxJQUFJSSxJQUFyQyxDQWZoQixFQWVEQyxLQWZDLDBCQWVEQSxLQWZDLEVBZU1DLE9BZk4sMEJBZU1BLEtBZk47O0FBQUEsb0JBZ0JMQSxXQUFTQSxRQUFNQyxPQWhCVjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFpQkFOLElBQUlPLE1BQUosQ0FBV0MsMEJBQVdDLFdBQXRCLEVBQW1DQyxJQUFuQyxDQUF3Q0wsUUFBTU0sT0FBOUMsQ0FqQkE7O0FBQUE7QUFBQTtBQUFBLHFCQW1CVUMsZUFBS00sT0FBTCxDQUFhLEVBQUVDLE9BQU9mLE1BQU1lLEtBQWYsRUFBYixDQW5CVjs7QUFBQTtBQW1CSEwsa0JBbkJHOztBQUFBLGtCQW9CSkEsSUFwQkk7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBcUJBZCxJQUNKTyxNQURJLENBQ0dDLDBCQUFXQyxXQURkLEVBRUpDLElBRkksQ0FFQyxFQUFFVSxLQUFLLDJCQUFQLEVBRkQsQ0FyQkE7O0FBQUE7QUFBQTtBQUFBLHFCQXlCYUMsbUJBQVNDLE9BQVQsQ0FBaUJsQixNQUFNbUIsUUFBdkIsRUFBaUNULEtBQUtTLFFBQXRDLENBekJiOztBQUFBO0FBeUJIQyxxQkF6Qkc7O0FBQUEsa0JBMEJKQSxPQTFCSTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREEyQkF4QixJQUNKTyxNQURJLENBQ0dDLDBCQUFXaUIsWUFEZCxFQUVKZixJQUZJLENBRUMsRUFBRVUsS0FBSyxxQkFBUCxFQUZELENBM0JBOztBQUFBO0FBK0JUTSxxQ0FBSUMsSUFBSixDQUNFLEVBQUVDLElBQUlkLEtBQUtlLEdBQVgsRUFERixFQUVFQyx1QkFBVUMsTUFGWixFQUdFLEVBQUVDLFdBQVcsSUFBYixFQUhGLEVBSUUsVUFBU1osR0FBVCxFQUFjYSxLQUFkLEVBQXFCO0FBQ25CLHVCQUFPakMsSUFBSVUsSUFBSixDQUFTLEVBQUVLLFNBQVMsSUFBWCxFQUFpQmtCLFlBQWpCLEVBQVQsQ0FBUDtBQUNELGVBTkg7QUEvQlM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREF3Q0ZqQyxJQUNKTyxNQURJLENBQ0dDLDBCQUFXUSxxQkFEZCxFQUVKTixJQUZJLENBRUNGLDBCQUFXUSxxQkFGWixFQUVtQyxhQUFJTCxPQUZ2QyxDQXhDRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgSHR0cFN0YXR1cyBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcclxuaW1wb3J0IGJjcnlwdGpzIGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGFzeW5jIHNpZ251cChyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRlU2lnbnVwU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh2YWx1ZSk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwidXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgbG9naW4ocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNpZ251cFNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHZhbHVlLmVtYWlsIH0pO1xyXG4gICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpXHJcbiAgICAgICAgICAuanNvbih7IGVycjogXCJpbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCIgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWF0Y2hlZCA9IGF3YWl0IGJjcnlwdGpzLmNvbXBhcmUodmFsdWUucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICBpZiAoIW1hdGNoZWQpIHtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuVU5BVVRIT1JJWkVEKVxyXG4gICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52YWxpZCBjcmVkZW50aWFsc1wiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGp3dC5zaWduKFxyXG4gICAgICAgIHsgaWQ6IHVzZXIuX2lkIH0sXHJcbiAgICAgICAgZGV2Q29uZmlnLnNlY3JldCxcclxuICAgICAgICB7IGV4cGlyZXNJbjogXCIxZFwiIH0sXHJcbiAgICAgICAgZnVuY3Rpb24oZXJyLCB0b2tlbikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdG9rZW4gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXNcclxuICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKVxyXG4gICAgICAgIC5qc29uKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXX0=