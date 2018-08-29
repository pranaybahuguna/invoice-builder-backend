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
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlU2lnbnVwU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiZ2V0VXNlciIsInVzZXIiLCJyc3AiLCJsb2NhbCIsIm5hbWUiLCJnb29nbGUiLCJkaXNwbGF5TmFtZSIsImdpdGh1YiIsInR3aXR0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYkEsc0JBRGEsZ0NBQ1FDLElBRFIsRUFDYztBQUN6QixRQUFNQyxTQUFTQyxjQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDL0JDLGFBQU9ILGNBQUlJLE1BQUosR0FDSkQsS0FESSxHQUVKRSxRQUZJLEVBRHdCO0FBSS9CQyxnQkFBVU4sY0FBSUksTUFBSixHQUFhQyxRQUFiO0FBSnFCLEtBQWxCLENBQWY7O0FBRHlCLHdCQU9BTCxjQUFJTyxRQUFKLENBQWFULElBQWIsRUFBbUJDLE1BQW5CLENBUEE7QUFBQSxRQU9qQlMsS0FQaUIsaUJBT2pCQSxLQVBpQjtBQUFBLFFBT1ZDLEtBUFUsaUJBT1ZBLEtBUFU7O0FBUXpCLFFBQUlELFNBQVNBLE1BQU1FLE9BQW5CLEVBQTRCO0FBQzFCLGFBQU8sRUFBRUYsWUFBRixFQUFQO0FBQ0Q7QUFDRCxXQUFPLEVBQUVDLFlBQUYsRUFBUDtBQUNELEdBYlk7QUFjYkUsU0FkYSxtQkFjTEMsSUFkSyxFQWNDO0FBQ1osUUFBTUMsTUFBTSxFQUFaO0FBQ0EsUUFBSUQsS0FBS0UsS0FBVCxFQUFnQjtBQUNkLFVBQUlGLEtBQUtFLEtBQUwsQ0FBV1gsS0FBZixFQUFzQjtBQUNwQlUsWUFBSUUsSUFBSixHQUFXSCxLQUFLRSxLQUFMLENBQVdDLElBQXRCO0FBQ0FGLFlBQUlWLEtBQUosR0FBWVMsS0FBS0UsS0FBTCxDQUFXWCxLQUF2QjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSVMsS0FBS0ksTUFBVCxFQUFpQjtBQUNmLFVBQUlKLEtBQUtJLE1BQUwsQ0FBWWIsS0FBaEIsRUFBdUI7QUFDckJVLFlBQUlFLElBQUosR0FBV0gsS0FBS0ksTUFBTCxDQUFZQyxXQUF2QjtBQUNBSixZQUFJVixLQUFKLEdBQVlTLEtBQUtJLE1BQUwsQ0FBWWIsS0FBeEI7QUFDRDtBQUNGOztBQUVELFFBQUlTLEtBQUtNLE1BQVQsRUFBaUI7QUFDZixVQUFJTixLQUFLTSxNQUFMLENBQVlmLEtBQWhCLEVBQXVCO0FBQ3JCVSxZQUFJRSxJQUFKLEdBQVdILEtBQUtNLE1BQUwsQ0FBWUQsV0FBdkI7QUFDQUosWUFBSVYsS0FBSixHQUFZUyxLQUFLTSxNQUFMLENBQVlmLEtBQXhCO0FBQ0Q7QUFDRjtBQUNELFFBQUlTLEtBQUtPLE9BQVQsRUFBa0I7QUFDaEIsVUFBSVAsS0FBS08sT0FBTCxDQUFhaEIsS0FBakIsRUFBd0I7QUFDdEJVLFlBQUlFLElBQUosR0FBV0gsS0FBS08sT0FBTCxDQUFhRixXQUF4QjtBQUNBSixZQUFJVixLQUFKLEdBQVlTLEtBQUtPLE9BQUwsQ0FBYWhCLEtBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPVSxHQUFQO0FBQ0Q7QUE1Q1ksQyIsImZpbGUiOiJ1c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gXCJqb2lcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB2YWxpZGF0ZVNpZ251cFNjaGVtYShib2R5KSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgIGVtYWlsOiBKb2kuc3RyaW5nKClcclxuICAgICAgICAuZW1haWwoKVxyXG4gICAgICAgIC5yZXF1aXJlZCgpLFxyXG4gICAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKClcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IEpvaS52YWxpZGF0ZShib2R5LCBzY2hlbWEpO1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHZhbHVlIH07XHJcbiAgfSxcclxuICBnZXRVc2VyKHVzZXIpIHtcclxuICAgIGNvbnN0IHJzcCA9IHt9O1xyXG4gICAgaWYgKHVzZXIubG9jYWwpIHtcclxuICAgICAgaWYgKHVzZXIubG9jYWwuZW1haWwpIHtcclxuICAgICAgICByc3AubmFtZSA9IHVzZXIubG9jYWwubmFtZTtcclxuICAgICAgICByc3AuZW1haWwgPSB1c2VyLmxvY2FsLmVtYWlsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVzZXIuZ29vZ2xlKSB7XHJcbiAgICAgIGlmICh1c2VyLmdvb2dsZS5lbWFpbCkge1xyXG4gICAgICAgIHJzcC5uYW1lID0gdXNlci5nb29nbGUuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgcnNwLmVtYWlsID0gdXNlci5nb29nbGUuZW1haWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodXNlci5naXRodWIpIHtcclxuICAgICAgaWYgKHVzZXIuZ2l0aHViLmVtYWlsKSB7XHJcbiAgICAgICAgcnNwLm5hbWUgPSB1c2VyLmdpdGh1Yi5kaXNwbGF5TmFtZTtcclxuICAgICAgICByc3AuZW1haWwgPSB1c2VyLmdpdGh1Yi5lbWFpbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHVzZXIudHdpdHRlcikge1xyXG4gICAgICBpZiAodXNlci50d2l0dGVyLmVtYWlsKSB7XHJcbiAgICAgICAgcnNwLm5hbWUgPSB1c2VyLnR3aXR0ZXIuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgcnNwLmVtYWlsID0gdXNlci50d2l0dGVyLmVtYWlsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJzcDtcclxuICB9XHJcbn07XHJcbiJdfQ==