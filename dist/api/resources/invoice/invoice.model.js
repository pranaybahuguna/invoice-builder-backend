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
  },
  client: {
    ref: "Client",
    type: Schema.Types.ObjectId,
    required: true
  }
});
Invoice.plugin(_mongoosePaginate2.default);
exports.default = _mongoose2.default.model("Invoice", Invoice);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIkludm9pY2UiLCJpdGVtIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicXR5IiwiTnVtYmVyIiwiZGF0ZSIsIkRhdGUiLCJkdWUiLCJyYXRlIiwidGF4IiwiY2xpZW50IiwicmVmIiwiVHlwZXMiLCJPYmplY3RJZCIsInBsdWdpbiIsIm1vbmdvb3NlUGFnaW5hdGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsbUJBQVNELE1BQXhCO0FBQ0EsSUFBTUUsVUFBVSxJQUFJRixNQUFKLENBQVc7QUFDekJHLFFBQU07QUFDSkMsVUFBTUMsTUFERjtBQUVKQyxjQUFVO0FBRk4sR0FEbUI7QUFLekJDLE9BQUs7QUFDSEgsVUFBTUk7QUFESCxHQUxvQjtBQVF6QkMsUUFBTTtBQUNKTCxVQUFNTTtBQURGLEdBUm1CO0FBV3pCQyxPQUFLO0FBQ0hQLFVBQU1NO0FBREgsR0FYb0I7QUFjekJFLFFBQU07QUFDSlIsVUFBTUk7QUFERixHQWRtQjtBQWlCekJLLE9BQUs7QUFDSFQsVUFBTUk7QUFESCxHQWpCb0I7QUFvQnpCTSxVQUFRO0FBQ05DLFNBQUssUUFEQztBQUVOWCxVQUFNSixPQUFPZ0IsS0FBUCxDQUFhQyxRQUZiO0FBR05YLGNBQVU7QUFISjtBQXBCaUIsQ0FBWCxDQUFoQjtBQTBCQUosUUFBUWdCLE1BQVIsQ0FBZUMsMEJBQWY7a0JBQ2VsQixtQkFBU21CLEtBQVQsQ0FBZSxTQUFmLEVBQTBCbEIsT0FBMUIsQyIsImZpbGUiOiJpbnZvaWNlLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IG1vbmdvb3NlUGFnaW5hdGUgZnJvbSBcIm1vbmdvb3NlLXBhZ2luYXRlXCI7XG5cbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcbmNvbnN0IEludm9pY2UgPSBuZXcgU2NoZW1hKHtcbiAgaXRlbToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICBxdHk6IHtcbiAgICB0eXBlOiBOdW1iZXJcbiAgfSxcbiAgZGF0ZToge1xuICAgIHR5cGU6IERhdGVcbiAgfSxcbiAgZHVlOiB7XG4gICAgdHlwZTogRGF0ZVxuICB9LFxuICByYXRlOiB7XG4gICAgdHlwZTogTnVtYmVyXG4gIH0sXG4gIHRheDoge1xuICAgIHR5cGU6IE51bWJlclxuICB9LFxuICBjbGllbnQ6IHtcbiAgICByZWY6IFwiQ2xpZW50XCIsXG4gICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH1cbn0pO1xuSW52b2ljZS5wbHVnaW4obW9uZ29vc2VQYWdpbmF0ZSk7XG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIkludm9pY2VcIiwgSW52b2ljZSk7XG4iXX0=