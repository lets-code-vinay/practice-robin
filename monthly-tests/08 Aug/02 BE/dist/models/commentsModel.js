"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var commentSchema = new _mongoose.Schema({
  post: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "post"
  },
  body: {
    type: String,
    trim: true
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
}, {
  timestamps: true
});

var _default = new _mongoose.model("comment", commentSchema);

exports["default"] = _default;