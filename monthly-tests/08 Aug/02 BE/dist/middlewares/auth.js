"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _userModel = _interopRequireDefault(require("../models/userModel"));

var secret_key = process.env.JWT_SECRET;

//Verify Token
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var header, token, data, isLoggedIn;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            //Get token from headers
            header = req.headers.authorization;
            token = header && header.split(" ")[1]; //If token is present check if the token is valid

            if (!token) {
              _context.next = 14;
              break;
            }

            //Get the data
            data = _jsonwebtoken["default"].verify(token, secret_key); //Add _id to req

            req._id = data._id;
            _context.next = 8;
            return _userModel["default"].findOne({
              _id: req._id,
              isLoggedIn: true
            });

          case 8:
            isLoggedIn = _context.sent;

            if (isLoggedIn) {
              _context.next = 11;
              break;
            }

            throw new Error(401, "Invalid Token");

          case 11:
            next();
            _context.next = 15;
            break;

          case 14:
            throw new Error(401, "Invalid Token");

          case 15:
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            // console.log(e);
            next(_context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;