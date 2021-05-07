"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

// const Post = require("../models/posts");
// const Comment = require("../models/comments");
// const User = require("../models/users");
module.exports = {
  commentOnSomeonePost: function () {
    var _commentOnSomeonePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var user, postId, commentBody, post;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              user = req.user, postId = req.params.postId;
              commentBody = new Comment(req.body);
              _context.next = 5;
              return Post.findById(postId);

            case 5:
              post = _context.sent;
              _context.next = 8;
              return post.comments.push(commentBody);

            case 8:
              _context.next = 10;
              return post.save();

            case 10:
              commentBody.user = user._id;
              commentBody.post = postId;
              _context.next = 14;
              return commentBody.save();

            case 14:
              res.status(201).json({
                message: "commented Successfully",
                commentedBy: {
                  userName: user.name,
                  userId: user._id
                },
                commentedOn: {
                  postUrl: post.imgUrl,
                  postCaption: post.caption,
                  userId: post.user
                }
              });
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(500).json({
                error: _context.t0.message
              }));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 17]]);
    }));

    function commentOnSomeonePost(_x, _x2, _x3) {
      return _commentOnSomeonePost.apply(this, arguments);
    }

    return commentOnSomeonePost;
  }(),
  updateComment: function () {
    var _updateComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
      var user, commentId, body, comment;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              user = req.user;
              commentId = req.params.commentId;
              body = req.body.body;
              _context2.next = 6;
              return Comment.findById(commentId);

            case 6:
              comment = _context2.sent;

              if (comment) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(404).json({
                message: "Invalid Request"
              }));

            case 9:
              if (!(comment.user.toString() !== user._id.toString())) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt("return", res.status(404).json({
                message: "Invalid Request"
              }));

            case 11:
              _context2.next = 13;
              return Comment.findOneAndUpdate({
                _id: commentId
              }, {
                body: body
              });

            case 13:
              res.status(200).json({
                message: "Comment updated successfully"
              });
              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              res.status(500).json({
                Error: _context2.t0.message
              });

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 16]]);
    }));

    function updateComment(_x4, _x5, _x6) {
      return _updateComment.apply(this, arguments);
    }

    return updateComment;
  }(),
  deleteComment: function () {
    var _deleteComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
      var user, commentId, comment, post, allComments, commentIndex;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              user = req.user;
              commentId = req.params.commentId;
              _context3.next = 5;
              return Comment.findById(commentId);

            case 5:
              comment = _context3.sent;

              if (!(comment.user.toString() !== user._id.toString())) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt("return", res.status(404).json({
                message: "Invalid Request"
              }));

            case 8:
              _context3.next = 10;
              return Post.findById(comment.post);

            case 10:
              post = _context3.sent;
              allComments = post.comments;
              commentIndex = allComments.findIndex(function (comments) {
                return comments.toString() === commentId.toString();
              });

              if (!(commentIndex === -1)) {
                _context3.next = 15;
                break;
              }

              return _context3.abrupt("return", res.status(404).json({
                message: "Invalid Request"
              }));

            case 15:
              _context3.next = 17;
              return allComments.splice(commentIndex, 1);

            case 17:
              _context3.next = 19;
              return post.save();

            case 19:
              _context3.next = 21;
              return Comment.findOneAndDelete({
                _id: commentId
              });

            case 21:
              res.status(200).json({
                message: "Deleted Successfully"
              });
              _context3.next = 27;
              break;

            case 24:
              _context3.prev = 24;
              _context3.t0 = _context3["catch"](0);
              res.status(500).json({
                Error: _context3.t0
              });

            case 27:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 24]]);
    }));

    function deleteComment(_x7, _x8, _x9) {
      return _deleteComment.apply(this, arguments);
    }

    return deleteComment;
  }()
};