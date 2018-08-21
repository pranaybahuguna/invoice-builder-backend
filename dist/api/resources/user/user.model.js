"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var User = new Schema({
  local: {
    email: String,
    password: String
  },
  google: {
    email: String,
    id: String,
    displayName: String,
    token: String
  },
  github: {
    email: String,
    id: String,
    displayName: String,
    token: String
  }
});
exports.default = _mongoose2.default.model("User", User);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXIiLCJsb2NhbCIsImVtYWlsIiwiU3RyaW5nIiwicGFzc3dvcmQiLCJnb29nbGUiLCJpZCIsImRpc3BsYXlOYW1lIiwidG9rZW4iLCJnaXRodWIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLG1CQUFTRCxNQUF4QjtBQUNBLElBQU1FLE9BQU8sSUFBSUYsTUFBSixDQUFXO0FBQ3RCRyxTQUFPO0FBQ0xDLFdBQU9DLE1BREY7QUFFTEMsY0FBVUQ7QUFGTCxHQURlO0FBS3RCRSxVQUFRO0FBQ05ILFdBQU9DLE1BREQ7QUFFTkcsUUFBSUgsTUFGRTtBQUdOSSxpQkFBYUosTUFIUDtBQUlOSyxXQUFPTDtBQUpELEdBTGM7QUFXdEJNLFVBQVE7QUFDTlAsV0FBT0MsTUFERDtBQUVORyxRQUFJSCxNQUZFO0FBR05JLGlCQUFhSixNQUhQO0FBSU5LLFdBQU9MO0FBSkQ7QUFYYyxDQUFYLENBQWI7a0JBa0JlSixtQkFBU1csS0FBVCxDQUFlLE1BQWYsRUFBdUJWLElBQXZCLEMiLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuY29uc3QgVXNlciA9IG5ldyBTY2hlbWEoe1xyXG4gIGxvY2FsOiB7XHJcbiAgICBlbWFpbDogU3RyaW5nLFxyXG4gICAgcGFzc3dvcmQ6IFN0cmluZ1xyXG4gIH0sXHJcbiAgZ29vZ2xlOiB7XHJcbiAgICBlbWFpbDogU3RyaW5nLFxyXG4gICAgaWQ6IFN0cmluZyxcclxuICAgIGRpc3BsYXlOYW1lOiBTdHJpbmcsXHJcbiAgICB0b2tlbjogU3RyaW5nXHJcbiAgfSxcclxuICBnaXRodWI6IHtcclxuICAgIGVtYWlsOiBTdHJpbmcsXHJcbiAgICBpZDogU3RyaW5nLFxyXG4gICAgZGlzcGxheU5hbWU6IFN0cmluZyxcclxuICAgIHRva2VuOiBTdHJpbmdcclxuICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlcik7XHJcbiJdfQ==