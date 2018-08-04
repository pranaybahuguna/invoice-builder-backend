"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = require("mongoose-paginate");

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

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
Invoice.plugin(_mongoosePaginate2.default);
exports.default = _mongoose2.default.model("Invoice", Invoice);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIkludm9pY2UiLCJpdGVtIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicXR5IiwiTnVtYmVyIiwiZGF0ZSIsIkRhdGUiLCJkdWUiLCJyYXRlIiwidGF4IiwicGx1Z2luIiwibW9uZ29vc2VQYWdpbmF0ZSIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxtQkFBU0QsTUFBeEI7QUFDQSxJQUFNRSxVQUFVLElBQUlGLE1BQUosQ0FBVztBQUN6QkcsUUFBTTtBQUNKQyxVQUFNQyxNQURGO0FBRUpDLGNBQVU7QUFGTixHQURtQjtBQUt6QkMsT0FBSztBQUNISCxVQUFNSTtBQURILEdBTG9CO0FBUXpCQyxRQUFNO0FBQ0pMLFVBQU1NO0FBREYsR0FSbUI7QUFXekJDLE9BQUs7QUFDSFAsVUFBTU07QUFESCxHQVhvQjtBQWN6QkUsUUFBTTtBQUNKUixVQUFNSTtBQURGLEdBZG1CO0FBaUJ6QkssT0FBSztBQUNIVCxVQUFNSTtBQURIO0FBakJvQixDQUFYLENBQWhCO0FBcUJBTixRQUFRWSxNQUFSLENBQWVDLDBCQUFmO2tCQUNlZCxtQkFBU2UsS0FBVCxDQUFlLFNBQWYsRUFBMEJkLE9BQTFCLEMiLCJmaWxlIjoiaW52b2ljZS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBtb25nb29zZVBhZ2luYXRlIGZyb20gXCJtb25nb29zZS1wYWdpbmF0ZVwiO1xuXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5jb25zdCBJbnZvaWNlID0gbmV3IFNjaGVtYSh7XG4gIGl0ZW06IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAgcXR5OiB7XG4gICAgdHlwZTogTnVtYmVyXG4gIH0sXG4gIGRhdGU6IHtcbiAgICB0eXBlOiBEYXRlXG4gIH0sXG4gIGR1ZToge1xuICAgIHR5cGU6IERhdGVcbiAgfSxcbiAgcmF0ZToge1xuICAgIHR5cGU6IE51bWJlclxuICB9LFxuICB0YXg6IHtcbiAgICB0eXBlOiBOdW1iZXJcbiAgfVxufSk7XG5JbnZvaWNlLnBsdWdpbihtb25nb29zZVBhZ2luYXRlKTtcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiSW52b2ljZVwiLCBJbnZvaWNlKTtcbiJdfQ==