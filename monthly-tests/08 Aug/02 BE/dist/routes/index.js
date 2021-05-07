"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userRoutes = _interopRequireDefault(require("../routes/userRoutes"));

var _postRoutes = _interopRequireDefault(require("../routes/postRoutes"));

var _commentRoutes = _interopRequireDefault(require("../routes/commentRoutes"));

var routes = _express["default"].Router(); //User Routes


routes.use("/user", _userRoutes["default"]); //Post Routes

routes.use("/post", _postRoutes["default"]); //Comment Routes
// routes.use("/comment", commentRoutes);

var _default = routes;
exports["default"] = _default;