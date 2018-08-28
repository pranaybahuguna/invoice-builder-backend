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
    email: {
      type: String,
      unique: true
    },
    password: String
  },
  google: {
    email: {
      type: String,
      unique: true
    },
    id: String,
    displayName: String,
    token: String
  },
  github: {
    email: {
      type: String,
      unique: true
    },
    id: String,
    displayName: String,
    token: String
  }
});
exports.default = _mongoose2.default.model("User", User);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXIiLCJsb2NhbCIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsInBhc3N3b3JkIiwiZ29vZ2xlIiwiaWQiLCJkaXNwbGF5TmFtZSIsInRva2VuIiwiZ2l0aHViIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxtQkFBU0QsTUFBeEI7QUFDQSxJQUFNRSxPQUFPLElBQUlGLE1BQUosQ0FBVztBQUN0QkcsU0FBTztBQUNMQyxXQUFPO0FBQ0xDLFlBQU1DLE1BREQ7QUFFTEMsY0FBUTtBQUZILEtBREY7QUFLTEMsY0FBVUY7QUFMTCxHQURlO0FBUXRCRyxVQUFRO0FBQ05MLFdBQU87QUFDTEMsWUFBTUMsTUFERDtBQUVMQyxjQUFRO0FBRkgsS0FERDtBQUtORyxRQUFJSixNQUxFO0FBTU5LLGlCQUFhTCxNQU5QO0FBT05NLFdBQU9OO0FBUEQsR0FSYztBQWlCdEJPLFVBQVE7QUFDTlQsV0FBTztBQUNMQyxZQUFNQyxNQUREO0FBRUxDLGNBQVE7QUFGSCxLQUREO0FBS05HLFFBQUlKLE1BTEU7QUFNTkssaUJBQWFMLE1BTlA7QUFPTk0sV0FBT047QUFQRDtBQWpCYyxDQUFYLENBQWI7a0JBMkJlTCxtQkFBU2EsS0FBVCxDQUFlLE1BQWYsRUFBdUJaLElBQXZCLEMiLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xuY29uc3QgVXNlciA9IG5ldyBTY2hlbWEoe1xuICBsb2NhbDoge1xuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOiBTdHJpbmdcbiAgfSxcbiAgZ29vZ2xlOiB7XG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgIH0sXG4gICAgaWQ6IFN0cmluZyxcbiAgICBkaXNwbGF5TmFtZTogU3RyaW5nLFxuICAgIHRva2VuOiBTdHJpbmdcbiAgfSxcbiAgZ2l0aHViOiB7XG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgIH0sXG4gICAgaWQ6IFN0cmluZyxcbiAgICBkaXNwbGF5TmFtZTogU3RyaW5nLFxuICAgIHRva2VuOiBTdHJpbmdcbiAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlcik7XG4iXX0=