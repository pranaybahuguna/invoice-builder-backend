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
        // or you could create a new account
      }
    });
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtand0LmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUpXVFN0cmF0ZWd5Iiwib3B0cyIsImp3dEZyb21SZXF1ZXN0IiwiUGFzc3BvcnRKV1QiLCJFeHRyYWN0Snd0IiwiZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuIiwic2VjcmV0T3JLZXkiLCJkZXZDb25maWciLCJzZWNyZXQiLCJwYXNzcG9ydCIsInVzZSIsIlN0cmF0ZWd5IiwicGF5bG9hZCIsImRvbmUiLCJVc2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwiZXJyIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsc0RBQXVCLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUN4QyxNQUFJQyxPQUFPLEVBQVg7QUFDQUEsT0FBS0MsY0FBTCxHQUFzQkMsc0JBQVlDLFVBQVosQ0FBdUJDLDJCQUF2QixFQUF0QjtBQUNBSixPQUFLSyxXQUFMLEdBQW1CQyx1QkFBVUMsTUFBN0I7QUFDQUMscUJBQVNDLEdBQVQsQ0FDRSxJQUFJUCxzQkFBWVEsUUFBaEIsQ0FBeUJWLElBQXpCLEVBQStCLFVBQVNXLE9BQVQsRUFBa0JDLElBQWxCLEVBQXdCO0FBQ3JEQyxtQkFBS0MsT0FBTCxDQUFhLEVBQUVDLEtBQUtKLFFBQVFLLEVBQWYsRUFBYixFQUFrQyxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDcEQsVUFBSUQsR0FBSixFQUFTO0FBQ1AsZUFBT0wsS0FBS0ssR0FBTCxFQUFVLEtBQVYsQ0FBUDtBQUNEO0FBQ0QsVUFBSUMsSUFBSixFQUFVO0FBQ1IsZUFBT04sS0FBSyxJQUFMLEVBQVdNLElBQVgsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU9OLEtBQUssSUFBTCxFQUFXLEtBQVgsQ0FBUDtBQUNBO0FBQ0Q7QUFDRixLQVZEO0FBV0QsR0FaRCxDQURGO0FBZUQsQ0FuQk0iLCJmaWxlIjoicGFzc3BvcnQtand0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhc3Nwb3J0SldUIGZyb20gXCJwYXNzcG9ydC1qd3RcIjtcclxuaW1wb3J0IHsgZGV2Q29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL3Jlc291cmNlcy91c2VyL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHBhc3Nwb3J0IGZyb20gXCJwYXNzcG9ydFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZUpXVFN0cmF0ZWd5ID0gKCkgPT4ge1xyXG4gIHZhciBvcHRzID0ge307XHJcbiAgb3B0cy5qd3RGcm9tUmVxdWVzdCA9IFBhc3Nwb3J0SldULkV4dHJhY3RKd3QuZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuKCk7XHJcbiAgb3B0cy5zZWNyZXRPcktleSA9IGRldkNvbmZpZy5zZWNyZXQ7XHJcbiAgcGFzc3BvcnQudXNlKFxyXG4gICAgbmV3IFBhc3Nwb3J0SldULlN0cmF0ZWd5KG9wdHMsIGZ1bmN0aW9uKHBheWxvYWQsIGRvbmUpIHtcclxuICAgICAgVXNlci5maW5kT25lKHsgX2lkOiBwYXlsb2FkLmlkIH0sIGZ1bmN0aW9uKGVyciwgdXNlcikge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIHJldHVybiBkb25lKGVyciwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgIC8vIG9yIHlvdSBjb3VsZCBjcmVhdGUgYSBuZXcgYWNjb3VudFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICk7XHJcbn07XHJcbiJdfQ==