"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _client = require("./client.controller");

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientRouter = exports.clientRouter = _express2.default.Router();

clientRouter.route("/").post(_client2.default.create);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQucm91dGVyLmpzIl0sIm5hbWVzIjpbImNsaWVudFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJyb3V0ZSIsInBvc3QiLCJjbGllbnRDb250cm9sbGVyIiwiY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBQ08sSUFBTUEsc0NBQWVDLGtCQUFRQyxNQUFSLEVBQXJCOztBQUVQRixhQUFhRyxLQUFiLENBQW1CLEdBQW5CLEVBQXdCQyxJQUF4QixDQUE2QkMsaUJBQWlCQyxNQUE5QyIsImZpbGUiOiJjbGllbnQucm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjbGllbnRDb250cm9sbGVyIGZyb20gXCIuL2NsaWVudC5jb250cm9sbGVyXCI7XG5leHBvcnQgY29uc3QgY2xpZW50Um91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuY2xpZW50Um91dGVyLnJvdXRlKFwiL1wiKS5wb3N0KGNsaWVudENvbnRyb2xsZXIuY3JlYXRlKTtcbiJdfQ==