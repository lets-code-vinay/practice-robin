"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _db_connect = _interopRequireDefault(require("./config/db_connect"));

var _index = _interopRequireDefault(require("./routes/index"));

//Create an instance of express app
var app = (0, _express["default"])(); // Connect to MongoDB

(0, _db_connect["default"])(process.env.DATABASE_CONNECT.replace("<PASSWORD>", process.env.DATABASE_PASSWORD));
app.use(_express["default"].urlencoded());
app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev"));
app.use("/", _index["default"]);
module.exports = app;