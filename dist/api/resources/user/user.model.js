"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

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
User.pre("save", function () {
  var salt = _bcrypt2.default.genSalt();
  _bcrypt2.default.hash(undefined.password, salt, function (hash) {
    undefined.password = hash;
  });
});
exports.default = _mongoose2.default.model("User", User);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXIiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxvd2VyY2FzZSIsInVuaXF1ZSIsInBhc3N3b3JkIiwicHJlIiwic2FsdCIsImJjcnlwdCIsImdlblNhbHQiLCJoYXNoIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVNDLG1CQUFTRCxNQUF4QjtBQUNBLElBQU1FLE9BQU8sSUFBSUYsTUFBSixDQUFXO0FBQ3RCRyxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsY0FBVSxJQUZMO0FBR0xDLGVBQVcsSUFITjtBQUlMQyxZQUFRO0FBSkgsR0FEZTtBQU90QkMsWUFBVTtBQUNSTCxVQUFNQyxNQURFO0FBRVJDLGNBQVU7QUFGRjtBQVBZLENBQVgsQ0FBYjtBQVlBSixLQUFLUSxHQUFMLENBQVMsTUFBVCxFQUFpQixZQUFNO0FBQ3JCLE1BQU1DLE9BQU9DLGlCQUFPQyxPQUFQLEVBQWI7QUFDQUQsbUJBQU9FLElBQVAsQ0FBWSxVQUFLTCxRQUFqQixFQUEyQkUsSUFBM0IsRUFBaUMsZ0JBQVE7QUFDdkMsY0FBS0YsUUFBTCxHQUFnQkssSUFBaEI7QUFDRCxHQUZEO0FBR0QsQ0FMRDtrQkFNZWIsbUJBQVNjLEtBQVQsQ0FBZSxNQUFmLEVBQXVCYixJQUF2QixDIiwiZmlsZSI6InVzZXIubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5cclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5jb25zdCBVc2VyID0gbmV3IFNjaGVtYSh7XHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbG93ZXJjYXNlOiB0cnVlLFxyXG4gICAgdW5pcXVlOiB0cnVlXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9XHJcbn0pO1xyXG5Vc2VyLnByZShcInNhdmVcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHNhbHQgPSBiY3J5cHQuZ2VuU2FsdCgpO1xyXG4gIGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIHNhbHQsIGhhc2ggPT4ge1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IGhhc2g7XHJcbiAgfSk7XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlcik7XHJcbiJdfQ==