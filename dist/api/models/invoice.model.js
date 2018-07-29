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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2ludm9pY2UubW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJJbnZvaWNlIiwiaXRlbSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInF0eSIsIk51bWJlciIsImRhdGUiLCJEYXRlIiwiZHVlIiwicmF0ZSIsInRheCIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBTUEsU0FBU0MsbUJBQVNELE1BQXhCO0FBQ0EsSUFBTUUsVUFBVSxJQUFJRixNQUFKLENBQVc7QUFDekJHLFFBQU07QUFDSkMsVUFBTUMsTUFERjtBQUVKQyxjQUFVO0FBRk4sR0FEbUI7QUFLekJDLE9BQUs7QUFDSEgsVUFBTUk7QUFESCxHQUxvQjtBQVF6QkMsUUFBTTtBQUNKTCxVQUFNTTtBQURGLEdBUm1CO0FBV3pCQyxPQUFLO0FBQ0hQLFVBQU1NO0FBREgsR0FYb0I7QUFjekJFLFFBQU07QUFDSlIsVUFBTUk7QUFERixHQWRtQjtBQWlCekJLLE9BQUs7QUFDSFQsVUFBTUk7QUFESDtBQWpCb0IsQ0FBWCxDQUFoQjs7a0JBc0JlUCxtQkFBU2EsS0FBVCxDQUFlLFNBQWYsRUFBMEJaLE9BQTFCLEMiLCJmaWxlIjoiaW52b2ljZS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcbmNvbnN0IEludm9pY2UgPSBuZXcgU2NoZW1hKHtcbiAgaXRlbToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICBxdHk6IHtcbiAgICB0eXBlOiBOdW1iZXJcbiAgfSxcbiAgZGF0ZToge1xuICAgIHR5cGU6IERhdGVcbiAgfSxcbiAgZHVlOiB7XG4gICAgdHlwZTogRGF0ZVxuICB9LFxuICByYXRlOiB7XG4gICAgdHlwZTogTnVtYmVyXG4gIH0sXG4gIHRheDoge1xuICAgIHR5cGU6IE51bWJlclxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJJbnZvaWNlXCIsIEludm9pY2UpO1xuIl19