"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var likeSchema = new _mongoose.Schema({
  like: {
    type: Boolean
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
}, {
  timestamps: true
});

var _default = new _mongoose.model("like", likeSchema);

exports["default"] = _default;