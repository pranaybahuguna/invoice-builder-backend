"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  validateSignupSchema: function validateSignupSchema(body) {
    var schema = _joi2.default.object().keys({
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().required()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlU2lnbnVwU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUVlO0FBQ2JBLHNCQURhLGdDQUNRQyxJQURSLEVBQ2M7QUFDekIsUUFBTUMsU0FBU0MsY0FBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQy9CQyxhQUFPSCxjQUFJSSxNQUFKLEdBQ0pELEtBREksR0FFSkUsUUFGSSxFQUR3QjtBQUkvQkMsZ0JBQVVOLGNBQUlJLE1BQUosR0FBYUMsUUFBYjtBQUpxQixLQUFsQixDQUFmOztBQUR5Qix3QkFPQUwsY0FBSU8sUUFBSixDQUFhVCxJQUFiLEVBQW1CQyxNQUFuQixDQVBBO0FBQUEsUUFPakJTLEtBUGlCLGlCQU9qQkEsS0FQaUI7QUFBQSxRQU9WQyxLQVBVLGlCQU9WQSxLQVBVOztBQVF6QixRQUFJRCxTQUFTQSxNQUFNRSxPQUFuQixFQUE0QjtBQUMxQixhQUFPLEVBQUVGLFlBQUYsRUFBUDtBQUNEO0FBQ0QsV0FBTyxFQUFFQyxZQUFGLEVBQVA7QUFDRDtBQWJZLEMiLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tIFwiam9pXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdGVTaWdudXBTY2hlbWEoYm9keSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgIGVtYWlsOiBKb2kuc3RyaW5nKClcbiAgICAgICAgLmVtYWlsKClcbiAgICAgICAgLnJlcXVpcmVkKCksXG4gICAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKClcbiAgICB9KTtcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKGJvZHksIHNjaGVtYSk7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgIHJldHVybiB7IGVycm9yIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlIH07XG4gIH1cbn07XG4iXX0=