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

var _util = require("../../modules/util");

var _mail = require("../../modules/mail");

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
              user.local.name = value.name;
              _context.next = 14;
              return _bcryptjs2.default.genSalt();

            case 14:
              salt = _context.sent;
              _context.next = 17;
              return _bcryptjs2.default.hash(value.password, salt);

            case 17:
              hash = _context.sent;

              user.local.password = hash;
              _context.next = 21;
              return user.save();

            case 21:
              return _context.abrupt("return", res.json({
                success: true,
                message: "user created successfully"
              }));

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_context.t0.message));

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 24]]);
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
              _userService$validate2 = _user2.default.validateLoginSchema(req.body), value = _userService$validate2.value, error = _userService$validate2.error;

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
  }(),
  forgotPassword: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var _userService$validate3, value, error, criteria, user, token, resetLink, sanitizedUser, results;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _userService$validate3 = _user2.default.validateForgotSchema(req.body), value = _userService$validate3.value, error = _userService$validate3.error;

              if (!(error && error.details)) {
                _context4.next = 4;
                break;
              }

              return _context4.abrupt("return", res.status(BAD_REQUEST).json(error));

            case 4:
              criteria = {
                $or: [{ "google.email": value.email }, { "github.email": value.email }, { "twitter.email": value.email }, { "local.email": value.email }]
              };
              _context4.next = 7;
              return _user4.default.findOne(criteria);

            case 7:
              user = _context4.sent;

              if (user) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("return", res.status(NOT_FOUND).json({ err: "could not find user" }));

            case 10:
              token = (0, _util.getJWTToken)({ id: user._id });
              resetLink = "\n       <h4> Please click on the link to reset the password </h4>\n       <a href ='" + _development.devConfig.frontendURL + "/reset-password/" + token + "'>Reset Password</a>\n      ";
              sanitizedUser = _user2.default.getUser(user);
              _context4.next = 15;
              return (0, _mail.sendEmail)({
                html: resetLink,
                subject: "Forgot Password",
                email: sanitizedUser.email
              });

            case 15:
              results = _context4.sent;
              return _context4.abrupt("return", res.json(results));

            case 19:
              _context4.prev = 19;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR, _context4.t0.message));

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 19]]);
    }));

    function forgotPassword(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return forgotPassword;
  }(),
  resetPassword: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var password, user, sanitizedUser, hash;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              password = req.body.password;

              if (password) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return", res.status(BAD_REQUEST).json({ err: "password is required" }));

            case 4:
              _context5.next = 6;
              return _user4.default.findById(req.currentUser._id);

            case 6:
              user = _context5.sent;
              sanitizedUser = _user2.default.getUser(user);

              if (!user.local.email) {
                user.local.email = sanitizedUser.email;
                user.local.name = sanitizedUser.name;
              }
              _context5.next = 11;
              return (0, _util.getEncryptedPassword)(password);

            case 11:
              hash = _context5.sent;

              user.local.password = hash;
              _context5.next = 15;
              return user.save();

            case 15:
              return _context5.abrupt("return", res.json({ success: true }));

            case 18:
              _context5.prev = 18;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR, _context5.t0.message));

            case 21:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[0, 18]]);
    }));

    function resetPassword(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return resetPassword;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTaWdudXBTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwibWVzc2FnZSIsIlVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJleGlzdGluZ1VzZXIiLCJlcnIiLCJ1c2VyIiwibG9jYWwiLCJuYW1lIiwiYmNyeXB0anMiLCJnZW5TYWx0Iiwic2FsdCIsImhhc2giLCJwYXNzd29yZCIsInNhdmUiLCJzdWNjZXNzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwibG9naW4iLCJ2YWxpZGF0ZUxvZ2luU2NoZW1hIiwiY29tcGFyZSIsIm1hdGNoZWQiLCJVTkFVVEhPUklaRUQiLCJqd3QiLCJzaWduIiwiaWQiLCJfaWQiLCJkZXZDb25maWciLCJzZWNyZXQiLCJleHBpcmVzSW4iLCJ0b2tlbiIsInRlc3QiLCJmb3Jnb3RQYXNzd29yZCIsInZhbGlkYXRlRm9yZ290U2NoZW1hIiwiY3JpdGVyaWEiLCIkb3IiLCJOT1RfRk9VTkQiLCJyZXNldExpbmsiLCJmcm9udGVuZFVSTCIsInNhbml0aXplZFVzZXIiLCJnZXRVc2VyIiwiaHRtbCIsInN1YmplY3QiLCJyZXN1bHRzIiwicmVzZXRQYXNzd29yZCIsImZpbmRCeUlkIiwiY3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O2tCQUVlO0FBQ1BBLFFBRE87QUFBQSx5R0FDQUMsR0FEQSxFQUNLQyxHQURMO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUdnQkMsZUFBWUMsb0JB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c2VyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlclNlcnZpY2UgZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCBIdHRwU3RhdHVzIGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuaW1wb3J0IGJjcnlwdGpzIGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgZGV2Q29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcbmltcG9ydCB7IGdldEpXVFRva2VuLCBnZXRFbmNyeXB0ZWRQYXNzd29yZCB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3V0aWxcIjtcbmltcG9ydCB7IHNlbmRFbWFpbCB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL21haWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3luYyBzaWdudXAocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRlU2lnbnVwU2NoZW1hKHJlcS5ib2R5KTtcbiAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IFwibG9jYWwuZW1haWxcIjogdmFsdWUuZW1haWwgfSk7XG4gICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbih7IGVycjogXCJBY2NvdW50IEV4aXN0c1wiIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IG5ldyBVc2VyKCk7XG4gICAgICB1c2VyLmxvY2FsLmVtYWlsID0gdmFsdWUuZW1haWw7XG4gICAgICB1c2VyLmxvY2FsLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdGpzLmdlblNhbHQoKTtcbiAgICAgIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHRqcy5oYXNoKHZhbHVlLnBhc3N3b3JkLCBzYWx0KTtcbiAgICAgIHVzZXIubG9jYWwucGFzc3dvcmQgPSBoYXNoO1xuICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBtZXNzYWdlOiBcInVzZXIgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIlxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICBhc3luYyBsb2dpbihyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gdXNlclNlcnZpY2UudmFsaWRhdGVMb2dpblNjaGVtYShyZXEuYm9keSk7XG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IFwibG9jYWwuZW1haWxcIjogdmFsdWUuZW1haWwgfSk7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVClcbiAgICAgICAgICAuanNvbih7IGVycjogXCJpbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCIgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBtYXRjaGVkID0gYXdhaXQgYmNyeXB0anMuY29tcGFyZShcbiAgICAgICAgdmFsdWUucGFzc3dvcmQsXG4gICAgICAgIHVzZXIubG9jYWwucGFzc3dvcmRcbiAgICAgICk7XG4gICAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5VTkFVVEhPUklaRUQpXG4gICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52YWxpZCBjcmVkZW50aWFsc1wiIH0pO1xuICAgICAgfVxuICAgICAgand0LnNpZ24oXG4gICAgICAgIHsgaWQ6IHVzZXIuX2lkIH0sXG4gICAgICAgIGRldkNvbmZpZy5zZWNyZXQsXG4gICAgICAgIHsgZXhwaXJlc0luOiBcIjFkXCIgfSxcbiAgICAgICAgZnVuY3Rpb24oZXJyLCB0b2tlbikge1xuICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHRva2VuIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKVxuICAgICAgICAuanNvbihIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfSxcbiAgYXN5bmMgdGVzdChyZXEsIHJlcykge1xuICAgIHJldHVybiByZXMuanNvbihyZXEudXNlcik7XG4gIH0sXG4gIGFzeW5jIGZvcmdvdFBhc3N3b3JkKHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZUZvcmdvdFNjaGVtYShyZXEuYm9keSk7XG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhCQURfUkVRVUVTVCkuanNvbihlcnJvcik7XG4gICAgICB9XG4gICAgICBjb25zdCBjcml0ZXJpYSA9IHtcbiAgICAgICAgJG9yOiBbXG4gICAgICAgICAgeyBcImdvb2dsZS5lbWFpbFwiOiB2YWx1ZS5lbWFpbCB9LFxuICAgICAgICAgIHsgXCJnaXRodWIuZW1haWxcIjogdmFsdWUuZW1haWwgfSxcbiAgICAgICAgICB7IFwidHdpdHRlci5lbWFpbFwiOiB2YWx1ZS5lbWFpbCB9LFxuICAgICAgICAgIHsgXCJsb2NhbC5lbWFpbFwiOiB2YWx1ZS5lbWFpbCB9XG4gICAgICAgIF1cbiAgICAgIH07XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKGNyaXRlcmlhKTtcbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhOT1RfRk9VTkQpLmpzb24oeyBlcnI6IFwiY291bGQgbm90IGZpbmQgdXNlclwiIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgdG9rZW4gPSBnZXRKV1RUb2tlbih7IGlkOiB1c2VyLl9pZCB9KTtcblxuICAgICAgY29uc3QgcmVzZXRMaW5rID0gYFxuICAgICAgIDxoND4gUGxlYXNlIGNsaWNrIG9uIHRoZSBsaW5rIHRvIHJlc2V0IHRoZSBwYXNzd29yZCA8L2g0PlxuICAgICAgIDxhIGhyZWYgPScke1xuICAgICAgICAgZGV2Q29uZmlnLmZyb250ZW5kVVJMXG4gICAgICAgfS9yZXNldC1wYXNzd29yZC8ke3Rva2VufSc+UmVzZXQgUGFzc3dvcmQ8L2E+XG4gICAgICBgO1xuICAgICAgY29uc3Qgc2FuaXRpemVkVXNlciA9IHVzZXJTZXJ2aWNlLmdldFVzZXIodXNlcik7XG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgc2VuZEVtYWlsKHtcbiAgICAgICAgaHRtbDogcmVzZXRMaW5rLFxuICAgICAgICBzdWJqZWN0OiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgICBlbWFpbDogc2FuaXRpemVkVXNlci5lbWFpbFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzLmpzb24ocmVzdWx0cyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpXG4gICAgICAgIC5qc29uKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9LFxuICBhc3luYyByZXNldFBhc3N3b3JkKHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgICAgaWYgKCFwYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhCQURfUkVRVUVTVCkuanNvbih7IGVycjogXCJwYXNzd29yZCBpcyByZXF1aXJlZFwiIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQocmVxLmN1cnJlbnRVc2VyLl9pZCk7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRVc2VyID0gdXNlclNlcnZpY2UuZ2V0VXNlcih1c2VyKTtcbiAgICAgIGlmICghdXNlci5sb2NhbC5lbWFpbCkge1xuICAgICAgICB1c2VyLmxvY2FsLmVtYWlsID0gc2FuaXRpemVkVXNlci5lbWFpbDtcbiAgICAgICAgdXNlci5sb2NhbC5uYW1lID0gc2FuaXRpemVkVXNlci5uYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IGdldEVuY3J5cHRlZFBhc3N3b3JkKHBhc3N3b3JkKTtcbiAgICAgIHVzZXIubG9jYWwucGFzc3dvcmQgPSBoYXNoO1xuICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKVxuICAgICAgICAuanNvbihIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufTtcbiJdfQ==