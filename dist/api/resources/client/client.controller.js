"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _client = require("./client.service");

var _client2 = _interopRequireDefault(_client);

var _client3 = require("./client.model");

var _client4 = _interopRequireDefault(_client3);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: function create(req, res) {
    var _clientService$valida = _client2.default.validateCreateSchema(req.body),
        value = _clientService$valida.value,
        error = _clientService$valida.error;

    if (error && error.details) {
      return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message);
    }
    _client4.default.create(value).then(function (client) {
      res.json(client);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  findAll: function findAll(req, res) {
    _client4.default.find().then(function (clients) {
      res.json(clients);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _client4.default.findById(id).then(function (client) {
      if (!client) {
        return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "client id not found" });
      }
      return res.json(client);
    }).catch(function (err) {
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  delete: function _delete(req, res) {
    var id = req.params.id;

    _client4.default.findByIdAndRemove(id).then(function (client) {
      if (!client) {
        return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "client id not found" });
      }
      return res.json(client);
    }).catch(function (err) {
      res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    var _clientService$valida2 = _client2.default.validateUpdateSchema(req.body),
        value = _clientService$valida2.value,
        error = _clientService$valida2.error;

    if (error && error.details) {
      return res.status(_httpStatusCodes2.default.BAD_REQUEST).json(error.message);
    }
    _client4.default.findOneAndUpdate({ _id: id }, value, { new: true }).then(function (client) {
      if (!client) {
        return res.status(_httpStatusCodes2.default.NOT_FOUND).json({ err: "Update Unsuccessful" });
      }
      res.json(client);
    }).catch(function (err) {
      return res.status(_httpStatusCodes2.default.INTERNAL_SERVER_ERROR).json(err);
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJyZXEiLCJyZXMiLCJjbGllbnRTZXJ2aWNlIiwidmFsaWRhdGVDcmVhdGVTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsImRldGFpbHMiLCJzdGF0dXMiLCJIdHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwibWVzc2FnZSIsIkNsaWVudCIsInRoZW4iLCJjbGllbnQiLCJjYXRjaCIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImVyciIsImZpbmRBbGwiLCJmaW5kIiwiY2xpZW50cyIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiTk9UX0ZPVU5EIiwiZGVsZXRlIiwiZmluZEJ5SWRBbmRSZW1vdmUiLCJ1cGRhdGUiLCJ2YWxpZGF0ZVVwZGF0ZVNjaGVtYSIsImZpbmRPbmVBbmRVcGRhdGUiLCJfaWQiLCJuZXciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ2JBLFFBRGEsa0JBQ05DLEdBRE0sRUFDREMsR0FEQyxFQUNJO0FBQUEsZ0NBQ1VDLGlCQUFjQyxvQkFBZCxDQUFtQ0gsSUFBSUksSUFBdkMsQ0FEVjtBQUFBLFFBQ1BDLEtBRE8seUJBQ1BBLEtBRE87QUFBQSxRQUNBQyxLQURBLHlCQUNBQSxLQURBOztBQUVmLFFBQUlBLFNBQVNBLE1BQU1DLE9BQW5CLEVBQTRCO0FBQzFCLGFBQU9OLElBQUlPLE1BQUosQ0FBV0MsMEJBQVdDLFdBQXRCLEVBQW1DQyxJQUFuQyxDQUF3Q0wsTUFBTU0sT0FBOUMsQ0FBUDtBQUNEO0FBQ0RDLHFCQUFPZCxNQUFQLENBQWNNLEtBQWQsRUFDR1MsSUFESCxDQUNRLGtCQUFVO0FBQ2RiLFVBQUlVLElBQUosQ0FBU0ksTUFBVDtBQUNELEtBSEgsRUFJR0MsS0FKSCxDQUlTO0FBQUEsYUFBT2Ys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NkNOLElBQTdDLENBQWtETyxHQUFsRCxDQUFQO0FBQUEsS0FUVDtBQVVEO0FBcEVZLEMiLCJmaWxlIjoiY2xpZW50LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50U2VydmljZSBmcm9tIFwiLi9jbGllbnQuc2VydmljZVwiO1xuaW1wb3J0IENsaWVudCBmcm9tIFwiLi9jbGllbnQubW9kZWxcIjtcbmltcG9ydCBIdHRwU3RhdHVzIGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZShyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSBjbGllbnRTZXJ2aWNlLnZhbGlkYXRlQ3JlYXRlU2NoZW1hKHJlcS5ib2R5KTtcbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlscykge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCkuanNvbihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gICAgQ2xpZW50LmNyZWF0ZSh2YWx1ZSlcbiAgICAgIC50aGVuKGNsaWVudCA9PiB7XG4gICAgICAgIHJlcy5qc29uKGNsaWVudCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xuICB9LFxuICBmaW5kQWxsKHJlcSwgcmVzKSB7XG4gICAgQ2xpZW50LmZpbmQoKVxuICAgICAgLnRoZW4oY2xpZW50cyA9PiB7XG4gICAgICAgIHJlcy5qc29uKGNsaWVudHMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcbiAgfSxcblxuICBmaW5kT25lKHJlcSwgcmVzKSB7XG4gICAgbGV0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgQ2xpZW50LmZpbmRCeUlkKGlkKVxuICAgICAgLnRoZW4oY2xpZW50ID0+IHtcbiAgICAgICAgaWYgKCFjbGllbnQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuTk9UX0ZPVU5EKVxuICAgICAgICAgICAgLmpzb24oeyBlcnI6IFwiY2xpZW50IGlkIG5vdCBmb3VuZFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbihjbGllbnQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XG4gICAgICB9KTtcbiAgfSxcblxuICBkZWxldGUocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIENsaWVudC5maW5kQnlJZEFuZFJlbW92ZShpZClcbiAgICAgIC50aGVuKGNsaWVudCA9PiB7XG4gICAgICAgIGlmICghY2xpZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORClcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcImNsaWVudCBpZCBub3QgZm91bmRcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oY2xpZW50KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xuICAgICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gY2xpZW50U2VydmljZS52YWxpZGF0ZVVwZGF0ZVNjaGVtYShyZXEuYm9keSk7XG4gICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICAgIENsaWVudC5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBpZCB9LCB2YWx1ZSwgeyBuZXc6IHRydWUgfSlcbiAgICAgIC50aGVuKGNsaWVudCA9PiB7XG4gICAgICAgIGlmICghY2xpZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk5PVF9GT1VORClcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcIlVwZGF0ZSBVbnN1Y2Nlc3NmdWxcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXMuanNvbihjbGllbnQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcbiAgfVxufTtcbiJdfQ==