"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEncryptedPassword = exports.getJWTToken = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _development = require("../../config/env/development");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getJWTToken = exports.getJWTToken = function getJWTToken(payload) {
  var token = _jsonwebtoken2.default.sign(payload, _development.devConfig.secret, {
    expiresIn: "1d"
  });
  return token;
};
var getEncryptedPassword = exports.getEncryptedPassword = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(password) {
    var salt, hash;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcryptjs2.default.genSalt();

          case 2:
            salt = _context.sent;
            _context.next = 5;
            return _bcryptjs2.default.hash(password, salt);

          case 5:
            hash = _context.sent;
            return _context.abrupt("return", hash);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getEncryptedPassword(_x) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kdWxlcy91dGlsLmpzIl0sIm5hbWVzIjpbImdldEpXVFRva2VuIiwidG9rZW4iLCJqd3QiLCJzaWduIiwicGF5bG9hZCIsImRldkNvbmZpZyIsInNlY3JldCIsImV4cGlyZXNJbiIsImdldEVuY3J5cHRlZFBhc3N3b3JkIiwicGFzc3dvcmQiLCJiY3J5cHRqcyIsImdlblNhbHQiLCJzYWx0IiwiaGFzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRU8sSUFBTUEsb0NBQWMsU0FBZEEsV0FBYyxVQUFXO0FBQ3BDLE1BQU1DLFFBQVFDLHVCQUFJQyxJQUFKLENBQVNDLE9BQVQsRUFBa0JDLHVCQUFVQyxNQUE1QixFQUFvQztBQUNoREMsZUFBVztBQURxQyxHQUFwQyxDQUFkO0FBR0EsU0FBT04sS0FBUDtBQUNELENBTE07QUFNQSxJQUFNTztBQUFBLHNGQUF1QixpQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNmQyxtQkFBU0MsT0FBVCxFQURlOztBQUFBO0FBQzVCQyxnQkFENEI7QUFBQTtBQUFBLG1CQUVmRixtQkFBU0csSUFBVCxDQUFjSixRQUFkLEVBQXdCRyxJQUF4QixDQUZlOztBQUFBO0FBRTVCQyxnQkFGNEI7QUFBQSw2Q0FHM0JBLElBSDJCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU4iLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IGJjcnlwdGpzIGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgZGV2Q29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcblxuZXhwb3J0IGNvbnN0IGdldEpXVFRva2VuID0gcGF5bG9hZCA9PiB7XG4gIGNvbnN0IHRva2VuID0gand0LnNpZ24ocGF5bG9hZCwgZGV2Q29uZmlnLnNlY3JldCwge1xuICAgIGV4cGlyZXNJbjogXCIxZFwiXG4gIH0pO1xuICByZXR1cm4gdG9rZW47XG59O1xuZXhwb3J0IGNvbnN0IGdldEVuY3J5cHRlZFBhc3N3b3JkID0gYXN5bmMgcGFzc3dvcmQgPT4ge1xuICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0anMuZ2VuU2FsdCgpO1xuICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0anMuaGFzaChwYXNzd29yZCwgc2FsdCk7XG4gIHJldHVybiBoYXNoO1xufTtcbiJdfQ==