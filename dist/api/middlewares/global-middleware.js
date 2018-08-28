"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalMiddleware = undefined;

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _swaggerUiExpress = require("swagger-ui-express");

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _swagger = require("../../config/swagger.json");

var _swagger2 = _interopRequireDefault(_swagger);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _expressSession = require("express-session");

var _expressSession2 = _interopRequireDefault(_expressSession);

var _passportJwt = require("./passport-jwt");

var _passportGoogle = require("./passport-google");

var _passportGithub = require("./passport-github");

var _development = require("../../config/env/development");

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

var _expressPdf = require("express-pdf");

var _expressPdf2 = _interopRequireDefault(_expressPdf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setGlobalMiddleware = exports.setGlobalMiddleware = function setGlobalMiddleware(app) {
  app.use(_express2.default.json());
  app.use(_express2.default.urlencoded({ extended: true }));
  app.use((0, _cors2.default)());
  app.use(_expressPdf2.default);
  app.use((0, _morgan2.default)("dev"));
  app.use(_passport2.default.initialize({ userProperty: "currentUser" }));
  app.use(_passport2.default.session());
  (0, _passportJwt.configureJWTStrategy)();
  (0, _passportGoogle.configureGoogleStrategy)();
  (0, _passportGithub.configureGithubStrategy)();
  app.use((0, _expressSession2.default)({
    secret: _development.devConfig.secret,
    resave: false,
    saveUninitialized: true
  }));
  _passport2.default.serializeUser(function (user, done) {
    done(null, user._id.toJSON());
  });

  _passport2.default.deserializeUser(function (id, done) {
    _user2.default.findById(id, function (err, user) {
      done(null, user);
    });
  });

  app.use("/api-docs", _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, { explorer: true }));
  app.get("failure", function (req, res) {
    return res.redirect("http://localhost:4200");
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvZ2xvYmFsLW1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsic2V0R2xvYmFsTWlkZGxld2FyZSIsImFwcCIsInVzZSIsImV4cHJlc3MiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicGRmIiwicGFzc3BvcnQiLCJpbml0aWFsaXplIiwidXNlclByb3BlcnR5Iiwic2Vzc2lvbiIsInNlY3JldCIsImRldkNvbmZpZyIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwic2VyaWFsaXplVXNlciIsInVzZXIiLCJkb25lIiwiX2lkIiwidG9KU09OIiwiZGVzZXJpYWxpemVVc2VyIiwiaWQiLCJVc2VyIiwiZmluZEJ5SWQiLCJlcnIiLCJzd2FnZ2VyVWkiLCJzZXJ2ZSIsInNldHVwIiwic3dhZ2dlckRvY3VtZW50IiwiZXhwbG9yZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJyZWRpcmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsb0RBQXNCLFNBQXRCQSxtQkFBc0IsTUFBTztBQUN4Q0MsTUFBSUMsR0FBSixDQUFRQyxrQkFBUUMsSUFBUixFQUFSO0FBQ0FILE1BQUlDLEdBQUosQ0FBUUMsa0JBQVFFLFVBQVIsQ0FBbUIsRUFBRUMsVUFBVSxJQUFaLEVBQW5CLENBQVI7QUFDQUwsTUFBSUMsR0FBSixDQUFRLHFCQUFSO0FBQ0FELE1BQUlDLEdBQUosQ0FBUUssb0JBQVI7QUFDQU4sTUFBSUMsR0FBSixDQUFRLHNCQUFPLEtBQVAsQ0FBUjtBQUNBRCxNQUFJQyxHQUFKLENBQVFNLG1CQUFTQyxVQUFULENBQW9CLEVBQUVDLGNBQWMsYUFBaEIsRUFBcEIsQ0FBUjtBQUNBVCxNQUFJQyxHQUFKLENBQVFNLG1CQUFTRyxPQUFULEVBQVI7QUFDQTtBQUNBO0FBQ0E7QUFDQVYsTUFBSUMsR0FBSixDQUNFLDhCQUFRO0FBQ05VLFlBQVFDLHVCQUFVRCxNQURaO0FBRU5FLFlBQVEsS0FGRjtBQUdOQyx1QkFBbUI7QUFIYixHQUFSLENBREY7QUFPQVAscUJBQVNRLGFBQVQsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ3JDQSxTQUFLLElBQUwsRUFBV0QsS0FBS0UsR0FBTCxDQUFTQyxNQUFULEVBQVg7QUFDRCxHQUZEOztBQUlBWixxQkFBU2EsZUFBVCxDQUF5QixVQUFDQyxFQUFELEVBQUtKLElBQUwsRUFBYztBQUNyQ0ssbUJBQUtDLFFBQUwsQ0FBY0YsRUFBZCxFQUFrQixVQUFDRyxHQUFELEVBQU1SLElBQU4sRUFBZTtBQUMvQkMsV0FBSyxJQUFMLEVBQVdELElBQVg7QUFDRCxLQUZEO0FBR0QsR0FKRDs7QUFNQWhCLE1BQUlDLEdBQUosQ0FDRSxXQURGLEVBRUV3QiwyQkFBVUMsS0FGWixFQUdFRCwyQkFBVUUsS0FBVixDQUFnQkMsaUJBQWhCLEVBQWlDLEVBQUVDLFVBQVUsSUFBWixFQUFqQyxDQUhGO0FBS0E3QixNQUFJOEIsR0FBSixDQUFRLFNBQVIsRUFBbUIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDL0IsV0FBT0EsSUFBSUMsUUFBSixDQUFhLHVCQUFiLENBQVA7QUFDRCxHQUZEO0FBR0QsQ0FwQ00iLCJmaWxlIjoiZ2xvYmFsLW1pZGRsZXdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nZ2VyIGZyb20gXCJtb3JnYW5cIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgc3dhZ2dlclVpIGZyb20gXCJzd2FnZ2VyLXVpLWV4cHJlc3NcIjtcbmltcG9ydCBzd2FnZ2VyRG9jdW1lbnQgZnJvbSBcIi4uLy4uL2NvbmZpZy9zd2FnZ2VyLmpzb25cIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XG5pbXBvcnQgc2Vzc2lvbiBmcm9tIFwiZXhwcmVzcy1zZXNzaW9uXCI7XG5pbXBvcnQgeyBjb25maWd1cmVKV1RTdHJhdGVneSB9IGZyb20gXCIuL3Bhc3Nwb3J0LWp3dFwiO1xuaW1wb3J0IHsgY29uZmlndXJlR29vZ2xlU3RyYXRlZ3kgfSBmcm9tIFwiLi9wYXNzcG9ydC1nb29nbGVcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZUdpdGh1YlN0cmF0ZWd5IH0gZnJvbSBcIi4vcGFzc3BvcnQtZ2l0aHViXCI7XG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL3Jlc291cmNlcy91c2VyL3VzZXIubW9kZWxcIjtcbmltcG9ydCBwZGYgZnJvbSBcImV4cHJlc3MtcGRmXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxNaWRkbGV3YXJlID0gYXBwID0+IHtcbiAgYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG4gIGFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuICBhcHAudXNlKGNvcnMoKSk7XG4gIGFwcC51c2UocGRmKTtcbiAgYXBwLnVzZShsb2dnZXIoXCJkZXZcIikpO1xuICBhcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoeyB1c2VyUHJvcGVydHk6IFwiY3VycmVudFVzZXJcIiB9KSk7XG4gIGFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcbiAgY29uZmlndXJlSldUU3RyYXRlZ3koKTtcbiAgY29uZmlndXJlR29vZ2xlU3RyYXRlZ3koKTtcbiAgY29uZmlndXJlR2l0aHViU3RyYXRlZ3koKTtcbiAgYXBwLnVzZShcbiAgICBzZXNzaW9uKHtcbiAgICAgIHNlY3JldDogZGV2Q29uZmlnLnNlY3JldCxcbiAgICAgIHJlc2F2ZTogZmFsc2UsXG4gICAgICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZVxuICAgIH0pXG4gICk7XG4gIHBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXIoKHVzZXIsIGRvbmUpID0+IHtcbiAgICBkb25lKG51bGwsIHVzZXIuX2lkLnRvSlNPTigpKTtcbiAgfSk7XG5cbiAgcGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKChpZCwgZG9uZSkgPT4ge1xuICAgIFVzZXIuZmluZEJ5SWQoaWQsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgIGRvbmUobnVsbCwgdXNlcik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGFwcC51c2UoXG4gICAgXCIvYXBpLWRvY3NcIixcbiAgICBzd2FnZ2VyVWkuc2VydmUsXG4gICAgc3dhZ2dlclVpLnNldHVwKHN3YWdnZXJEb2N1bWVudCwgeyBleHBsb3JlcjogdHJ1ZSB9KVxuICApO1xuICBhcHAuZ2V0KFwiZmFpbHVyZVwiLCAocmVxLCByZXMpID0+IHtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KFwiaHR0cDovL2xvY2FsaG9zdDo0MjAwXCIpO1xuICB9KTtcbn07XG4iXX0=