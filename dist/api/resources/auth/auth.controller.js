"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _development = require("../../../config/env/development");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  sendJWTToken: function sendJWTToken(req, res) {
    var token = _jsonwebtoken2.default.sign({ id: req.currentUser._id }, _development.devConfig.secret, { expiresIn: "1d"
      //function(err, token) {
      // return res.json({ success: true, token });
      //}
    });
    res.redirect(_development.devConfig.frontendURL + "/dashboard/invoices/?token=" + token);
  },
  authenticate: function authenticate(req, res) {
    return res.send(true);
  },
  logout: function logout(req, res) {
    req.logout();
    return res.json({ success: true });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNlbmRKV1RUb2tlbiIsInJlcSIsInJlcyIsInRva2VuIiwiand0Iiwic2lnbiIsImlkIiwiY3VycmVudFVzZXIiLCJfaWQiLCJkZXZDb25maWciLCJzZWNyZXQiLCJleHBpcmVzSW4iLCJyZWRpcmVjdCIsImZyb250ZW5kVVJMIiwiYXV0aGVudGljYXRlIiwic2VuZCIsImxvZ291dCIsImpzb24iLCJzdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O2tCQUVlO0FBQ2JBLGNBRGEsd0JBQ0FDLEdBREEsRUFDS0MsR0FETCxFQUNVO0FBQ3JCLFFBQU1DLFFBQVFDLHVCQUFJQyxJQUFKLENBQ1osRUFBRUMsSUFBSUwsSUFBSU0sV0FBSixDQUFnQkMsR0FBdEIsRUFEWSxFQUVaQyx1QkFBVUMsTUFGRSxFQUdaLEVBQUVDLFdBQVc7QUFDYjtBQUNBO0FBQ0E7QUFIQSxLQUhZLENBQWQ7QUFRQVQsUUFBSVUsUUFBSixDQUFnQkgsdUJBQVVJLFdBQTFCLG1DQUFtRVYsS0FBbkU7QUFDRCxHQVhZO0FBYWJXLGNBYmEsd0JBYUFiLEdBYkEsRUFhS0MsR0FiTCxFQWFVO0FBQ3JCLFdBQU9BLElBQUlhLElBQUosQ0FBUyxJQUFULENBQVA7QUFDRCxHQWZZO0FBZ0JiQyxRQWhCYSxrQkFnQk5mLEdBaEJNLEVBZ0JEQyxHQWhCQyxFQWdCSTtBQUNmRCxRQUFJZSxNQUFKO0FBQ0EsV0FBT2QsSUFBSWUsSUFBSixDQUFTLEVBQUVDLFNBQVMsSUFBWCxFQUFULENBQVA7QUFDRDtBQW5CWSxDIiwiZmlsZSI6ImF1dGguY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IHsgZGV2Q29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZW5kSldUVG9rZW4ocmVxLCByZXMpIHtcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxuICAgICAgeyBpZDogcmVxLmN1cnJlbnRVc2VyLl9pZCB9LFxuICAgICAgZGV2Q29uZmlnLnNlY3JldCxcbiAgICAgIHsgZXhwaXJlc0luOiBcIjFkXCIgfVxuICAgICAgLy9mdW5jdGlvbihlcnIsIHRva2VuKSB7XG4gICAgICAvLyByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCB0b2tlbiB9KTtcbiAgICAgIC8vfVxuICAgICk7XG4gICAgcmVzLnJlZGlyZWN0KGAke2RldkNvbmZpZy5mcm9udGVuZFVSTH0vZGFzaGJvYXJkL2ludm9pY2VzLz90b2tlbj0ke3Rva2VufWApO1xuICB9LFxuXG4gIGF1dGhlbnRpY2F0ZShyZXEsIHJlcykge1xuICAgIHJldHVybiByZXMuc2VuZCh0cnVlKTtcbiAgfSxcbiAgbG9nb3V0KHJlcSwgcmVzKSB7XG4gICAgcmVxLmxvZ291dCgpO1xuICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gIH1cbn07XG4iXX0=