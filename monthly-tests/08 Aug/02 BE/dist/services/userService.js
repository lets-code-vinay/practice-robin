"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _userModel = _interopRequireDefault(require("../models/userModel"));

var _encryptionService = _interopRequireDefault(require("../services/encryptionService"));

var _authorizationService = _interopRequireDefault(require("../services/authorizationService"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var services = {}; //==========================================Signup Service==========================================

services.signup = function (data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(res, rej) {
      var password, remData, hash, user, token;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              //Get Password and hash it
              password = data.password, remData = (0, _objectWithoutProperties2["default"])(data, ["password"]); //Get hash

              _context.next = 4;
              return _encryptionService["default"].encrypt(password);

            case 4:
              hash = _context.sent;
              _context.next = 7;
              return new _userModel["default"](_objectSpread(_objectSpread({
                password: hash
              }, remData), {}, {
                isLoggedIn: true
              })).save();

            case 7:
              user = _context.sent;
              _context.next = 10;
              return _authorizationService["default"].generate(user);

            case 10:
              token = _context.sent;
              res({
                user: user,
                token: token
              });
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              rej(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}; //==========================================Login Service==========================================


services.login = function (data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(res, rej) {
      var email, user, token;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              //Get id
              email = data.email;
              _context2.next = 4;
              return _userModel["default"].findOneAndUpdate({
                email: email
              }, {
                isLoggedIn: true
              }, {
                "new": true
              });

            case 4:
              user = _context2.sent;
              _context2.next = 7;
              return _authorizationService["default"].generate(user);

            case 7:
              token = _context2.sent;
              res({
                user: user,
                token: token
              });
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              rej(_context2.t0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
}; //==========================================Get User Service==========================================


services.getUser = function (_id) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(res, rej) {
      var user;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _userModel["default"].findById(_id);

            case 3:
              user = _context3.sent;
              res(user);
              _context3.next = 11;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);
              rej(_context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
}; //==========================================Update User Detail Service==========================================


services.updateUser = function (_id, data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(res, rej) {
      var email, password, remData, hash, user;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              email = data.email, password = data.password, remData = (0, _objectWithoutProperties2["default"])(data, ["email", "password"]); //Get hash

              _context4.next = 4;
              return _encryptionService["default"].encrypt(password);

            case 4:
              hash = _context4.sent;
              _context4.next = 7;
              return _userModel["default"].findByIdAndUpdate(_id, _objectSpread({
                password: hash
              }, remData), {
                "new": true
              });

            case 7:
              user = _context4.sent;
              res(user);
              _context4.next = 15;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);
              rej(_context4.t0);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 11]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

var _default = services;
exports["default"] = _default;