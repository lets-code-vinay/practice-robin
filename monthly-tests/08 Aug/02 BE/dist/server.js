"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config({
  path: "./config.env"
});

var app = require("./app");

var port = process.env.PORT;
app.listen(port, function () {
  console.log("CONNECTED TO : ".concat(port));
});