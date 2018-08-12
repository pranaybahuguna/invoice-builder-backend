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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtand0LmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUpXVFN0cmF0ZWd5Iiwib3B0cyIsImp3dEZyb21SZXF1ZXN0IiwiUGFzc3BvcnRKV1QiLCJFeHRyYWN0Snd0IiwiZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuIiwic2VjcmV0T3JLZXkiLCJkZXZDb25maWciLCJzZWNyZXQiLCJwYXNzcG9ydCIsInVzZSIsIlN0cmF0ZWd5IiwicGF5bG9hZCIsImRvbmUiLCJVc2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwiZXJyIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsc0RBQXVCLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUN4QyxNQUFJQyxPQUFPLEVBQVg7QUFDQUEsT0FBS0MsY0FBTCxHQUFzQkMsc0JBQVlDLFVBQVosQ0FBdUJDLDJCQUF2QixFQUF0QjtBQUNBSixPQUFLSyxXQUFMLEdBQW1CQyx1QkFBVUMsTUFBN0I7QUFDQUMscUJBQVNDLEdBQVQsQ0FDRSxJQUFJUCxzQkFBWVEsUUFBaEIsQ0FBeUJWLElBQXpCLEVBQStCLFVBQVNXLE9BQVQsRUFBa0JDLElBQWxCLEVBQXdCO0FBQ3JEQyxtQkFBS0MsT0FBTCxDQUFhLEVBQUVDLEtBQUtKLFFBQVFLLEVBQWYsRUFBYixFQUFrQyxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDcEQsVUFBSUQsR0FBSixFQUFTO0FBQ1AsZUFBT0wsS0FBS0ssR0FBTCxFQUFVLEtBQVYsQ0FBUDtBQUNEO0FBQ0QsVUFBSUMsSUFBSixFQUFVO0FBQ1IsZUFBT04sS0FBSyxJQUFMLEVBQVdNLElBQVgsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU9OLEtBQUssSUFBTCxFQUFXLEtBQVgsQ0FBUDtBQUNBO0FBQ0Q7QUFDRixLQVZEO0FBV0QsR0FaRCxDQURGO0FBZUQsQ0FuQk0iLCJmaWxlIjoicGFzc3BvcnQtand0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhc3Nwb3J0SldUIGZyb20gXCJwYXNzcG9ydC1qd3RcIjtcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gXCJwYXNzcG9ydFwiO1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJlSldUU3RyYXRlZ3kgPSAoKSA9PiB7XG4gIHZhciBvcHRzID0ge307XG4gIG9wdHMuand0RnJvbVJlcXVlc3QgPSBQYXNzcG9ydEpXVC5FeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpO1xuICBvcHRzLnNlY3JldE9yS2V5ID0gZGV2Q29uZmlnLnNlY3JldDtcbiAgcGFzc3BvcnQudXNlKFxuICAgIG5ldyBQYXNzcG9ydEpXVC5TdHJhdGVneShvcHRzLCBmdW5jdGlvbihwYXlsb2FkLCBkb25lKSB7XG4gICAgICBVc2VyLmZpbmRPbmUoeyBfaWQ6IHBheWxvYWQuaWQgfSwgZnVuY3Rpb24oZXJyLCB1c2VyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gZG9uZShlcnIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAvLyBvciB5b3UgY291bGQgY3JlYXRlIGEgbmV3IGFjY291bnRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgKTtcbn07XG4iXX0=