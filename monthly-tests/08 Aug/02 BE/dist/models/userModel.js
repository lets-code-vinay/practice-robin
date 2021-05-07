"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userModel = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  post: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "post"
  }],
  created_at: {
    type: Date,
    "default": Date.now()
  },
  isLoggedIn: {
    type: Boolean,
    "default": false
  }
});
userModel.pre(/^find/, function (next) {
  this.populate({
    path: "post",
    select: "-__v"
  });
  next();
});

var _default = new _mongoose.model("user", userModel);

exports["default"] = _default;