"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _httpStatusCodes = require("http-status-codes");

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _swaggerUiExpress = require("swagger-ui-express");

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _swagger = require("./config/swagger.json");

var _swagger2 = _interopRequireDefault(_swagger);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _routes = require("./config/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect("mongodb://localhost:27017/invoice-builder");

var app = (0, _express2.default)();
var PORT = 3000;

app.use(_express2.default.json());
app.use((0, _cors2.default)());
app.use((0, _morgan2.default)("common"));
app.use("/api-docs", _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, { explorer: true }));
app.use("/api", _routes.router);
app.use(function (req, res, next) {
  var error = new Error("Invalid Route");
  error.status = _httpStatusCodes2.default.NOT_FOUND;
  next(error);
});

app.use(function (error, req, res, next) {
  res.status(error.status || _httpStatusCodes2.default.INTERNAL_SERVER_ERROR);
  return res.json({
    error: {
      message: error.message
    }
  });
});

app.get("/", function (req, res) {
  res.json({
    msg: "Welcome to invoice builder backend"
  });
});

app.get("/invoices", function (req, res) {
  res.json(invoices);
});

app.listen(PORT, function () {
  console.log("Server is running at PORT " + PORT);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJQcm9taXNlIiwiZ2xvYmFsIiwiY29ubmVjdCIsImFwcCIsIlBPUlQiLCJ1c2UiLCJleHByZXNzIiwianNvbiIsInN3YWdnZXJVaSIsInNlcnZlIiwic2V0dXAiLCJzd2FnZ2VyRG9jdW1lbnQiLCJleHBsb3JlciIsInJvdXRlciIsInJlcSIsInJlcyIsIm5leHQiLCJlcnJvciIsIkVycm9yIiwic3RhdHVzIiwiSHR0cFN0YXR1cyIsIk5PVF9GT1VORCIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsIm1lc3NhZ2UiLCJnZXQiLCJtc2ciLCJpbnZvaWNlcyIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBQSxtQkFBU0MsT0FBVCxHQUFtQkMsT0FBT0QsT0FBMUI7QUFDQUQsbUJBQVNHLE9BQVQsQ0FBaUIsMkNBQWpCOztBQUVBLElBQU1DLE1BQU0sd0JBQVo7QUFDQSxJQUFNQyxPQUFPLElBQWI7O0FBRUFELElBQUlFLEdBQUosQ0FBUUMsa0JBQVFDLElBQVIsRUFBUjtBQUNBSixJQUFJRSxHQUFKLENBQVEscUJBQVI7QUFDQUYsSUFBSUUsR0FBSixDQUFRLHNCQUFPLFFBQVAsQ0FBUjtBQUNBRixJQUFJRSxHQUFKLENBQ0UsV0FERixFQUVFRywyQkFBVUMsS0FGWixFQUdFRCwyQkFBVUUsS0FBVixDQUFnQkMsaUJBQWhCLEVBQWlDLEVBQUVDLFVBQVUsSUFBWixFQUFqQyxDQUhGO0FBS0FULElBQUlFLEdBQUosQ0FBUSxNQUFSLEVBQWdCUSxjQUFoQjtBQUNBVixJQUFJRSxHQUFKLENBQVEsVUFBQ1MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFDMUIsTUFBTUMsUUFBUSxJQUFJQyxLQUFKLENBQVUsZUFBVixDQUFkO0FBQ0FELFFBQU1FLE1BQU4sR0FBZUMsMEJBQVdDLFNBQTFCO0FBQ0FMLE9BQUtDLEtBQUw7QUFDRCxDQUpEOztBQU1BZCxJQUFJRSxHQUFKLENBQVEsVUFBQ1ksS0FBRCxFQUFRSCxHQUFSLEVBQWFDLEdBQWIsRUFBa0JDLElBQWxCLEVBQTJCO0FBQ2pDRCxNQUFJSSxNQUFKLENBQVdGLE1BQU1FLE1BQU4sSUFBZ0JDLDBCQUFXRSxxQkFBdEM7QUFDQSxTQUFPUCxJQUFJUixJQUFKLENBQVM7QUFDZFUsV0FBTztBQUNMTSxlQUFTTixNQUFNTTtBQURWO0FBRE8sR0FBVCxDQUFQO0FBS0QsQ0FQRDs7QUFTQXBCLElBQUlxQixHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNWLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3pCQSxNQUFJUixJQUFKLENBQVM7QUFDUGtCLFNBQUs7QUFERSxHQUFUO0FBR0QsQ0FKRDs7QUFNQXRCLElBQUlxQixHQUFKLENBQVEsV0FBUixFQUFxQixVQUFDVixHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNqQ0EsTUFBSVIsSUFBSixDQUFTbUIsUUFBVDtBQUNELENBRkQ7O0FBSUF2QixJQUFJd0IsTUFBSixDQUFXdkIsSUFBWCxFQUFpQixZQUFNO0FBQ3JCd0IsVUFBUUMsR0FBUixnQ0FBeUN6QixJQUF6QztBQUNELENBRkQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgSHR0cFN0YXR1cyBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwibW9yZ2FuXCI7XHJcbmltcG9ydCBzd2FnZ2VyVWkgZnJvbSBcInN3YWdnZXItdWktZXhwcmVzc1wiO1xyXG5pbXBvcnQgc3dhZ2dlckRvY3VtZW50IGZyb20gXCIuL2NvbmZpZy9zd2FnZ2VyLmpzb25cIjtcclxuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcclxuXHJcbmltcG9ydCB7IHJvdXRlciB9IGZyb20gXCIuL2NvbmZpZy9yb3V0ZXNcIjtcclxubW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xyXG5tb25nb29zZS5jb25uZWN0KFwibW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9pbnZvaWNlLWJ1aWxkZXJcIik7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IFBPUlQgPSAzMDAwO1xyXG5cclxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbmFwcC51c2UoY29ycygpKTtcclxuYXBwLnVzZShsb2dnZXIoXCJjb21tb25cIikpO1xyXG5hcHAudXNlKFxyXG4gIFwiL2FwaS1kb2NzXCIsXHJcbiAgc3dhZ2dlclVpLnNlcnZlLFxyXG4gIHN3YWdnZXJVaS5zZXR1cChzd2FnZ2VyRG9jdW1lbnQsIHsgZXhwbG9yZXI6IHRydWUgfSlcclxuKTtcclxuYXBwLnVzZShcIi9hcGlcIiwgcm91dGVyKTtcclxuYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcIkludmFsaWQgUm91dGVcIik7XHJcbiAgZXJyb3Iuc3RhdHVzID0gSHR0cFN0YXR1cy5OT1RfRk9VTkQ7XHJcbiAgbmV4dChlcnJvcik7XHJcbn0pO1xyXG5cclxuYXBwLnVzZSgoZXJyb3IsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgcmVzLnN0YXR1cyhlcnJvci5zdGF0dXMgfHwgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpO1xyXG4gIHJldHVybiByZXMuanNvbih7XHJcbiAgICBlcnJvcjoge1xyXG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9cIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLmpzb24oe1xyXG4gICAgbXNnOiBcIldlbGNvbWUgdG8gaW52b2ljZSBidWlsZGVyIGJhY2tlbmRcIlxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvaW52b2ljZXNcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLmpzb24oaW52b2ljZXMpO1xyXG59KTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZyBhdCBQT1JUICR7UE9SVH1gKTtcclxufSk7XHJcbiJdfQ==