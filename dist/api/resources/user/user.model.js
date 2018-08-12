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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXIiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxvd2VyY2FzZSIsInVuaXF1ZSIsInBhc3N3b3JkIiwicHJlIiwiaXNNb2RpZmllZCIsImlzTmV3IiwiYmNyeXB0anMiLCJnZW5TYWx0Iiwic2FsdCIsImhhc2giLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxtQkFBU0QsTUFBeEI7QUFDQSxJQUFNRSxPQUFPLElBQUlGLE1BQUosQ0FBVztBQUN0QkcsU0FBTztBQUNMQyxVQUFNQyxNQUREO0FBRUxDLGNBQVUsSUFGTDtBQUdMQyxlQUFXLElBSE47QUFJTEMsWUFBUTtBQUpILEdBRGU7QUFPdEJDLFlBQVU7QUFDUkwsVUFBTUMsTUFERTtBQUVSQyxjQUFVO0FBRkY7QUFQWSxDQUFYLENBQWI7QUFZQUosS0FBS1EsR0FBTCxDQUFTLE1BQVQsMkVBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNYLEtBQUtDLFVBQUwsQ0FBZ0IsVUFBaEIsS0FBK0IsS0FBS0MsS0FEekI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFFTUMsbUJBQVNDLE9BQVQsRUFGTjs7QUFBQTtBQUVQQyxjQUZPO0FBQUE7QUFBQSxpQkFHTUYsbUJBQVNHLElBQVQsQ0FBYyxLQUFLUCxRQUFuQixFQUE2Qk0sSUFBN0IsQ0FITjs7QUFBQTtBQUdQQyxjQUhPOztBQUliLGVBQUtQLFFBQUwsR0FBZ0JPLElBQWhCOztBQUphO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWpCO2tCQU9lZixtQkFBU2dCLEtBQVQsQ0FBZSxNQUFmLEVBQXVCZixJQUF2QixDIiwiZmlsZSI6InVzZXIubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XG5cbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcbmNvbnN0IFVzZXIgPSBuZXcgU2NoZW1hKHtcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbG93ZXJjYXNlOiB0cnVlLFxuICAgIHVuaXF1ZTogdHJ1ZVxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9XG59KTtcblVzZXIucHJlKFwic2F2ZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuaXNNb2RpZmllZChcInBhc3N3b3JkXCIpIHx8IHRoaXMuaXNOZXcpIHtcbiAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0anMuZ2VuU2FsdCgpO1xuICAgIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHRqcy5oYXNoKHRoaXMucGFzc3dvcmQsIHNhbHQpO1xuICAgIHRoaXMucGFzc3dvcmQgPSBoYXNoO1xuICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyKTtcbiJdfQ==