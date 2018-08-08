"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var User = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
User.pre("save", (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var salt, hash;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(this.isModified("password") || this.isNew)) {
            _context.next = 8;
            break;
          }

          _context.next = 3;
          return _bcryptjs2.default.genSalt();

        case 3:
          salt = _context.sent;
          _context.next = 6;
          return _bcryptjs2.default.hash(this.password, salt);

        case 6:
          hash = _context.sent;

          this.password = hash;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));
exports.default = _mongoose2.default.model("User", User);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXIiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxvd2VyY2FzZSIsInVuaXF1ZSIsInBhc3N3b3JkIiwicHJlIiwiaXNNb2RpZmllZCIsImlzTmV3IiwiYmNyeXB0anMiLCJnZW5TYWx0Iiwic2FsdCIsImhhc2giLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxtQkFBU0QsTUFBeEI7QUFDQSxJQUFNRSxPQUFPLElBQUlGLE1BQUosQ0FBVztBQUN0QkcsU0FBTztBQUNMQyxVQUFNQyxNQUREO0FBRUxDLGNBQVUsSUFGTDtBQUdMQyxlQUFXLElBSE47QUFJTEMsWUFBUTtBQUpILEdBRGU7QUFPdEJDLFlBQVU7QUFDUkwsVUFBTUMsTUFERTtBQUVSQyxjQUFVO0FBRkY7QUFQWSxDQUFYLENBQWI7QUFZQUosS0FBS1EsR0FBTCxDQUFTLE1BQVQsMkVBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNYLEtBQUtDLFVBQUwsQ0FBZ0IsVUFBaEIsS0FBK0IsS0FBS0MsS0FEekI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFFTUMsbUJBQVNDLE9BQVQsRUFGTjs7QUFBQTtBQUVQQyxjQUZPO0FBQUE7QUFBQSxpQkFHTUYsbUJBQVNHLElBQVQsQ0FBYyxLQUFLUCxRQUFuQixFQUE2Qk0sSUFBN0IsQ0FITjs7QUFBQTtBQUdQQyxjQUhPOztBQUliLGVBQUtQLFFBQUwsR0FBZ0JPLElBQWhCOztBQUphO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWpCO2tCQU9lZixtQkFBU2dCLEtBQVQsQ0FBZSxNQUFmLEVBQXVCZixJQUF2QixDIiwiZmlsZSI6InVzZXIubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBiY3J5cHRqcyBmcm9tIFwiYmNyeXB0anNcIjtcclxuXHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuY29uc3QgVXNlciA9IG5ldyBTY2hlbWEoe1xyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIGxvd2VyY2FzZTogdHJ1ZSxcclxuICAgIHVuaXF1ZTogdHJ1ZVxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuVXNlci5wcmUoXCJzYXZlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gIGlmICh0aGlzLmlzTW9kaWZpZWQoXCJwYXNzd29yZFwiKSB8fCB0aGlzLmlzTmV3KSB7XHJcbiAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0anMuZ2VuU2FsdCgpO1xyXG4gICAgY29uc3QgaGFzaCA9IGF3YWl0IGJjcnlwdGpzLmhhc2godGhpcy5wYXNzd29yZCwgc2FsdCk7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gaGFzaDtcclxuICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlcik7XHJcbiJdfQ==