"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureGoogleStrategy = undefined;

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportGoogleOauth = require("passport-google-oauth");

var _passportGoogleOauth2 = _interopRequireDefault(_passportGoogleOauth);

var _development = require("./../../config/env/development");

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
  }, function (accessToken, refreshToken, profile, done) {
    //User.findOrCreate({ googleId: profile.id }, function(err, user) {
    // return done(err, user);
    // });
    console.log("accessToken: ", accessToken);
    console.log("tokenSecret: ", refreshToken);
    console.log("profile: ", profile);
    console.log("done: ", done);
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtZ29vZ2xlLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUdvb2dsZVN0cmF0ZWd5IiwicGFzc3BvcnQiLCJ1c2UiLCJHb29nbGVTdHJhdGVneSIsIk9BdXRoMlN0cmF0ZWd5IiwiY2xpZW50SUQiLCJkZXZDb25maWciLCJnb29nbGUiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImNhbGxiYWNrVVJMIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJwcm9maWxlIiwiZG9uZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLDREQUEwQixTQUExQkEsdUJBQTBCLEdBQU07QUFDM0NDLHFCQUFTQyxHQUFULENBQ0UsSUFBSUMsOEJBQWVDLGNBQW5CLENBQ0U7QUFDRUMsY0FBVUMsdUJBQVVDLE1BQVYsQ0FBaUJDLFFBRDdCO0FBRUVDLGtCQUFjSCx1QkFBVUMsTUFBVixDQUFpQkUsWUFGakM7QUFHRUMsaUJBQWFKLHVCQUFVQyxNQUFWLENBQWlCRztBQUhoQyxHQURGLEVBTUUsVUFBQ0MsV0FBRCxFQUFjQyxZQUFkLEVBQTRCQyxPQUE1QixFQUFxQ0MsSUFBckMsRUFBOEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCTCxXQUE3QjtBQUNBSSxZQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkosWUFBN0I7QUFDQUcsWUFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJILE9BQXpCO0FBQ0FFLFlBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixJQUF0QjtBQUNELEdBZEgsQ0FERjtBQWtCRCxDQW5CTSIsImZpbGUiOiJwYXNzcG9ydC1nb29nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmltcG9ydCBHb29nbGVTdHJhdGVneSBmcm9tIFwicGFzc3BvcnQtZ29vZ2xlLW9hdXRoXCI7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLy4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcclxuXHJcbi8vIFVzZSB0aGUgR29vZ2xlU3RyYXRlZ3kgd2l0aGluIFBhc3Nwb3J0LlxyXG4vLyAgIFN0cmF0ZWdpZXMgaW4gcGFzc3BvcnQgcmVxdWlyZSBhIGB2ZXJpZnlgIGZ1bmN0aW9uLCB3aGljaCBhY2NlcHRcclxuLy8gICBjcmVkZW50aWFscyAoaW4gdGhpcyBjYXNlLCBhIHRva2VuLCB0b2tlblNlY3JldCwgYW5kIEdvb2dsZSBwcm9maWxlKSwgYW5kXHJcbi8vICAgaW52b2tlIGEgY2FsbGJhY2sgd2l0aCBhIHVzZXIgb2JqZWN0LlxyXG5leHBvcnQgY29uc3QgY29uZmlndXJlR29vZ2xlU3RyYXRlZ3kgPSAoKSA9PiB7XHJcbiAgcGFzc3BvcnQudXNlKFxyXG4gICAgbmV3IEdvb2dsZVN0cmF0ZWd5Lk9BdXRoMlN0cmF0ZWd5KFxyXG4gICAgICB7XHJcbiAgICAgICAgY2xpZW50SUQ6IGRldkNvbmZpZy5nb29nbGUuY2xpZW50SWQsXHJcbiAgICAgICAgY2xpZW50U2VjcmV0OiBkZXZDb25maWcuZ29vZ2xlLmNsaWVudFNlY3JldCxcclxuICAgICAgICBjYWxsYmFja1VSTDogZGV2Q29uZmlnLmdvb2dsZS5jYWxsYmFja1VSTFxyXG4gICAgICB9LFxyXG4gICAgICAoYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgcHJvZmlsZSwgZG9uZSkgPT4ge1xyXG4gICAgICAgIC8vVXNlci5maW5kT3JDcmVhdGUoeyBnb29nbGVJZDogcHJvZmlsZS5pZCB9LCBmdW5jdGlvbihlcnIsIHVzZXIpIHtcclxuICAgICAgICAvLyByZXR1cm4gZG9uZShlcnIsIHVzZXIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWNjZXNzVG9rZW46IFwiLCBhY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlblNlY3JldDogXCIsIHJlZnJlc2hUb2tlbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9maWxlOiBcIiwgcHJvZmlsZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkb25lOiBcIiwgZG9uZSk7XHJcbiAgICAgIH1cclxuICAgIClcclxuICApO1xyXG59O1xyXG4iXX0=