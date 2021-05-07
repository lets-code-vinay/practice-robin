"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _commentController = _interopRequireDefault(require("../controllers/commentController"));

var _auth = _interopRequireDefault(require("../middlewares/auth"));

var router = _express["default"].Router(); //COMMENT ON SOMEONE'S POST


router.post("/:postId", _auth["default"], _commentController["default"].commentOnSomeonePost); //UPDATE COMMENT

router.patch("/:commentId", _auth["default"], _commentController["default"].updateComment); //DELETE COMMENT

router["delete"]("/:commentId", _auth["default"], _commentController["default"].deleteComment);
module.exports = router;