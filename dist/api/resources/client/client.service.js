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
  },
  validateUpdateSchema: function validateUpdateSchema(body) {
    var schema = _joi2.default.object().keys({
      firstName: _joi2.default.string().optional(),
      lastName: _joi2.default.string().optional(),
      email: _joi2.default.string().email().optional()
    });

    var _Joi$validate2 = _joi2.default.validate(body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUNyZWF0ZVNjaGVtYSIsImJvZHkiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJrZXlzIiwiZmlyc3ROYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0TmFtZSIsImVtYWlsIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsInZhbGlkYXRlVXBkYXRlU2NoZW1hIiwib3B0aW9uYWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiQSxzQkFEYSxnQ0FDUUMsSUFEUixFQUNjO0FBQ3pCLFFBQU1DLFNBQVNDLGNBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUMvQkMsaUJBQVdILGNBQUlJLE1BQUosR0FBYUMsUUFBYixFQURvQjtBQUUvQkMsZ0JBQVVOLGNBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZxQjtBQUcvQkUsYUFBT1AsY0FBSUksTUFBSixHQUNKRyxLQURJLEdBRUpGLFFBRkk7QUFId0IsS0FBbEIsQ0FBZjs7QUFEeUIsd0JBUUFMLGNBQUlRLFFBQUosQ0FBYVYsSUFBYixFQUFtQkMsTUFBbkIsQ0FSQTtBQUFBLFFBUWpCVSxLQVJpQixpQkFRakJBLEtBUmlCO0FBQUEsUUFRVkMsS0FSVSxpQkFRVkEsS0FSVTs7QUFTekIsUUFBSUQsU0FBU0EsTUFBTUUsT0FBbkIsRUFBNEI7QUFDMUIsYUFBTyxFQUFFRixZQUFGLEVBQVA7QUFDRDtBQUNELFdBQU8sRUFBRUMsWUFBRixFQUFQO0FBQ0QsR0FkWTtBQWViRSxzQkFmYSxnQ0FlUWQsSUFmUixFQWVjO0FBQ3pCLFFBQU1DLFNBQVNDLGNBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUMvQkMsaUJBQVdILGNBQUlJLE1BQUosR0FBYVMsUUFBYixFQURvQjtBQUUvQlAsZ0JBQVVOLGNBQUlJLE1BQUosR0FBYVMsUUFBYixFQUZxQjtBQUcvQk4sYUFBT1AsY0FBSUksTUFBSixHQUNKRyxLQURJLEdBRUpNLFFBRkk7QUFId0IsS0FBbEIsQ0FBZjs7QUFEeUIseUJBUUFiLGNBQUlRLFFBQUosQ0FBYVYsSUFBYixFQUFtQkMsTUFBbkIsQ0FSQTtBQUFBLFFBUWpCVSxLQVJpQixrQkFRakJBLEtBUmlCO0FBQUEsUUFRVkMsS0FSVSxrQkFRVkEsS0FSVTs7QUFTekIsUUFBSUQsU0FBU0EsTUFBTUUsT0FBbkIsRUFBNEI7QUFDMUIsYUFBTyxFQUFFRixZQUFGLEVBQVA7QUFDRDtBQUNELFdBQU8sRUFBRUMsWUFBRixFQUFQO0FBQ0Q7QUE1QlksQyIsImZpbGUiOiJjbGllbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSBcImpvaVwiO1xuaW1wb3J0IENsaWVudCBmcm9tIFwiLi9jbGllbnQubW9kZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0ZUNyZWF0ZVNjaGVtYShib2R5KSB7XG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgZmlyc3ROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgIGxhc3ROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgIGVtYWlsOiBKb2kuc3RyaW5nKClcbiAgICAgICAgLmVtYWlsKClcbiAgICAgICAgLnJlcXVpcmVkKClcbiAgICB9KTtcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKGJvZHksIHNjaGVtYSk7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgIHJldHVybiB7IGVycm9yIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlIH07XG4gIH0sXG4gIHZhbGlkYXRlVXBkYXRlU2NoZW1hKGJvZHkpIHtcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICBmaXJzdE5hbWU6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgbGFzdE5hbWU6IEpvaS5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKVxuICAgICAgICAuZW1haWwoKVxuICAgICAgICAub3B0aW9uYWwoKVxuICAgIH0pO1xuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUoYm9keSwgc2NoZW1hKTtcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xuICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgfVxufTtcbiJdfQ==