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
  signup: function signup(req, res) {
    var _userService$validate = _user2.default.validateSignupSchema(req.body),
        value = _userService$validate.value,
        error = _userService$validate.error;

    if (error && error.details) {
      res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message);
    }
    _user4.default.create(value).then(function (data) {
      res.json({
        success: true,
        message: "user created successfully"
      });
    }).catch(function (err) {
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err.message);
    });
  },
  login: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _userService$validate2, value, error, user, matched;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _userService$validate2 = _user2.default.validateSignupSchema(req.body), value = _userService$validate2.value, error = _userService$validate2.error;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message));

            case 4:
              _context.next = 6;
              return _user4.default.findOne({ email: value.email });

            case 6:
              user = _context.sent;

              if (user) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: "invalid email or password" }));

            case 9:
              _context.next = 11;
              return _bcryptjs2.default.compare(value.password, user.password);

            case 11:
              matched = _context.sent;

              if (matched) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes2.default.UNAUTHORIZED).json({ err: "invalid credentials" }));

            case 14:
              _jsonwebtoken2.default.sign({ id: user._id }, _development.devConfig.secret, { expiresIn: "1d" }, function (err, token) {
                return res.json({ success: true, token: token });
              });
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR, _context.t0.message));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 17]]);
    }));

    function login(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return login;
  }(),
  test: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", res.json(req.user));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function test(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return test;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTaWdudXBTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwibWVzc2FnZSIsIlVzZXIiLCJjcmVhdGUiLCJ0aGVuIiwic3VjY2VzcyIsImNhdGNoIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZXJyIiwibG9naW4iLCJmaW5kT25lIiwiZW1haWwiLCJ1c2VyIiwiYmNyeXB0anMiLCJjb21wYXJlIiwicGFzc3dvcmQiLCJtYXRjaGVkIiwiVU5BVVRIT1JJWkVEIiwiand0Iiwic2lnbiIsImlkIiwiX2lkIiwiZGV2Q29uZmlnIiwic2VjcmV0IiwiZXhwaXJlc0luIiwidG9rZW4iLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztrQkFFZTtBQUNiQSxRQURhLGtCQUNOQyxHQURNLEVBQ0RDLEdBREMsRUFDSTtBQUFBLGdDQUNVQyxlQUFZQyxvQkFBWixDQUFpQ0gsSUFBSUksSUFBckMsQ0FEVjtBQUFBLFFBQ1BDLEtBRE8seUJBQ1BBLEtBRE87QUFBQSxRQUNBQyxLQURBLHlCQUNBQSxLQURBOztBQUVmLFFBQUlBLFNBQVNBLE1BQU1DLE9BQW5CLEVBQTRCO0FBQzFCTixVQUFJTyxNQUFKLENBQVdDLDBCQUFXQyxXQUF0QixFQUFtQ0MsSUFBbkMsQ0FBd0NMLE1BQU1NLE9BQTlDO0FBQ0Q7QUFDREMsbUJBQUtDLE1BQUwsQ0FBWVQsS0FBWixFQUNHVSxJQURILENBQ1EsZ0JBQVE7QUFDWmQsVUFBSVUsSUFBSixDQUFTO0FBQ1BLLGlCQUFTLElBREY7QUFFUEosaUJBQVM7QUFGRixPQUFUO0FBSUQsS0FOSCxFQU9HSyxLQVBILENBT1MsZUFBTztBQUNaaEIsVUFBSU8sTUFBSixDQUFXQywwQkFBV1MscUJBQXRCLEVBQTZDUCxJQUE3QyxDQUFrRFEsSUFBSVAsT0FBdEQ7QUFDRCxLQVRIO0FBVUQsR0FoQlk7QUFpQlBRLE9BakJPO0FBQUEseUdBaUJEcEIsR0FqQkMsRUFpQklDLEdBakJKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQW1CZ0JDLGVBQVlDLG9CQUFaLENBQWlDSCxJQUFJSSxJQUFyQyxDQW5CaEIsRUFtQkRDLEtBbkJDLDBCQW1CREEsS0FuQkMsRUFtQk1DLEtBbkJOLDBCQW1CTUEsS0FuQk47O0FBQUEsb0JBb0JMQSxTQUFTQSxNQUFNQyxPQXBCVjtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FxQkFOLElBQUlPLE1BQUosQ0FBV0MsMEJBQVdDLFdBQXRCLEVBQW1DQyxJQUFuQyxDQUF3Q0wsTUFBTU0sT0FBOUMsQ0FyQkE7O0FBQUE7QUFBQTtBQUFBLHFCQXVCVUMsZUFBS1EsT0FBTCxDQUFhLEVBQUVDLE9BQU9qQixNQUFNaUIsS0FBZixFQUFiLENBdkJWOztBQUFBO0FBdUJIQyxrQkF2Qkc7O0FBQUEsa0JBd0JKQSxJQXhCSTtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0F5QkF0QixJQUNKTyxNQURJLENBQ0dDLDBCQUFXQyxXQURkLEVBRUpDLElBRkksQ0FFQyxFQUFFUSxLQUFLLDJCQUFQLEVBRkQsQ0F6QkE7O0FBQUE7QUFBQTtBQUFBLHFCQTZCYUssbUJBQVNDLE9BQVQsQ0FBaUJwQixNQUFNcUIsUUFBdkIsRUFBaUNILEtBQUtHLFFBQXRDLENBN0JiOztBQUFBO0FBNkJIQyxxQkE3Qkc7O0FBQUEsa0JBOEJKQSxPQTlCSTtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0ErQkExQixJQUNKTyxNQURJLENBQ0dDLDBCQUFXbUIsWUFEZCxFQUVKakIsSUFGSSxDQUVDLEVBQUVRLEtBQUsscUJBQVAsRUFGRCxDQS9CQTs7QUFBQTtBQW1DVFUscUNBQUlDLElBQUosQ0FDRSxFQUFFQyxJQUFJUixLQUFLUyxHQUFYLEVBREYsRUFFRUMsdUJBQVVDLE1BRlosRUFHRSxFQUFFQyxXQUFXLElBQWIsRUFIRixFQUlFLFVBQVNoQixHQUFULEVBQWNpQixLQUFkLEVBQXFCO0FBQ25CLHVCQUFPbkMsSUFBSVUsSUFBSixDQUFTLEVBQUVLLFNBQVMsSUFBWCxFQUFpQm9CLFlBQWpCLEVBQVQsQ0FBUDtBQUNELGVBTkg7QUFuQ1M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0E0Q0ZuQyxJQUNKTyxNQURJLENBQ0dDLDBCQUFXUyxxQkFEZCxFQUVKUCxJQUZJLENBRUNGLDBCQUFXUyxxQkFGWixFQUVtQyxZQUFJTixPQUZ2QyxDQTVDRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWlEUHlCLE1BakRPO0FBQUEsMkdBaURGckMsR0FqREUsRUFpREdDLEdBakRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFrREpBLElBQUlVLElBQUosQ0FBU1gsSUFBSXVCLElBQWIsQ0FsREk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6InVzZXIuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VyU2VydmljZSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IEh0dHBTdGF0dXMgZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XHJcbmltcG9ydCBiY3J5cHRqcyBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgZGV2Q29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzaWdudXAocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNpZ251cFNjaGVtYShyZXEuYm9keSk7XHJcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBVc2VyLmNyZWF0ZSh2YWx1ZSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IFwidXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIGFzeW5jIGxvZ2luKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gdXNlclNlcnZpY2UudmFsaWRhdGVTaWdudXBTY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiB2YWx1ZS5lbWFpbCB9KTtcclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKVxyXG4gICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52YWxpZCBlbWFpbCBvciBwYXNzd29yZFwiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1hdGNoZWQgPSBhd2FpdCBiY3J5cHRqcy5jb21wYXJlKHZhbHVlLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgaWYgKCFtYXRjaGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLlVOQVVUSE9SSVpFRClcclxuICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludmFsaWQgY3JlZGVudGlhbHNcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBqd3Quc2lnbihcclxuICAgICAgICB7IGlkOiB1c2VyLl9pZCB9LFxyXG4gICAgICAgIGRldkNvbmZpZy5zZWNyZXQsXHJcbiAgICAgICAgeyBleHBpcmVzSW46IFwiMWRcIiB9LFxyXG4gICAgICAgIGZ1bmN0aW9uKGVyciwgdG9rZW4pIHtcclxuICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHRva2VuIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUilcclxuICAgICAgICAuanNvbihIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgdGVzdChyZXEsIHJlcykge1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKHJlcS51c2VyKTtcclxuICB9XHJcbn07XHJcbiJdfQ==