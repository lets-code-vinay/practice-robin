"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var postModel = new _mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  likes: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "user"
  }],
  comments: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "comment"
  }],
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
}, {
  timestamps: true
});

var _default = new _mongoose.model("post", postModel);

exports["default"] = _default;