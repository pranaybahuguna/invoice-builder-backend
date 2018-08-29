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
    var transpoter = null;
    transpoter = _nodemailer2.default.createTransport({
      service: "gmail",
      auth: {
        user: "meanapp.noreply@gmail.com", //devConfig.meanAppGmail.email,
        pass: "nxVMcnszMMDvhRzNEv" //devConfig.meanAppGmail.password
      }
    });
    /*transpoter = nodemailer.createTransport({
        host: devConfig.ethereal.host,
        port: devConfig.ethereal.port,
        auth: {
          user: devConfig.ethereal.username,
          pass: devConfig.ethereal.password
        }
      });*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kdWxlcy9tYWlsLmpzIl0sIm5hbWVzIjpbInNlbmRFbWFpbCIsInJlc29sdmUiLCJyZWplY3QiLCJ0cmFuc3BvdGVyIiwibm9kZW1haWxlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInBhc3MiLCJ0ZXh0IiwiaHRtbFRvVGV4dCIsImZyb21TdHJpbmciLCJvcHRpb25zIiwiaHRtbCIsIndvcmR3cmFwIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJlbWFpbCIsInN1YmplY3QiLCJzZW5kTWFpbCIsImVycm9yIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlSWQiLCJnZXRUZXN0TWVzc2FnZVVybCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRU8sSUFBTUEsZ0NBQVksU0FBWkEsU0FBWTtBQUFBLFNBQ3ZCLHNCQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQixRQUFJQyxhQUFhLElBQWpCO0FBQ0FBLGlCQUFhQyxxQkFBV0MsZUFBWCxDQUEyQjtBQUN0Q0MsZUFBUyxPQUQ2QjtBQUV0Q0MsWUFBTTtBQUNKQyxjQUFNLDJCQURGLEVBQytCO0FBQ25DQyxjQUFNLG9CQUZGLENBRXVCO0FBRnZCO0FBRmdDLEtBQTNCLENBQWI7QUFPQTs7Ozs7Ozs7O0FBU0EsUUFBTUMsT0FBT0MscUJBQVdDLFVBQVgsQ0FBc0JDLFFBQVFDLElBQTlCLEVBQW9DO0FBQy9DQyxnQkFBVTtBQURxQyxLQUFwQyxDQUFiO0FBR0EsUUFBTUMsY0FBYztBQUNsQkMsWUFBTSxzQkFEWTtBQUVsQkMsVUFBSUwsUUFBUU0sS0FGTTtBQUdsQkMsZUFBU1AsUUFBUU8sT0FIQztBQUlsQlYsZ0JBSmtCO0FBS2xCSSxZQUFNRCxRQUFRQztBQUxJLEtBQXBCO0FBT0FYLGVBQVdrQixRQUFYLENBQW9CTCxXQUFwQixFQUFpQyxVQUFDTSxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDaEQsVUFBSUQsS0FBSixFQUFXO0FBQ1QsZUFBT3BCLE9BQU9vQixLQUFQLENBQVA7QUFDRDtBQUNERSxjQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkYsS0FBS0csU0FBaEM7QUFDQUYsY0FBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJyQixxQkFBV3VCLGlCQUFYLENBQTZCSixJQUE3QixDQUE1QjtBQUNBLGFBQU90QixRQUFRLEVBQUUyQixTQUFTLHlDQUFYLEVBQVIsQ0FBUDtBQUNELEtBUEQ7QUFRRCxHQXBDRCxDQUR1QjtBQUFBLENBQWxCIiwiZmlsZSI6Im1haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuaW1wb3J0IGh0bWxUb1RleHQgZnJvbSBcImh0bWwtdG8tdGV4dFwiO1xuaW1wb3J0IHsgZGV2Q29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcblxuZXhwb3J0IGNvbnN0IHNlbmRFbWFpbCA9IG9wdGlvbnMgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCB0cmFuc3BvdGVyID0gbnVsbDtcbiAgICB0cmFuc3BvdGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgc2VydmljZTogXCJnbWFpbFwiLFxuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBcIm1lYW5hcHAubm9yZXBseUBnbWFpbC5jb21cIiwgLy9kZXZDb25maWcubWVhbkFwcEdtYWlsLmVtYWlsLFxuICAgICAgICBwYXNzOiBcIm54Vk1jbnN6TU1EdmhSek5FdlwiIC8vZGV2Q29uZmlnLm1lYW5BcHBHbWFpbC5wYXNzd29yZFxuICAgICAgfVxuICAgIH0pO1xuICAgIC8qdHJhbnNwb3RlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgICAgaG9zdDogZGV2Q29uZmlnLmV0aGVyZWFsLmhvc3QsXG4gICAgICAgIHBvcnQ6IGRldkNvbmZpZy5ldGhlcmVhbC5wb3J0LFxuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgdXNlcjogZGV2Q29uZmlnLmV0aGVyZWFsLnVzZXJuYW1lLFxuICAgICAgICAgIHBhc3M6IGRldkNvbmZpZy5ldGhlcmVhbC5wYXNzd29yZFxuICAgICAgICB9XG4gICAgICB9KTsqL1xuXG4gICAgY29uc3QgdGV4dCA9IGh0bWxUb1RleHQuZnJvbVN0cmluZyhvcHRpb25zLmh0bWwsIHtcbiAgICAgIHdvcmR3cmFwOiAxMzBcbiAgICB9KTtcbiAgICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcbiAgICAgIGZyb206ICdcIlByYW5heSBCYWh1Z3VuYSDwn5G7XCInLFxuICAgICAgdG86IG9wdGlvbnMuZW1haWwsXG4gICAgICBzdWJqZWN0OiBvcHRpb25zLnN1YmplY3QsXG4gICAgICB0ZXh0LFxuICAgICAgaHRtbDogb3B0aW9ucy5odG1sXG4gICAgfTtcbiAgICB0cmFuc3BvdGVyLnNlbmRNYWlsKG1haWxPcHRpb25zLCAoZXJyb3IsIGluZm8pID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBpZCBcIiwgaW5mby5tZXNzYWdlSWQpO1xuICAgICAgY29uc29sZS5sb2coXCJQcmV2aWV3IFVSTCBcIiwgbm9kZW1haWxlci5nZXRUZXN0TWVzc2FnZVVybChpbmZvKSk7XG4gICAgICByZXR1cm4gcmVzb2x2ZSh7IG1lc3NhZ2U6IFwiUmVzZXQgRW1haWwgaGFzIGJlZW4gc2VudCB0byB5b3VyIGluYm94XCIgfSk7XG4gICAgfSk7XG4gIH0pO1xuIl19