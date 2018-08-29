"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = undefined;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _nodemailer = require("nodemailer");

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _htmlToText = require("html-to-text");

var _htmlToText2 = _interopRequireDefault(_htmlToText);

var _development = require("../../config/env/development");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendEmail = exports.sendEmail = function sendEmail(options) {
  return new _promise2.default(function (resolve, reject) {
    var transpoter = _nodemailer2.default.createTransport({
      host: _development.devConfig.ethereal.host,
      port: _development.devConfig.ethereal.port,
      auth: {
        user: _development.devConfig.ethereal.username,
        pass: _development.devConfig.ethereal.password
      }
    });
    var text = _htmlToText2.default.fromString(options.html, {
      wordwrap: 130
    });
    var mailOptions = {
      from: '"Pranay Bahuguna 👻"',
      to: options.email,
      subject: options.subject,
      text: text,
      html: options.html
    };
    transpoter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return reject(error);
      }
      console.log("Message id ", info.messageId);
      console.log("Preview URL ", _nodemailer2.default.getTestMessageUrl(info));
      return resolve({ message: "Reset Email has been sent to your inbox" });
    });
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kdWxlcy9tYWlsLmpzIl0sIm5hbWVzIjpbInNlbmRFbWFpbCIsInJlc29sdmUiLCJyZWplY3QiLCJ0cmFuc3BvdGVyIiwibm9kZW1haWxlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJkZXZDb25maWciLCJldGhlcmVhbCIsInBvcnQiLCJhdXRoIiwidXNlciIsInVzZXJuYW1lIiwicGFzcyIsInBhc3N3b3JkIiwidGV4dCIsImh0bWxUb1RleHQiLCJmcm9tU3RyaW5nIiwib3B0aW9ucyIsImh0bWwiLCJ3b3Jkd3JhcCIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwiZW1haWwiLCJzdWJqZWN0Iiwic2VuZE1haWwiLCJlcnJvciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZUlkIiwiZ2V0VGVzdE1lc3NhZ2VVcmwiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVPLElBQU1BLGdDQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUN2QixzQkFBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDL0IsUUFBTUMsYUFBYUMscUJBQVdDLGVBQVgsQ0FBMkI7QUFDNUNDLFlBQU1DLHVCQUFVQyxRQUFWLENBQW1CRixJQURtQjtBQUU1Q0csWUFBTUYsdUJBQVVDLFFBQVYsQ0FBbUJDLElBRm1CO0FBRzVDQyxZQUFNO0FBQ0pDLGNBQU1KLHVCQUFVQyxRQUFWLENBQW1CSSxRQURyQjtBQUVKQyxjQUFNTix1QkFBVUMsUUFBVixDQUFtQk07QUFGckI7QUFIc0MsS0FBM0IsQ0FBbkI7QUFRQSxRQUFNQyxPQUFPQyxxQkFBV0MsVUFBWCxDQUFzQkMsUUFBUUMsSUFBOUIsRUFBb0M7QUFDL0NDLGdCQUFVO0FBRHFDLEtBQXBDLENBQWI7QUFHQSxRQUFNQyxjQUFjO0FBQ2xCQyxZQUFNLHNCQURZO0FBRWxCQyxVQUFJTCxRQUFRTSxLQUZNO0FBR2xCQyxlQUFTUCxRQUFRTyxPQUhDO0FBSWxCVixnQkFKa0I7QUFLbEJJLFlBQU1ELFFBQVFDO0FBTEksS0FBcEI7QUFPQWhCLGVBQVd1QixRQUFYLENBQW9CTCxXQUFwQixFQUFpQyxVQUFDTSxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDaEQsVUFBSUQsS0FBSixFQUFXO0FBQ1QsZUFBT3pCLE9BQU95QixLQUFQLENBQVA7QUFDRDtBQUNERSxjQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkYsS0FBS0csU0FBaEM7QUFDQUYsY0FBUUMsR0FBUixDQUFZLGNBQVosRUFBNEIxQixxQkFBVzRCLGlCQUFYLENBQTZCSixJQUE3QixDQUE1QjtBQUNBLGFBQU8zQixRQUFRLEVBQUVnQyxTQUFTLHlDQUFYLEVBQVIsQ0FBUDtBQUNELEtBUEQ7QUFRRCxHQTNCRCxDQUR1QjtBQUFBLENBQWxCIiwiZmlsZSI6Im1haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xyXG5pbXBvcnQgaHRtbFRvVGV4dCBmcm9tIFwiaHRtbC10by10ZXh0XCI7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZEVtYWlsID0gb3B0aW9ucyA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IHRyYW5zcG90ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgIGhvc3Q6IGRldkNvbmZpZy5ldGhlcmVhbC5ob3N0LFxyXG4gICAgICBwb3J0OiBkZXZDb25maWcuZXRoZXJlYWwucG9ydCxcclxuICAgICAgYXV0aDoge1xyXG4gICAgICAgIHVzZXI6IGRldkNvbmZpZy5ldGhlcmVhbC51c2VybmFtZSxcclxuICAgICAgICBwYXNzOiBkZXZDb25maWcuZXRoZXJlYWwucGFzc3dvcmRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB0ZXh0ID0gaHRtbFRvVGV4dC5mcm9tU3RyaW5nKG9wdGlvbnMuaHRtbCwge1xyXG4gICAgICB3b3Jkd3JhcDogMTMwXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG1haWxPcHRpb25zID0ge1xyXG4gICAgICBmcm9tOiAnXCJQcmFuYXkgQmFodWd1bmEg8J+Ru1wiJyxcclxuICAgICAgdG86IG9wdGlvbnMuZW1haWwsXHJcbiAgICAgIHN1YmplY3Q6IG9wdGlvbnMuc3ViamVjdCxcclxuICAgICAgdGV4dCxcclxuICAgICAgaHRtbDogb3B0aW9ucy5odG1sXHJcbiAgICB9O1xyXG4gICAgdHJhbnNwb3Rlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVycm9yLCBpbmZvKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBpZCBcIiwgaW5mby5tZXNzYWdlSWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByZXZpZXcgVVJMIFwiLCBub2RlbWFpbGVyLmdldFRlc3RNZXNzYWdlVXJsKGluZm8pKTtcclxuICAgICAgcmV0dXJuIHJlc29sdmUoeyBtZXNzYWdlOiBcIlJlc2V0IEVtYWlsIGhhcyBiZWVuIHNlbnQgdG8geW91ciBpbmJveFwiIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiJdfQ==