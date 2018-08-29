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
      name: _joi2.default.string().required(),
      password: _joi2.default.string()
    });

    var _Joi$validate = _joi2.default.validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  },
  validateLoginSchema: function validateLoginSchema(body) {
    var schema = _joi2.default.object().keys({
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().required()
    });

    var _Joi$validate2 = _joi2.default.validate(body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  },
  getUser: function getUser(user) {
    var rsp = {};
    if (user.local) {
      if (user.local.email) {
        rsp.name = user.local.name;
        rsp.email = user.local.email;
      }
    }

    if (user.google) {
      if (user.google.email) {
        rsp.name = user.google.displayName;
        rsp.email = user.google.email;
      }
    }

    if (user.github) {
      if (user.github.email) {
        rsp.name = user.github.displayName;
        rsp.email = user.github.email;
      }
    }
    if (user.twitter) {
      if (user.twitter.email) {
        rsp.name = user.twitter.displayName;
        rsp.email = user.twitter.email;
      }
    }

    return rsp;
  },
  validateForgotSchema: function validateForgotSchema(body) {
    var schema = _joi2.default.object().keys({
      email: _joi2.default.string().email().required()
    });

    var _Joi$validate3 = _joi2.default.validate(body, schema),
        error = _Joi$validate3.error,
        value = _Joi$validate3.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlU2lnbnVwU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwibmFtZSIsInBhc3N3b3JkIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsInZhbGlkYXRlTG9naW5TY2hlbWEiLCJnZXRVc2VyIiwidXNlciIsInJzcCIsImxvY2FsIiwiZ29vZ2xlIiwiZGlzcGxheU5hbWUiLCJnaXRodWIiLCJ0d2l0dGVyIiwidmFsaWRhdGVGb3Jnb3RTY2hlbWEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYkEsc0JBRGEsZ0NBQ1FDLElBRFIsRUFDYztBQUN6QixRQUFNQyxTQUFTQyxjQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDL0JDLGFBQU9ILGNBQUlJLE1BQUosR0FDSkQsS0FESSxHQUVKRSxRQUZJLEVBRHdCO0FBSS9CQyxZQUFNTixjQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFKeUI7QUFLL0JFLGdCQUFVUCxjQUFJSSxNQUFKO0FBTHFCLEtBQWxCLENBQWY7O0FBRHlCLHdCQVFBSixjQUFJUSxRQUFKLENBQWFWLElBQWIsRUFBbUJDLE1BQW5CLENBUkE7QUFBQSxRQVFqQlUsS0FSaUIsaUJBUWpCQSxLQVJpQjtBQUFBLFFBUVZDLEtBUlUsaUJBUVZBLEtBUlU7O0FBU3pCLFFBQUlELFNBQVNBLE1BQU1FLE9BQW5CLEVBQTRCO0FBQzFCLGFBQU8sRUFBRUYsWUFBRixFQUFQO0FBQ0Q7QUFDRCxXQUFPLEVBQUVDLFlBQUYsRUFBUDtBQUNELEdBZFk7QUFlYkUscUJBZmEsK0JBZU9kLElBZlAsRUFlYTtBQUN4QixRQUFNQyxTQUFTQyxjQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDL0JDLGFBQU9ILGNBQUlJLE1BQUosR0FDSkQsS0FESSxHQUVKRSxRQUZJLEVBRHdCO0FBSS9CRSxnQkFBVVAsY0FBSUksTUFBSixHQUFhQyxRQUFiO0FBSnFCLEtBQWxCLENBQWY7O0FBRHdCLHlCQU9DTCxjQUFJUSxRQUFKLENBQWFWLElBQWIsRUFBbUJDLE1BQW5CLENBUEQ7QUFBQSxRQU9oQlUsS0FQZ0Isa0JBT2hCQSxLQVBnQjtBQUFBLFFBT1RDLEtBUFMsa0JBT1RBLEtBUFM7O0FBUXhCLFFBQUlELFNBQVNBLE1BQU1FLE9BQW5CLEVBQTRCO0FBQzFCLGFBQU8sRUFBRUYsWUFBRixFQUFQO0FBQ0Q7QUFDRCxXQUFPLEVBQUVDLFlBQUYsRUFBUDtBQUNELEdBM0JZO0FBNEJiRyxTQTVCYSxtQkE0QkxDLElBNUJLLEVBNEJDO0FBQ1osUUFBTUMsTUFBTSxFQUFaO0FBQ0EsUUFBSUQsS0FBS0UsS0FBVCxFQUFnQjtBQUNkLFVBQUlGLEtBQUtFLEtBQUwsQ0FBV2IsS0FBZixFQUFzQjtBQUNwQlksWUFBSVQsSUFBSixHQUFXUSxLQUFLRSxLQUFMLENBQVdWLElBQXRCO0FBQ0FTLFlBQUlaLEtBQUosR0FBWVcsS0FBS0UsS0FBTCxDQUFXYixLQUF2QjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSVcsS0FBS0csTUFBVCxFQUFpQjtBQUNmLFVBQUlILEtBQUtHLE1BQUwsQ0FBWWQsS0FBaEIsRUFBdUI7QUFDckJZLFlBQUlULElBQUosR0FBV1EsS0FBS0csTUFBTCxDQUFZQyxXQUF2QjtBQUNBSCxZQUFJWixLQUFKLEdBQVlXLEtBQUtHLE1BQUwsQ0FBWWQsS0FBeEI7QUFDRDtBQUNGOztBQUVELFFBQUlXLEtBQUtLLE1BQVQsRUFBaUI7QUFDZixVQUFJTCxLQUFLSyxNQUFMLENBQVloQixLQUFoQixFQUF1QjtBQUNyQlksWUFBSVQsSUFBSixHQUFXUSxLQUFLSyxNQUFMLENBQVlELFdBQXZCO0FBQ0FILFlBQUlaLEtBQUosR0FBWVcsS0FBS0ssTUFBTCxDQUFZaEIsS0FBeEI7QUFDRDtBQUNGO0FBQ0QsUUFBSVcsS0FBS00sT0FBVCxFQUFrQjtBQUNoQixVQUFJTixLQUFLTSxPQUFMLENBQWFqQixLQUFqQixFQUF3QjtBQUN0QlksWUFBSVQsSUFBSixHQUFXUSxLQUFLTSxPQUFMLENBQWFGLFdBQXhCO0FBQ0FILFlBQUlaLEtBQUosR0FBWVcsS0FBS00sT0FBTCxDQUFhakIsS0FBekI7QUFDRDtBQUNGOztBQUVELFdBQU9ZLEdBQVA7QUFDRCxHQTFEWTtBQTJEYk0sc0JBM0RhLGdDQTJEUXZCLElBM0RSLEVBMkRjO0FBQ3pCLFFBQU1DLFNBQVNDLGNBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUMvQkMsYUFBT0gsY0FBSUksTUFBSixHQUNKRCxLQURJLEdBRUpFLFFBRkk7QUFEd0IsS0FBbEIsQ0FBZjs7QUFEeUIseUJBTUFMLGNBQUlRLFFBQUosQ0FBYVYsSUFBYixFQUFtQkMsTUFBbkIsQ0FOQTtBQUFBLFFBTWpCVSxLQU5pQixrQkFNakJBLEtBTmlCO0FBQUEsUUFNVkMsS0FOVSxrQkFNVkEsS0FOVTs7QUFPekIsUUFBSUQsU0FBU0EsTUFBTUUsT0FBbkIsRUFBNEI7QUFDMUIsYUFBTyxFQUFFRixZQUFGLEVBQVA7QUFDRDtBQUNELFdBQU8sRUFBRUMsWUFBRixFQUFQO0FBQ0Q7QUF0RVksQyIsImZpbGUiOiJ1c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gXCJqb2lcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0ZVNpZ251cFNjaGVtYShib2R5KSB7XG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKVxuICAgICAgICAuZW1haWwoKVxuICAgICAgICAucmVxdWlyZWQoKSxcbiAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKVxuICAgIH0pO1xuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUoYm9keSwgc2NoZW1hKTtcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xuICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgfSxcbiAgdmFsaWRhdGVMb2dpblNjaGVtYShib2R5KSB7XG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKVxuICAgICAgICAuZW1haWwoKVxuICAgICAgICAucmVxdWlyZWQoKSxcbiAgICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxuICAgIH0pO1xuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBKb2kudmFsaWRhdGUoYm9keSwgc2NoZW1hKTtcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xuICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgfSxcbiAgZ2V0VXNlcih1c2VyKSB7XG4gICAgY29uc3QgcnNwID0ge307XG4gICAgaWYgKHVzZXIubG9jYWwpIHtcbiAgICAgIGlmICh1c2VyLmxvY2FsLmVtYWlsKSB7XG4gICAgICAgIHJzcC5uYW1lID0gdXNlci5sb2NhbC5uYW1lO1xuICAgICAgICByc3AuZW1haWwgPSB1c2VyLmxvY2FsLmVtYWlsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1c2VyLmdvb2dsZSkge1xuICAgICAgaWYgKHVzZXIuZ29vZ2xlLmVtYWlsKSB7XG4gICAgICAgIHJzcC5uYW1lID0gdXNlci5nb29nbGUuZGlzcGxheU5hbWU7XG4gICAgICAgIHJzcC5lbWFpbCA9IHVzZXIuZ29vZ2xlLmVtYWlsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1c2VyLmdpdGh1Yikge1xuICAgICAgaWYgKHVzZXIuZ2l0aHViLmVtYWlsKSB7XG4gICAgICAgIHJzcC5uYW1lID0gdXNlci5naXRodWIuZGlzcGxheU5hbWU7XG4gICAgICAgIHJzcC5lbWFpbCA9IHVzZXIuZ2l0aHViLmVtYWlsO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodXNlci50d2l0dGVyKSB7XG4gICAgICBpZiAodXNlci50d2l0dGVyLmVtYWlsKSB7XG4gICAgICAgIHJzcC5uYW1lID0gdXNlci50d2l0dGVyLmRpc3BsYXlOYW1lO1xuICAgICAgICByc3AuZW1haWwgPSB1c2VyLnR3aXR0ZXIuZW1haWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJzcDtcbiAgfSxcbiAgdmFsaWRhdGVGb3Jnb3RTY2hlbWEoYm9keSkge1xuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgIGVtYWlsOiBKb2kuc3RyaW5nKClcbiAgICAgICAgLmVtYWlsKClcbiAgICAgICAgLnJlcXVpcmVkKClcbiAgICB9KTtcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gSm9pLnZhbGlkYXRlKGJvZHksIHNjaGVtYSk7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgIHJldHVybiB7IGVycm9yIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlIH07XG4gIH1cbn07XG4iXX0=