"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureJWTStrategy = undefined;

var _passportJwt = require("passport-jwt");

var _passportJwt2 = _interopRequireDefault(_passportJwt);

var _development = require("../../config/env/development");

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureJWTStrategy = exports.configureJWTStrategy = function configureJWTStrategy() {
  var opts = {};
  opts.jwtFromRequest = _passportJwt2.default.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = _development.devConfig.secret;
  _passport2.default.use(new _passportJwt2.default.Strategy(opts, function (payload, done) {
    _user2.default.findOne({ _id: payload.id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtand0LmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUpXVFN0cmF0ZWd5Iiwib3B0cyIsImp3dEZyb21SZXF1ZXN0IiwiUGFzc3BvcnRKV1QiLCJFeHRyYWN0Snd0IiwiZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuIiwic2VjcmV0T3JLZXkiLCJkZXZDb25maWciLCJzZWNyZXQiLCJwYXNzcG9ydCIsInVzZSIsIlN0cmF0ZWd5IiwicGF5bG9hZCIsImRvbmUiLCJVc2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwiZXJyIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsc0RBQXVCLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUN4QyxNQUFJQyxPQUFPLEVBQVg7QUFDQUEsT0FBS0MsY0FBTCxHQUFzQkMsc0JBQVlDLFVBQVosQ0FBdUJDLDJCQUF2QixFQUF0QjtBQUNBSixPQUFLSyxXQUFMLEdBQW1CQyx1QkFBVUMsTUFBN0I7QUFDQUMscUJBQVNDLEdBQVQsQ0FDRSxJQUFJUCxzQkFBWVEsUUFBaEIsQ0FBeUJWLElBQXpCLEVBQStCLFVBQVNXLE9BQVQsRUFBa0JDLElBQWxCLEVBQXdCO0FBQ3JEQyxtQkFBS0MsT0FBTCxDQUFhLEVBQUVDLEtBQUtKLFFBQVFLLEVBQWYsRUFBYixFQUFrQyxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDcEQsVUFBSUQsR0FBSixFQUFTO0FBQ1AsZUFBT0wsS0FBS0ssR0FBTCxFQUFVLEtBQVYsQ0FBUDtBQUNEO0FBQ0QsVUFBSUMsSUFBSixFQUFVO0FBQ1IsZUFBT04sS0FBSyxJQUFMLEVBQVdNLElBQVgsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU9OLEtBQUssSUFBTCxFQUFXLEtBQVgsQ0FBUDtBQUNEO0FBQ0YsS0FURDtBQVVELEdBWEQsQ0FERjtBQWNELENBbEJNIiwiZmlsZSI6InBhc3Nwb3J0LWp3dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXNzcG9ydEpXVCBmcm9tIFwicGFzc3BvcnQtand0XCI7XG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL3Jlc291cmNlcy91c2VyL3VzZXIubW9kZWxcIjtcbmltcG9ydCBwYXNzcG9ydCBmcm9tIFwicGFzc3BvcnRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZUpXVFN0cmF0ZWd5ID0gKCkgPT4ge1xuICB2YXIgb3B0cyA9IHt9O1xuICBvcHRzLmp3dEZyb21SZXF1ZXN0ID0gUGFzc3BvcnRKV1QuRXh0cmFjdEp3dC5mcm9tQXV0aEhlYWRlckFzQmVhcmVyVG9rZW4oKTtcbiAgb3B0cy5zZWNyZXRPcktleSA9IGRldkNvbmZpZy5zZWNyZXQ7XG4gIHBhc3Nwb3J0LnVzZShcbiAgICBuZXcgUGFzc3BvcnRKV1QuU3RyYXRlZ3kob3B0cywgZnVuY3Rpb24ocGF5bG9hZCwgZG9uZSkge1xuICAgICAgVXNlci5maW5kT25lKHsgX2lkOiBwYXlsb2FkLmlkIH0sIGZ1bmN0aW9uKGVyciwgdXNlcikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIGRvbmUoZXJyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gICk7XG59O1xuIl19