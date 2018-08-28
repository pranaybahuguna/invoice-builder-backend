"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureGithubStrategy = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportGithub = require("passport-github");

var _passportGithub2 = _interopRequireDefault(_passportGithub);

var _development = require("./../../config/env/development");

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureGithubStrategy = exports.configureGithubStrategy = function configureGithubStrategy() {
  _passport2.default.use(new _passportGithub2.default.Strategy({
    clientID: _development.devConfig.github.clientId,
    clientSecret: _development.devConfig.github.clientSecret,
    callbackURL: _development.devConfig.github.callbackURL
  }, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(token, refreshToken, profile, done) {
      var user, newUser;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log("accessToken: ", token);
              console.log("tokenSecret: ", refreshToken);
              console.log("profile: ", profile);
              _context.next = 6;
              return _user2.default.findOne({ "github.id": profile.id });

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

              newUser.github.id = profile.id;
              newUser.github.token = token;
              newUser.github.displayName = profile.displayName;
              newUser.github.email = profile.emails[0].value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtZ2l0aHViLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUdpdGh1YlN0cmF0ZWd5IiwicGFzc3BvcnQiLCJ1c2UiLCJHaXRodWJTdHJhdGVneSIsIlN0cmF0ZWd5IiwiY2xpZW50SUQiLCJkZXZDb25maWciLCJnaXRodWIiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImNhbGxiYWNrVVJMIiwidG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJwcm9maWxlIiwiZG9uZSIsImNvbnNvbGUiLCJsb2ciLCJVc2VyIiwiZmluZE9uZSIsImlkIiwidXNlciIsIm5ld1VzZXIiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiZW1haWxzIiwidmFsdWUiLCJzYXZlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsNERBQTBCLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUMzQ0MscUJBQVNDLEdBQVQsQ0FDRSxJQUFJQyx5QkFBZUMsUUFBbkIsQ0FDRTtBQUNFQyxjQUFVQyx1QkFBVUMsTUFBVixDQUFpQkMsUUFEN0I7QUFFRUMsa0JBQWNILHVCQUFVQyxNQUFWLENBQWlCRSxZQUZqQztBQUdFQyxpQkFBYUosdUJBQVVDLE1BQVYsQ0FBaUJHO0FBSGhDLEdBREY7QUFBQSx3RkFNRSxpQkFBT0MsS0FBUCxFQUFjQyxZQUFkLEVBQTRCQyxPQUE1QixFQUFxQ0MsSUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUlDLHNCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkwsS0FBN0I7QUFDQUksc0JBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCSixZQUE3QjtBQUNBRyxzQkFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJILE9BQXpCO0FBSko7QUFBQSxxQkFLdUJJLGVBQUtDLE9BQUwsQ0FBYSxFQUFFLGFBQWFMLFFBQVFNLEVBQXZCLEVBQWIsQ0FMdkI7O0FBQUE7QUFLVUMsa0JBTFY7O0FBQUEsbUJBTVFBLElBTlI7QUFBQTtBQUFBO0FBQUE7O0FBT01OLG1CQUFLLElBQUwsRUFBV00sSUFBWDtBQVBOO0FBQUE7O0FBQUE7QUFTWUMscUJBVFosR0FTc0IsSUFBSUosY0FBSixDQUFTLEVBQVQsQ0FUdEI7O0FBVU1JLHNCQUFRZCxNQUFSLENBQWVZLEVBQWYsR0FBb0JOLFFBQVFNLEVBQTVCO0FBQ0FFLHNCQUFRZCxNQUFSLENBQWVJLEtBQWYsR0FBdUJBLEtBQXZCO0FBQ0FVLHNCQUFRZCxNQUFSLENBQWVlLFdBQWYsR0FBNkJULFFBQVFTLFdBQXJDO0FBQ0FELHNCQUFRZCxNQUFSLENBQWVnQixLQUFmLEdBQXVCVixRQUFRVyxNQUFSLENBQWUsQ0FBZixFQUFrQkMsS0FBekM7QUFiTjtBQUFBLHFCQWNZSixRQUFRSyxJQUFSLEVBZFo7O0FBQUE7QUFlTVosbUJBQUssSUFBTCxFQUFXTyxPQUFYOztBQWZOO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBa0JJTixzQkFBUVksS0FBUjtBQWxCSiwrQ0FtQldiLGlCQW5CWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GOztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUErQkQsQ0FoQ00iLCJmaWxlIjoicGFzc3BvcnQtZ2l0aHViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhc3Nwb3J0IGZyb20gXCJwYXNzcG9ydFwiO1xuaW1wb3J0IEdpdGh1YlN0cmF0ZWd5IGZyb20gXCJwYXNzcG9ydC1naXRodWJcIjtcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9yZXNvdXJjZXMvdXNlci91c2VyLm1vZGVsXCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmVHaXRodWJTdHJhdGVneSA9ICgpID0+IHtcbiAgcGFzc3BvcnQudXNlKFxuICAgIG5ldyBHaXRodWJTdHJhdGVneS5TdHJhdGVneShcbiAgICAgIHtcbiAgICAgICAgY2xpZW50SUQ6IGRldkNvbmZpZy5naXRodWIuY2xpZW50SWQsXG4gICAgICAgIGNsaWVudFNlY3JldDogZGV2Q29uZmlnLmdpdGh1Yi5jbGllbnRTZWNyZXQsXG4gICAgICAgIGNhbGxiYWNrVVJMOiBkZXZDb25maWcuZ2l0aHViLmNhbGxiYWNrVVJMXG4gICAgICB9LFxuICAgICAgYXN5bmMgKHRva2VuLCByZWZyZXNoVG9rZW4sIHByb2ZpbGUsIGRvbmUpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFjY2Vzc1Rva2VuOiBcIiwgdG9rZW4pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW5TZWNyZXQ6IFwiLCByZWZyZXNoVG9rZW4pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZmlsZTogXCIsIHByb2ZpbGUpO1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBcImdpdGh1Yi5pZFwiOiBwcm9maWxlLmlkIH0pO1xuICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBkb25lKG51bGwsIHVzZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoe30pO1xuICAgICAgICAgICAgbmV3VXNlci5naXRodWIuaWQgPSBwcm9maWxlLmlkO1xuICAgICAgICAgICAgbmV3VXNlci5naXRodWIudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgIG5ld1VzZXIuZ2l0aHViLmRpc3BsYXlOYW1lID0gcHJvZmlsZS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIG5ld1VzZXIuZ2l0aHViLmVtYWlsID0gcHJvZmlsZS5lbWFpbHNbMF0udmFsdWU7XG4gICAgICAgICAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgbmV3VXNlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgKTtcbn07XG4iXX0=