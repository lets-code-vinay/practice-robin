"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = _interopRequireDefault(require("../controllers/userController"));

var _auth = _interopRequireDefault(require("../middlewares/auth"));

var router = _express["default"].Router(); //POST USER Signup


router.post("/signup", _userController["default"].signup); //POST USER Login

router.post("/login", _userController["default"].login); // //GET Get USER details

router.get("/", _auth["default"], _userController["default"].get); // //UPDATE User Details

router.patch("/update", _auth["default"], _userController["default"].update); // //GET

router.get("/logout", _auth["default"], _userController["default"].logout);
var _default = router;
exports["default"] = _default;