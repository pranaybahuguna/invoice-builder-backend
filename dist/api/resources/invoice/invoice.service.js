"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getTotal: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(invoice) {
      var total, subTotal, salesTax;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              total = 0;
              subTotal = 0;


              if (typeof invoice.qty !== "undefined" && typeof invoice.rate !== "undefined") {
                total = invoice.qty * invoice.rate;
              }
              salesTax = 0;

              if (typeof invoice.tax !== "undefined") {
                salesTax = total * invoice.tax / 100;
              }
              subTotal = total + salesTax;
              return _context.abrupt("return", { total: total, subTotal: subTotal });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getTotal(_x) {
      return _ref.apply(this, arguments);
    }

    return getTotal;
  }(),
  getTemplateBody: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(invoice, subTotal, total, user) {
      var id, _invoice, _invoiceService$getTo, _subTotal, _total, _user, templateBody, html;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              id = req.params.id;
              _context2.next = 4;
              return Invoice.findById(id).populate("client");

            case 4:
              _invoice = _context2.sent;

              if (_invoice) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", res.status(NOT_FOUND).send({ err: "could not find any invice" }));

            case 7:
              _invoiceService$getTo = invoiceService.getTotal(_invoice), _subTotal = _invoiceService$getTo.subTotal, _total = _invoiceService$getTo.total;
              _user = userService.getUser(req.currentUser);
              templateBody = invoiceService.getTemplateBody(_invoice, _subTotal, _total, _user);
              html = invoiceService.getInvoiceTemplate(templateBody);

              res.pdfFromHTML({
                filename: _invoice.item + ".pdf",
                htmlContent: html
              });
              _context2.next = 18;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);

              console.error(_context2.t0);
              return _context2.abrupt("return", res.status(500).send(_context2.t0));

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 14]]);
    }));

    function getTemplateBody(_x2, _x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    }

    return getTemplateBody;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImdldFRvdGFsIiwiaW52b2ljZSIsInRvdGFsIiwic3ViVG90YWwiLCJxdHkiLCJyYXRlIiwic2FsZXNUYXgiLCJ0YXgiLCJnZXRUZW1wbGF0ZUJvZHkiLCJ1c2VyIiwiaWQiLCJyZXEiLCJwYXJhbXMiLCJJbnZvaWNlIiwiZmluZEJ5SWQiLCJwb3B1bGF0ZSIsInJlcyIsInN0YXR1cyIsIk5PVF9GT1VORCIsInNlbmQiLCJlcnIiLCJpbnZvaWNlU2VydmljZSIsInVzZXJTZXJ2aWNlIiwiZ2V0VXNlciIsImN1cnJlbnRVc2VyIiwidGVtcGxhdGVCb2R5IiwiaHRtbCIsImdldEludm9pY2VUZW1wbGF0ZSIsInBkZkZyb21IVE1MIiwiZmlsZW5hbWUiLCJpdGVtIiwiaHRtbENvbnRlbnQiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBQWU7QUFDUEEsVUFETztBQUFBLHlHQUNFQyxPQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVQQyxtQkFGTyxHQUVDLENBRkQ7QUFHUEMsc0JBSE8sR0FHSSxDQUhKOzs7QUFLWCxrQkFDRSxPQUFPRixRQUFRRyxHQUFmLEtBQXVCLFdBQXZCLElBQ0EsT0FBT0gsUUFBUUksSUFBZixLQUF3QixXQUYxQixFQUdFO0FBQ0FILHdCQUFRRCxRQUFRRyxHQUFSLEdBQWNILFFBQVFJLElBQTlCO0FBQ0Q7QUFDR0Msc0JBWE8sR0FXSSxDQVhKOztBQVlYLGtCQUFJLE9BQU9MLFFBQVFNLEdBQWYsS0FBdUIsV0FBM0IsRUFBd0M7QUFDdENELDJCQUFZSixRQUFRRCxRQUFRTSxHQUFqQixHQUF3QixHQUFuQztBQUNEO0FBQ0RKLHlCQUFXRCxRQUFRSSxRQUFuQjtBQWZXLCtDQWdCSixFQUFFSixZQUFGLEVBQVNDLGtCQUFULEVBaEJJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBa0JQSyxpQkFsQk87QUFBQSwyR0FrQlNQLE9BbEJULEVBa0JrQkUsUUFsQmxCLEVBa0I0QkQsS0FsQjVCLEVBa0JtQ08sSUFsQm5DO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9CREMsZ0JBcEJDLEdBb0JNQyxJQUFJQyxNQXBCVixDQW9CREYsRUFwQkM7QUFBQTtBQUFBLHFCQXFCYUcsUUFBUUMsUUFBUixDQUFpQkosRUFBakIsRUFBcUJLLFFBQXJCLENBQThCLFFBQTlCLENBckJiOztBQUFBO0FBcUJIZCxzQkFyQkc7O0FBQUEsa0JBc0JKQSxRQXRCSTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREF1QkFlLElBQUlDLE1BQUosQ0FBV0MsU0FBWCxFQUFzQkMsSUFBdEIsQ0FBMkIsRUFBRUMsS0FBSywyQkFBUCxFQUEzQixDQXZCQTs7QUFBQTtBQUFBLHNDQXlCbUJDLGVBQWVyQixRQUFmLENBQXdCQyxRQUF4QixDQXpCbkIsRUF5QkRFLFNBekJDLHlCQXlCREEsUUF6QkMsRUF5QlNELE1BekJULHlCQXlCU0EsS0F6QlQ7QUEwQkhPLG1CQTFCRyxHQTBCSWEsWUFBWUMsT0FBWixDQUFvQlosSUFBSWEsV0FBeEIsQ0ExQko7QUEyQkhDLDBCQTNCRyxHQTJCWUosZUFBZWIsZUFBZixDQUNuQlAsUUFEbUIsRUFFbkJFLFNBRm1CLEVBR25CRCxNQUhtQixFQUluQk8sS0FKbUIsQ0EzQlo7QUFpQ0hpQixrQkFqQ0csR0FpQ0lMLGVBQWVNLGtCQUFmLENBQWtDRixZQUFsQyxDQWpDSjs7QUFrQ1RULGtCQUFJWSxXQUFKLENBQWdCO0FBQ2RDLDBCQUFhNUIsU0FBUTZCLElBQXJCLFNBRGM7QUFFZEMsNkJBQWFMO0FBRkMsZUFBaEI7QUFsQ1M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBdUNUTSxzQkFBUUMsS0FBUjtBQXZDUyxnREF3Q0ZqQixJQUFJQyxNQUFKLENBQVcsR0FBWCxFQUFnQkUsSUFBaEIsY0F4Q0U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6Imludm9pY2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgYXN5bmMgZ2V0VG90YWwoaW52b2ljZSkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgbGV0IHN1YlRvdGFsID0gMDtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBpbnZvaWNlLnF0eSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgdHlwZW9mIGludm9pY2UucmF0ZSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICkge1xuICAgICAgdG90YWwgPSBpbnZvaWNlLnF0eSAqIGludm9pY2UucmF0ZTtcbiAgICB9XG4gICAgbGV0IHNhbGVzVGF4ID0gMDtcbiAgICBpZiAodHlwZW9mIGludm9pY2UudGF4ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzYWxlc1RheCA9ICh0b3RhbCAqIGludm9pY2UudGF4KSAvIDEwMDtcbiAgICB9XG4gICAgc3ViVG90YWwgPSB0b3RhbCArIHNhbGVzVGF4O1xuICAgIHJldHVybiB7IHRvdGFsLCBzdWJUb3RhbCB9O1xuICB9LFxuICBhc3luYyBnZXRUZW1wbGF0ZUJvZHkoaW52b2ljZSwgc3ViVG90YWwsIHRvdGFsLCB1c2VyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgSW52b2ljZS5maW5kQnlJZChpZCkucG9wdWxhdGUoXCJjbGllbnRcIik7XG4gICAgICBpZiAoIWludm9pY2UpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoTk9UX0ZPVU5EKS5zZW5kKHsgZXJyOiBcImNvdWxkIG5vdCBmaW5kIGFueSBpbnZpY2VcIiB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgc3ViVG90YWwsIHRvdGFsIH0gPSBpbnZvaWNlU2VydmljZS5nZXRUb3RhbChpbnZvaWNlKTtcbiAgICAgIGNvbnN0IHVzZXIgPSB1c2VyU2VydmljZS5nZXRVc2VyKHJlcS5jdXJyZW50VXNlcik7XG4gICAgICBjb25zdCB0ZW1wbGF0ZUJvZHkgPSBpbnZvaWNlU2VydmljZS5nZXRUZW1wbGF0ZUJvZHkoXG4gICAgICAgIGludm9pY2UsXG4gICAgICAgIHN1YlRvdGFsLFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgdXNlclxuICAgICAgKTtcbiAgICAgIGNvbnN0IGh0bWwgPSBpbnZvaWNlU2VydmljZS5nZXRJbnZvaWNlVGVtcGxhdGUodGVtcGxhdGVCb2R5KTtcbiAgICAgIHJlcy5wZGZGcm9tSFRNTCh7XG4gICAgICAgIGZpbGVuYW1lOiBgJHtpbnZvaWNlLml0ZW19LnBkZmAsXG4gICAgICAgIGh0bWxDb250ZW50OiBodG1sXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIpO1xuICAgIH1cbiAgfVxufTtcbiJdfQ==