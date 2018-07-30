"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var Invoice = new Schema({
  item: {
    type: String,
    required: true
  },
  qty: {
    type: Number
  },
  date: {
    type: Date
  },
  due: {
    type: Date
  },
  rate: {
    type: Number
  },
  tax: {
    type: Number
  }
});

exports.default = _mongoose2.default.model("Invoice", Invoice);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2ludm9pY2UubW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJJbnZvaWNlIiwiaXRlbSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInF0eSIsIk51bWJlciIsImRhdGUiLCJEYXRlIiwiZHVlIiwicmF0ZSIsInRheCIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBTUEsU0FBU0MsbUJBQVNELE1BQXhCO0FBQ0EsSUFBTUUsVUFBVSxJQUFJRixNQUFKLENBQVc7QUFDekJHLFFBQU07QUFDSkMsVUFBTUMsTUFERjtBQUVKQyxjQUFVO0FBRk4sR0FEbUI7QUFLekJDLE9BQUs7QUFDSEgsVUFBTUk7QUFESCxHQUxvQjtBQVF6QkMsUUFBTTtBQUNKTCxVQUFNTTtBQURGLEdBUm1CO0FBV3pCQyxPQUFLO0FBQ0hQLFVBQU1NO0FBREgsR0FYb0I7QUFjekJFLFFBQU07QUFDSlIsVUFBTUk7QUFERixHQWRtQjtBQWlCekJLLE9BQUs7QUFDSFQsVUFBTUk7QUFESDtBQWpCb0IsQ0FBWCxDQUFoQjs7a0JBc0JlUCxtQkFBU2EsS0FBVCxDQUFlLFNBQWYsRUFBMEJaLE9BQTFCLEMiLCJmaWxlIjoiaW52b2ljZS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5jb25zdCBJbnZvaWNlID0gbmV3IFNjaGVtYSh7XHJcbiAgaXRlbToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIHF0eToge1xyXG4gICAgdHlwZTogTnVtYmVyXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICB0eXBlOiBEYXRlXHJcbiAgfSxcclxuICBkdWU6IHtcclxuICAgIHR5cGU6IERhdGVcclxuICB9LFxyXG4gIHJhdGU6IHtcclxuICAgIHR5cGU6IE51bWJlclxyXG4gIH0sXHJcbiAgdGF4OiB7XHJcbiAgICB0eXBlOiBOdW1iZXJcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJJbnZvaWNlXCIsIEludm9pY2UpO1xyXG4iXX0=