"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureGoogleStrategy = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportGoogleOauth = require("passport-google-oauth");

var _passportGoogleOauth2 = _interopRequireDefault(_passportGoogleOauth);

var _development = require("./../../config/env/development");

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
var configureGoogleStrategy = exports.configureGoogleStrategy = function configureGoogleStrategy() {
  _passport2.default.use(new _passportGoogleOauth2.default.OAuth2Strategy({
    clientID: _development.devConfig.google.clientId,
    clientSecret: _development.devConfig.google.clientSecret,
    callbackURL: _development.devConfig.google.callbackURL
  }, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(accessToken, refreshToken, profile, done) {
      var user, newUser;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log("accessToken: ", accessToken);
              console.log("tokenSecret: ", refreshToken);
              console.log("profile: ", profile);
              _context.next = 6;
              return _user2.default.findOne({ "google.id": profile.id });

            case 6:
              user = _context.sent;

              if (!user) {
                _context.next = 11;
                break;
              }

              done(null, user);
              _context.next = 19;
              break;

            case 11:
              newUser = new _user2.default({});

              newUser.google.id = profile.id;
              newUser.google.token = accessToken;
              newUser.google.displayName = profile.displayName;
              newUser.google.email = profile.emails[0].value;
              _context.next = 18;
              return newUser.save();

            case 18:
              done(null, newUser);

            case 19:
              _context.next = 25;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](0);

              console.error(_context.t0);
              return _context.abrupt("return", done(_context.t0));

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 21]]);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }()));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtZ29vZ2xlLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUdvb2dsZVN0cmF0ZWd5IiwicGFzc3BvcnQiLCJ1c2UiLCJHb29nbGVTdHJhdGVneSIsIk9BdXRoMlN0cmF0ZWd5IiwiY2xpZW50SUQiLCJkZXZDb25maWciLCJnb29nbGUiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImNhbGxiYWNrVVJMIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJwcm9maWxlIiwiZG9uZSIsImNvbnNvbGUiLCJsb2ciLCJVc2VyIiwiZmluZE9uZSIsImlkIiwidXNlciIsIm5ld1VzZXIiLCJ0b2tlbiIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJlbWFpbHMiLCJ2YWx1ZSIsInNhdmUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLDREQUEwQixTQUExQkEsdUJBQTBCLEdBQU07QUFDM0NDLHFCQUFTQyxHQUFULENBQ0UsSUFBSUMsOEJBQWVDLGNBQW5CLENBQ0U7QUFDRUMsY0FBVUMsdUJBQVVDLE1BQVYsQ0FBaUJDLFFBRDdCO0FBRUVDLGtCQUFjSCx1QkFBVUMsTUFBVixDQUFpQkUsWUFGakM7QUFHRUMsaUJBQWFKLHVCQUFVQyxNQUFWLENBQWlCRztBQUhoQyxHQURGO0FBQUEsd0ZBTUUsaUJBQU9DLFdBQVAsRUFBb0JDLFlBQXBCLEVBQWtDQyxPQUFsQyxFQUEyQ0MsSUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0lDLHNCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkwsV0FBN0I7QUFDQUksc0JBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCSixZQUE3QjtBQUNBRyxzQkFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJILE9BQXpCO0FBUEo7QUFBQSxxQkFRdUJJLGVBQUtDLE9BQUwsQ0FBYSxFQUFFLGFBQWFMLFFBQVFNLEVBQXZCLEVBQWIsQ0FSdkI7O0FBQUE7QUFRVUMsa0JBUlY7O0FBQUEsbUJBU1FBLElBVFI7QUFBQTtBQUFBO0FBQUE7O0FBVU1OLG1CQUFLLElBQUwsRUFBV00sSUFBWDtBQVZOO0FBQUE7O0FBQUE7QUFZWUMscUJBWlosR0FZc0IsSUFBSUosY0FBSixDQUFTLEVBQVQsQ0FadEI7O0FBYU1JLHNCQUFRZCxNQUFSLENBQWVZLEVBQWYsR0FBb0JOLFFBQVFNLEVBQTVCO0FBQ0FFLHNCQUFRZCxNQUFSLENBQWVlLEtBQWYsR0FBdUJYLFdBQXZCO0FBQ0FVLHNCQUFRZCxNQUFSLENBQWVnQixXQUFmLEdBQTZCVixRQUFRVSxXQUFyQztBQUNBRixzQkFBUWQsTUFBUixDQUFlaUIsS0FBZixHQUF1QlgsUUFBUVksTUFBUixDQUFlLENBQWYsRUFBa0JDLEtBQXpDO0FBaEJOO0FBQUEscUJBaUJZTCxRQUFRTSxJQUFSLEVBakJaOztBQUFBO0FBa0JNYixtQkFBSyxJQUFMLEVBQVdPLE9BQVg7O0FBbEJOO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBcUJJTixzQkFBUWEsS0FBUjtBQXJCSiwrQ0FzQldkLGlCQXRCWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GOztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFrQ0QsQ0FuQ00iLCJmaWxlIjoicGFzc3BvcnQtZ29vZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhc3Nwb3J0IGZyb20gXCJwYXNzcG9ydFwiO1xyXG5pbXBvcnQgR29vZ2xlU3RyYXRlZ3kgZnJvbSBcInBhc3Nwb3J0LWdvb2dsZS1vYXV0aFwiO1xyXG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi8uLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9yZXNvdXJjZXMvdXNlci91c2VyLm1vZGVsXCI7XHJcblxyXG4vLyBVc2UgdGhlIEdvb2dsZVN0cmF0ZWd5IHdpdGhpbiBQYXNzcG9ydC5cclxuLy8gICBTdHJhdGVnaWVzIGluIHBhc3Nwb3J0IHJlcXVpcmUgYSBgdmVyaWZ5YCBmdW5jdGlvbiwgd2hpY2ggYWNjZXB0XHJcbi8vICAgY3JlZGVudGlhbHMgKGluIHRoaXMgY2FzZSwgYSB0b2tlbiwgdG9rZW5TZWNyZXQsIGFuZCBHb29nbGUgcHJvZmlsZSksIGFuZFxyXG4vLyAgIGludm9rZSBhIGNhbGxiYWNrIHdpdGggYSB1c2VyIG9iamVjdC5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZUdvb2dsZVN0cmF0ZWd5ID0gKCkgPT4ge1xyXG4gIHBhc3Nwb3J0LnVzZShcclxuICAgIG5ldyBHb29nbGVTdHJhdGVneS5PQXV0aDJTdHJhdGVneShcclxuICAgICAge1xyXG4gICAgICAgIGNsaWVudElEOiBkZXZDb25maWcuZ29vZ2xlLmNsaWVudElkLFxyXG4gICAgICAgIGNsaWVudFNlY3JldDogZGV2Q29uZmlnLmdvb2dsZS5jbGllbnRTZWNyZXQsXHJcbiAgICAgICAgY2FsbGJhY2tVUkw6IGRldkNvbmZpZy5nb29nbGUuY2FsbGJhY2tVUkxcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgKGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHByb2ZpbGUsIGRvbmUpID0+IHtcclxuICAgICAgICAvL1VzZXIuZmluZE9yQ3JlYXRlKHsgZ29vZ2xlSWQ6IHByb2ZpbGUuaWQgfSwgZnVuY3Rpb24oZXJyLCB1c2VyKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIGRvbmUoZXJyLCB1c2VyKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJhY2Nlc3NUb2tlbjogXCIsIGFjY2Vzc1Rva2VuKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW5TZWNyZXQ6IFwiLCByZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwcm9maWxlOiBcIiwgcHJvZmlsZSk7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgXCJnb29nbGUuaWRcIjogcHJvZmlsZS5pZCB9KTtcclxuICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIGRvbmUobnVsbCwgdXNlcik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoe30pO1xyXG4gICAgICAgICAgICBuZXdVc2VyLmdvb2dsZS5pZCA9IHByb2ZpbGUuaWQ7XHJcbiAgICAgICAgICAgIG5ld1VzZXIuZ29vZ2xlLnRva2VuID0gYWNjZXNzVG9rZW47XHJcbiAgICAgICAgICAgIG5ld1VzZXIuZ29vZ2xlLmRpc3BsYXlOYW1lID0gcHJvZmlsZS5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgbmV3VXNlci5nb29nbGUuZW1haWwgPSBwcm9maWxlLmVtYWlsc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgYXdhaXQgbmV3VXNlci5zYXZlKCk7XHJcbiAgICAgICAgICAgIGRvbmUobnVsbCwgbmV3VXNlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcbiJdfQ==