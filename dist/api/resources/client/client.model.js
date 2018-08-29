"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var Client = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});
exports.default = _mongoose2.default.model("Client", Client);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQubW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJDbGllbnQiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0TmFtZSIsImVtYWlsIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxtQkFBU0QsTUFBeEI7QUFDQSxJQUFNRSxTQUFTLElBQUlGLE1BQUosQ0FBVztBQUN4QkcsYUFBVztBQUNUQyxVQUFNQyxNQURHO0FBRVRDLGNBQVU7QUFGRCxHQURhO0FBS3hCQyxZQUFVO0FBQ1JILFVBQU1DLE1BREU7QUFFUkMsY0FBVTtBQUZGLEdBTGM7QUFTeEJFLFNBQU87QUFDTEosVUFBTUMsTUFERDtBQUVMQyxjQUFVO0FBRkw7QUFUaUIsQ0FBWCxDQUFmO2tCQWNlTCxtQkFBU1EsS0FBVCxDQUFlLFFBQWYsRUFBeUJQLE1BQXpCLEMiLCJmaWxlIjoiY2xpZW50Lm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5jb25zdCBDbGllbnQgPSBuZXcgU2NoZW1hKHtcbiAgZmlyc3ROYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGxhc3ROYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJDbGllbnRcIiwgQ2xpZW50KTtcbiJdfQ==