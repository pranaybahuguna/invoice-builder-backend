"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _user = require("./user.controller");

var _user2 = _interopRequireDefault(_user);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = exports.userRouter = _express2.default.Router();
userRouter.post("/signup", _user2.default.signup);
userRouter.post("/login", _user2.default.login);
userRouter.post("/test", _passport2.default.authenticate("jwt", { session: false }), _user2.default.test);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5yb3V0ZXIuanMiXSwibmFtZXMiOlsidXNlclJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJwb3N0IiwidXNlckNvbnRyb2xsZXIiLCJzaWdudXAiLCJsb2dpbiIsInBhc3Nwb3J0IiwiYXV0aGVudGljYXRlIiwic2Vzc2lvbiIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLGtDQUFhQyxrQkFBUUMsTUFBUixFQUFuQjtBQUNQRixXQUFXRyxJQUFYLENBQWdCLFNBQWhCLEVBQTJCQyxlQUFlQyxNQUExQztBQUNBTCxXQUFXRyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCQyxlQUFlRSxLQUF6QztBQUNBTixXQUFXRyxJQUFYLENBQ0UsT0FERixFQUVFSSxtQkFBU0MsWUFBVCxDQUFzQixLQUF0QixFQUE2QixFQUFFQyxTQUFTLEtBQVgsRUFBN0IsQ0FGRixFQUdFTCxlQUFlTSxJQUhqQiIsImZpbGUiOiJ1c2VyLnJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB1c2VyQ29udHJvbGxlciBmcm9tIFwiLi91c2VyLmNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHBhc3Nwb3J0IGZyb20gXCJwYXNzcG9ydFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG51c2VyUm91dGVyLnBvc3QoXCIvc2lnbnVwXCIsIHVzZXJDb250cm9sbGVyLnNpZ251cCk7XHJcbnVzZXJSb3V0ZXIucG9zdChcIi9sb2dpblwiLCB1c2VyQ29udHJvbGxlci5sb2dpbik7XHJcbnVzZXJSb3V0ZXIucG9zdChcclxuICBcIi90ZXN0XCIsXHJcbiAgcGFzc3BvcnQuYXV0aGVudGljYXRlKFwiand0XCIsIHsgc2Vzc2lvbjogZmFsc2UgfSksXHJcbiAgdXNlckNvbnRyb2xsZXIudGVzdFxyXG4pO1xyXG4iXX0=