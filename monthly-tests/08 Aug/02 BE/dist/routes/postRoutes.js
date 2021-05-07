"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _postController = _interopRequireDefault(require("../controllers/postController"));

var _auth = _interopRequireDefault(require("../middlewares/auth"));

var router = _express["default"].Router(); //CREATE Post


router.post("/create", _auth["default"], _postController["default"].create); //Get User Post

router.get("/", _auth["default"], _postController["default"].get); //UPDATE Post

router.patch("/:id", _auth["default"], _postController["default"].update); //Delete Post

router["delete"]("/:id", _auth["default"], _postController["default"]["delete"]); //Get ALl Post

router.get("/getAll", _postController["default"].getAll);
var _default = router;
exports["default"] = _default;