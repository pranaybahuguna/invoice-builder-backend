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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtZ29vZ2xlLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUdvb2dsZVN0cmF0ZWd5IiwicGFzc3BvcnQiLCJ1c2UiLCJHb29nbGVTdHJhdGVneSIsIk9BdXRoMlN0cmF0ZWd5IiwiY2xpZW50SUQiLCJkZXZDb25maWciLCJnb29nbGUiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImNhbGxiYWNrVVJMIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJwcm9maWxlIiwiZG9uZSIsImNvbnNvbGUiLCJsb2ciLCJVc2VyIiwiZmluZE9uZSIsImlkIiwidXNlciIsIm5ld1VzZXIiLCJ0b2tlbiIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJlbWFpbHMiLCJ2YWx1ZSIsInNhdmUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSw0REFBMEIsU0FBMUJBLHVCQUEwQixHQUFNO0FBQzNDQyxxQkFBU0MsR0FBVCxDQUNFLElBQUlDLDhCQUFlQyxjQUFuQixDQUNFO0FBQ0VDLGNBQVVDLHVCQUFVQyxNQUFWLENBQWlCQyxRQUQ3QjtBQUVFQyxrQkFBY0gsdUJBQVVDLE1BQVYsQ0FBaUJFLFlBRmpDO0FBR0VDLGlCQUFhSix1QkFBVUMsTUFBVixDQUFpQkc7QUFIaEMsR0FERjtBQUFBLHdGQU1FLGlCQUFPQyxXQUFQLEVBQW9CQyxZQUFwQixFQUFrQ0MsT0FBbEMsRUFBMkNDLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVJQyxzQkFBUUMsR0FBUixDQUFZLGVBQVosRUFBNkJMLFdBQTdCO0FBQ0FJLHNCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkosWUFBN0I7QUFDQUcsc0JBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSCxPQUF6QjtBQUpKO0FBQUEscUJBS3VCSSxlQUFLQyxPQUFMLENBQWEsRUFBRSxhQUFhTCxRQUFRTSxFQUF2QixFQUFiLENBTHZCOztBQUFBO0FBS1VDLGtCQUxWOztBQUFBLG1CQU1RQSxJQU5SO0FBQUE7QUFBQTtBQUFBOztBQU9NTixtQkFBSyxJQUFMLEVBQVdNLElBQVg7QUFQTjtBQUFBOztBQUFBO0FBU1lDLHFCQVRaLEdBU3NCLElBQUlKLGNBQUosQ0FBUyxFQUFULENBVHRCOztBQVVNSSxzQkFBUWQsTUFBUixDQUFlWSxFQUFmLEdBQW9CTixRQUFRTSxFQUE1QjtBQUNBRSxzQkFBUWQsTUFBUixDQUFlZSxLQUFmLEdBQXVCWCxXQUF2QjtBQUNBVSxzQkFBUWQsTUFBUixDQUFlZ0IsV0FBZixHQUE2QlYsUUFBUVUsV0FBckM7QUFDQUYsc0JBQVFkLE1BQVIsQ0FBZWlCLEtBQWYsR0FBdUJYLFFBQVFZLE1BQVIsQ0FBZSxDQUFmLEVBQWtCQyxLQUF6QztBQWJOO0FBQUEscUJBY1lMLFFBQVFNLElBQVIsRUFkWjs7QUFBQTtBQWVNYixtQkFBSyxJQUFMLEVBQVdPLE9BQVg7O0FBZk47QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFrQklOLHNCQUFRYSxLQUFSO0FBbEJKLCtDQW1CV2QsaUJBbkJYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQStCRCxDQWhDTSIsImZpbGUiOiJwYXNzcG9ydC1nb29nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XG5pbXBvcnQgR29vZ2xlU3RyYXRlZ3kgZnJvbSBcInBhc3Nwb3J0LWdvb2dsZS1vYXV0aFwiO1xuaW1wb3J0IHsgZGV2Q29uZmlnIH0gZnJvbSBcIi4vLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL3Jlc291cmNlcy91c2VyL3VzZXIubW9kZWxcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZUdvb2dsZVN0cmF0ZWd5ID0gKCkgPT4ge1xuICBwYXNzcG9ydC51c2UoXG4gICAgbmV3IEdvb2dsZVN0cmF0ZWd5Lk9BdXRoMlN0cmF0ZWd5KFxuICAgICAge1xuICAgICAgICBjbGllbnRJRDogZGV2Q29uZmlnLmdvb2dsZS5jbGllbnRJZCxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBkZXZDb25maWcuZ29vZ2xlLmNsaWVudFNlY3JldCxcbiAgICAgICAgY2FsbGJhY2tVUkw6IGRldkNvbmZpZy5nb29nbGUuY2FsbGJhY2tVUkxcbiAgICAgIH0sXG4gICAgICBhc3luYyAoYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgcHJvZmlsZSwgZG9uZSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNjZXNzVG9rZW46IFwiLCBhY2Nlc3NUb2tlbik7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlblNlY3JldDogXCIsIHJlZnJlc2hUb2tlbik7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJwcm9maWxlOiBcIiwgcHJvZmlsZSk7XG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IFwiZ29vZ2xlLmlkXCI6IHByb2ZpbGUuaWQgfSk7XG4gICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgdXNlcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcih7fSk7XG4gICAgICAgICAgICBuZXdVc2VyLmdvb2dsZS5pZCA9IHByb2ZpbGUuaWQ7XG4gICAgICAgICAgICBuZXdVc2VyLmdvb2dsZS50b2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgbmV3VXNlci5nb29nbGUuZGlzcGxheU5hbWUgPSBwcm9maWxlLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgbmV3VXNlci5nb29nbGUuZW1haWwgPSBwcm9maWxlLmVtYWlsc1swXS52YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xuICAgICAgICAgICAgZG9uZShudWxsLCBuZXdVc2VyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICApO1xufTtcbiJdfQ==