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
  login: function login(req, res) {
    var _userService$validate2 = _user2.default.validateSignupSchema(req.body),
        value = _userService$validate2.value,
        error = _userService$validate2.error;

    if (error && error.details) {
      res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message);
    }
    findOne({ email: value.email }).then(function (user) {
      if (!user) {
        res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: "invalid email or password" });
      }
      _bcryptjs2.default.compare(value.password, user.password, function (err, matched) {
        if (!matched) {
          res.status(_httpStatusCodes2.default.UNAUTHORIZED).json({ err: "invalid credentials" });
        }
        _jsonwebtoken2.default.sign({ id: user._id }, _development.devConfig.secret, { expiresIn: "1d" }, function (err, token) {
          res.json({ success: true, token: token });
        });
      });
    }).catch(function (err) {
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  test: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", res.json(req.user));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function test(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return test;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyMS5qcyJdLCJuYW1lcyI6WyJzaWdudXAiLCJyZXEiLCJyZXMiLCJ1c2VyU2VydmljZSIsInZhbGlkYXRlU2lnbnVwU2NoZW1hIiwiYm9keSIsInZhbHVlIiwiZXJyb3IiLCJkZXRhaWxzIiwic3RhdHVzIiwiSHR0cFN0YXR1cyIsIkJBRF9SRVFVRVNUIiwianNvbiIsIm1lc3NhZ2UiLCJVc2VyIiwiY3JlYXRlIiwidGhlbiIsInN1Y2Nlc3MiLCJjYXRjaCIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImVyciIsImxvZ2luIiwiZmluZE9uZSIsImVtYWlsIiwidXNlciIsImJjcnlwdGpzIiwiY29tcGFyZSIsInBhc3N3b3JkIiwibWF0Y2hlZCIsIlVOQVVUSE9SSVpFRCIsImp3dCIsInNpZ24iLCJpZCIsIl9pZCIsImRldkNvbmZpZyIsInNlY3JldCIsImV4cGlyZXNJbiIsInRva2VuIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7a0JBRWU7QUFDYkEsUUFEYSxrQkFDTkMsR0FETSxFQUNEQyxHQURDLEVBQ0k7QUFBQSxnQ0FDVUMsZUFBWUMsb0JBQVosQ0FBaUNILElBQUlJLElBQXJDLENBRFY7QUFBQSxRQUNQQyxLQURPLHlCQUNQQSxLQURPO0FBQUEsUUFDQUMsS0FEQSx5QkFDQUEsS0FEQTs7QUFFZixRQUFJQSxTQUFTQSxNQUFNQyxPQUFuQixFQUE0QjtBQUMxQk4sVUFBSU8sTUFBSixDQUFXQywwQkFBV0MsV0FBdEIsRUFBbUNDLElBQW5DLENBQXdDTCxNQUFNTSxPQUE5QztBQUNEO0FBQ0RDLG1CQUFLQyxNQUFMLENBQVlULEtBQVosRUFDR1UsSUFESCxDQUNRLGdCQUFRO0FBQ1pkLFVBQUlVLElBQUosQ0FBUztBQUNQSyxpQkFBUyxJQURGO0FBRVBKLGlCQUFTO0FBRkYsT0FBVDtBQUlELEtBTkgsRUFPR0ssS0FQSCxDQU9TLGVBQU87QUFDWmhCLFVBQUlPLE1BQUosQ0FBV0MsMEJBQVdTLHFCQUF0QixFQUE2Q1AsSUFBN0MsQ0FBa0RRLElBQUlQLE9BQXREO0FBQ0QsS0FUSDtBQVVELEdBaEJZO0FBaUJiUSxPQWpCYSxpQkFpQlBwQixHQWpCTyxFQWlCRkMsR0FqQkUsRUFpQkc7QUFBQSxpQ0FDV0MsZUFBWUMsb0JBQVosQ0FBaUNILElBQUlJLElBQXJDLENBRFg7QUFBQSxRQUNOQyxLQURNLDBCQUNOQSxLQURNO0FBQUEsUUFDQ0MsS0FERCwwQkFDQ0EsS0FERDs7QUFFZCxRQUFJQSxTQUFTQSxNQUFNQyxPQUFuQixFQUE0QjtBQUMxQk4sVUFBSU8sTUFBSixDQUFXQywwQkFBV0MsV0FBdEIsRUFBbUNDLElBQW5DLENBQXdDTCxNQUFNTSxPQUE5QztBQUNEO0FBQ0RTLFlBQVEsRUFBRUMsT0FBT2pCLE1BQU1pQixLQUFmLEVBQVIsRUFDR1AsSUFESCxDQUNRLGdCQUFRO0FBQ1osVUFBSSxDQUFDUSxJQUFMLEVBQVc7QUFDVHRCLFlBQ0dPLE1BREgsQ0FDVUMsMEJBQVdDLFdBRHJCLEVBRUdDLElBRkgsQ0FFUSxFQUFFUSxLQUFLLDJCQUFQLEVBRlI7QUFHRDtBQUNESyx5QkFBU0MsT0FBVCxDQUFpQnBCLE1BQU1xQixRQUF2QixFQUFpQ0gsS0FBS0csUUFBdEMsRUFBZ0QsVUFBQ1AsR0FBRCxFQUFNUSxPQUFOLEVBQWtCO0FBQ2hFLFlBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1oxQixjQUNHTyxNQURILENBQ1VDLDBCQUFXbUIsWUFEckIsRUFFR2pCLElBRkgsQ0FFUSxFQUFFUSxLQUFLLHFCQUFQLEVBRlI7QUFHRDtBQUNEVSwrQkFBSUMsSUFBSixDQUNFLEVBQUVDLElBQUlSLEtBQUtTLEdBQVgsRUFERixFQUVFQyx1QkFBVUMsTUFGWixFQUdFLEVBQUVDLFdBQVcsSUFBYixFQUhGLEVBSUUsVUFBU2hCLEdBQVQsRUFBY2lCLEtBQWQsRUFBcUI7QUFDbkJuQyxjQUFJVSxJQUFKLENBQVMsRUFBRUssU0FBUyxJQUFYLEVBQWlCb0IsWUFBakIsRUFBVDtBQUNELFNBTkg7QUFRRCxPQWREO0FBZUQsS0F0QkgsRUF1QkduQixLQXZCSCxDQXVCUyxlQUFPO0FBQ1poQixVQUFJTyxNQUFKLENBQVdDLDBCQUFXUyxxQkFBdEIsRUFBNkNQLElBQTdDLENBQWtEUSxHQUFsRDtBQUNELEtBekJIO0FBMEJELEdBaERZO0FBaURQa0IsTUFqRE87QUFBQSx5R0FpREZyQyxHQWpERSxFQWlER0MsR0FqREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQWtESkEsSUFBSVUsSUFBSixDQUFTWCxJQUFJdUIsSUFBYixDQWxESTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoidXNlci5jb250cm9sbGVyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VyU2VydmljZSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IEh0dHBTdGF0dXMgZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNpZ251cChyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNpZ251cFNjaGVtYShyZXEuYm9keSk7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gICAgVXNlci5jcmVhdGUodmFsdWUpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogXCJ1c2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCJcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH0sXG4gIGxvZ2luKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRlU2lnbnVwU2NoZW1hKHJlcS5ib2R5KTtcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xuICAgICAgcmVzLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgICBmaW5kT25lKHsgZW1haWw6IHZhbHVlLmVtYWlsIH0pXG4gICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgcmVzXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpXG4gICAgICAgICAgICAuanNvbih7IGVycjogXCJpbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYmNyeXB0anMuY29tcGFyZSh2YWx1ZS5wYXNzd29yZCwgdXNlci5wYXNzd29yZCwgKGVyciwgbWF0Y2hlZCkgPT4ge1xuICAgICAgICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5VTkFVVEhPUklaRUQpXG4gICAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludmFsaWQgY3JlZGVudGlhbHNcIiB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgand0LnNpZ24oXG4gICAgICAgICAgICB7IGlkOiB1c2VyLl9pZCB9LFxuICAgICAgICAgICAgZGV2Q29uZmlnLnNlY3JldCxcbiAgICAgICAgICAgIHsgZXhwaXJlc0luOiBcIjFkXCIgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVyciwgdG9rZW4pIHtcbiAgICAgICAgICAgICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCB0b2tlbiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xuICAgICAgfSk7XG4gIH0sXG4gIGFzeW5jIHRlc3QocmVxLCByZXMpIHtcbiAgICByZXR1cm4gcmVzLmpzb24ocmVxLnVzZXIpO1xuICB9XG59O1xuIl19