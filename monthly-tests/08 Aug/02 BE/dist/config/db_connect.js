"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _default = function _default(db) {
  var connect = function connect() {
    var _mongoose$connect;

    _mongoose["default"].connect(db, (_mongoose$connect = {
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (0, _defineProperty2["default"])(_mongoose$connect, "useFindAndModify", false), (0, _defineProperty2["default"])(_mongoose$connect, "useCreateIndex", true), _mongoose$connect)).then(function () {
      return console.log("CONNECTED TO DATABASE");
    })["catch"](function (err) {
      console.log("ERROR : ", err.message);
    });
  };

  connect();
};

exports["default"] = _default;