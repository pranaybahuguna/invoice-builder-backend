"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _client = require("./client.model");

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  validateCreateSchema: function validateCreateSchema(body) {
    var schema = _joi2.default.object().keys({
      firstName: _joi2.default.string().required(),
      lastName: _joi2.default.string().required(),
      email: _joi2.default.string().email().required()
    });

    var _Joi$validate = _joi2.default.validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUNyZWF0ZVNjaGVtYSIsImJvZHkiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwiZmlyc3ROYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0TmFtZSIsImVtYWlsIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ2JBLHNCQURhLGdDQUNRQyxJQURSLEVBQ2M7QUFDekIsUUFBTUMsU0FBU0MsY0FBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQy9CQyxpQkFBV0gsY0FBSUksTUFBSixHQUFhQyxRQUFiLEVBRG9CO0FBRS9CQyxnQkFBVU4sY0FBSUksTUFBSixHQUFhQyxRQUFiLEVBRnFCO0FBRy9CRSxhQUFPUCxjQUFJSSxNQUFKLEdBQ0pHLEtBREksR0FFSkYsUUFGSTtBQUh3QixLQUFsQixDQUFmOztBQUR5Qix3QkFRQUwsY0FBSVEsUUFBSixDQUFhVixJQUFiLEVBQW1CQyxNQUFuQixDQVJBO0FBQUEsUUFRakJVLEtBUmlCLGlCQVFqQkEsS0FSaUI7QUFBQSxRQVFWQyxLQVJVLGlCQVFWQSxLQVJVOztBQVN6QixRQUFJRCxTQUFTQSxNQUFNRSxPQUFuQixFQUE0QjtBQUMxQixhQUFPLEVBQUVGLFlBQUYsRUFBUDtBQUNEO0FBQ0QsV0FBTyxFQUFFQyxZQUFGLEVBQVA7QUFDRDtBQWRZLEMiLCJmaWxlIjoiY2xpZW50LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gXCJqb2lcIjtcbmltcG9ydCBDbGllbnQgZnJvbSBcIi4vY2xpZW50Lm1vZGVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdGVDcmVhdGVTY2hlbWEoYm9keSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgIGZpcnN0TmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICBsYXN0TmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICBlbWFpbDogSm9pLnN0cmluZygpXG4gICAgICAgIC5lbWFpbCgpXG4gICAgICAgIC5yZXF1aXJlZCgpXG4gICAgfSk7XG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IEpvaS52YWxpZGF0ZShib2R5LCBzY2hlbWEpO1xuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XG4gICAgICByZXR1cm4geyBlcnJvciB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZSB9O1xuICB9XG59O1xuIl19