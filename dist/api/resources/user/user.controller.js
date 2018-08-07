"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require("./user.service");

var _user2 = _interopRequireDefault(_user);

var _user3 = require("./user.model");

var _user4 = _interopRequireDefault(_user3);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signup: function signup(req, res) {
    var _userService$validate = _user2.default.validateSignupSchema(req.body),
        value = _userService$validate.value,
        error = _userService$validate.error;

    if (error && error.details) {
      res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message);
    }
    _user4.default.create(value).then(function (user) {
      res.json({ success: true, message: "user created successfully" });
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  login: function login(req, res) {
    var _userService$validate2 = _user2.default.validateSignupSchema(req.body),
        value = _userService$validate2.value,
        error = _userService$validate2.error;

    if (error && error.details) {
      res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message);
    }
    _user4.default.findOne({ email: value.email }).then(function (user) {
      if (!user) {
        res.status(_httpStatusCodes2.default.BAD_REQUEST).json({ err: "invalid email or password" });
      }
      var matched = _bcrypt2.default.compare(value.password, user.password);
      if (!matched) {
        res.status(_httpStatusCodes2.default.UNAUTHORIZED).json({ err: "invalid credentials" });
      }
      res.json({ success: true, message: "logged in successfully" });
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTaWdudXBTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwibWVzc2FnZSIsIlVzZXIiLCJjcmVhdGUiLCJ0aGVuIiwic3VjY2VzcyIsImNhdGNoIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZXJyIiwibG9naW4iLCJmaW5kT25lIiwiZW1haWwiLCJ1c2VyIiwibWF0Y2hlZCIsImJjcnlwdCIsImNvbXBhcmUiLCJwYXNzd29yZCIsIlVOQVVUSE9SSVpFRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiQSxRQURhLGtCQUNOQyxHQURNLEVBQ0RDLEdBREMsRUFDSTtBQUFBLGdDQUNVQyxlQUFZQyxvQkFBWixDQUFpQ0gsSUFBSUksSUFBckMsQ0FEVjtBQUFBLFFBQ1BDLEtBRE8seUJBQ1BBLEtBRE87QUFBQSxRQUNBQyxLQURBLHlCQUNBQSxLQURBOztBQUVmLFFBQUlBLFNBQVNBLE1BQU1DLE9BQW5CLEVBQTRCO0FBQzFCTixVQUFJTyxNQUFKLENBQVdDLDBCQUFXQyxXQUF0QixFQUFtQ0MsSUFBbkMsQ0FBd0NMLE1BQU1NLE9BQTlDO0FBQ0Q7QUFDREMsbUJBQUtDLE1BQUwsQ0FBWVQsS0FBWixFQUNHVSxJQURILENBQ1EsZ0JBQVE7QUFDWmQsVUFBSVUsSUFBSixDQUFTLEVBQUVLLFNBQVMsSUFBWCxFQUFpQkosU0FBUywyQkFBMUIsRUFBVDtBQUNELEtBSEgsRUFJR0ssS0FKSCxDQUlTO0FBQUEsYUFBT2hCLElBQUlPLE1BQUosQ0FBV0MsMEJBQVdTLHFCQUF0QixFQUE2Q1AsSUFBN0MsQ0FBa0RRLEdBQWxELENBQVA7QUFBQSxLQUpUO0FBS0QsR0FYWTtBQVliQyxPQVphLGlCQVlQcEIsR0FaTyxFQVlGQyxHQVpFLEVBWUc7QUFBQSxpQ0FDV0MsZUFBWUMsb0JBQVosQ0FBaUNILElBQUlJLElBQXJDLENBRFg7QUFBQSxRQUNOQyxLQURNLDBCQUNOQSxLQURNO0FBQUEsUUFDQ0MsS0FERCwwQkFDQ0EsS0FERDs7QUFFZCxRQUFJQSxTQUFTQSxNQUFNQyxPQUFuQixFQUE0QjtBQUMxQk4sVUFBSU8sTUFBSixDQUFXQywwQkFBV0MsV0FBdEIsRUFBbUNDLElBQW5DLENBQXdDTCxNQUFNTSxPQUE5QztBQUNEO0FBQ0RDLG1CQUFLUSxPQUFMLENBQWEsRUFBRUMsT0FBT2pCLE1BQU1pQixLQUFmLEVBQWIsRUFDR1AsSUFESCxDQUNRLGdCQUFRO0FBQ1osVUFBSSxDQUFDUSxJQUFMLEVBQVc7QUFDVHRCLFlBQ0dPLE1BREgsQ0FDVUMsMEJBQVdDLFdBRHJCLEVBRUdDLElBRkgsQ0FFUSxFQUFFUSxLQUFLLDJCQUFQLEVBRlI7QUFHRDtBQUNELFVBQU1LLFVBQVVDLGlCQUFPQyxPQUFQLENBQWVyQixNQUFNc0IsUUFBckIsRUFBK0JKLEtBQUtJLFFBQXBDLENBQWhCO0FBQ0EsVUFBSSxDQUFDSCxPQUFMLEVBQWM7QUFDWnZCLFlBQ0dPLE1BREgsQ0FDVUMsMEJBQVdtQixZQURyQixFQUVHakIsSUFGSCxDQUVRLEVBQUVRLEtBQUsscUJBQVAsRUFGUjtBQUdEO0FBQ0RsQixVQUFJVSxJQUFKLENBQVMsRUFBRUssU0FBUyxJQUFYLEVBQWlCSixTQUFTLHdCQUExQixFQUFUO0FBQ0QsS0FkSCxFQWVHSyxLQWZILENBZVM7QUFBQSxhQUFPaEIsSUFBSU8sTUFBSixDQUFXQywwQkFBV1MscUJBQXRCLEVBQTZDUCxJQUE3QyxDQUFrRFEsR0FBbEQsQ0FBUDtBQUFBLEtBZlQ7QUFnQkQ7QUFqQ1ksQyIsImZpbGUiOiJ1c2VyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlclNlcnZpY2UgZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IEh0dHBTdGF0dXMgZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNpZ251cChyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRlU2lnbnVwU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIFVzZXIuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAudGhlbih1c2VyID0+IHtcclxuICAgICAgICByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwidXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfSxcclxuICBsb2dpbihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRlU2lnbnVwU2NoZW1hKHJlcS5ib2R5KTtcclxuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIFVzZXIuZmluZE9uZSh7IGVtYWlsOiB2YWx1ZS5lbWFpbCB9KVxyXG4gICAgICAudGhlbih1c2VyID0+IHtcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIHJlc1xyXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpXHJcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludmFsaWQgZW1haWwgb3IgcGFzc3dvcmRcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlZCA9IGJjcnlwdC5jb21wYXJlKHZhbHVlLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICBpZiAoIW1hdGNoZWQpIHtcclxuICAgICAgICAgIHJlc1xyXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuVU5BVVRIT1JJWkVEKVxyXG4gICAgICAgICAgICAuanNvbih7IGVycjogXCJpbnZhbGlkIGNyZWRlbnRpYWxzXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJsb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9XHJcbn07XHJcbiJdfQ==