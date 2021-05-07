import express from "express";
import controller from "../controllers/commentController";
import authorize from "../middlewares/auth";

const router = express.Router();

//COMMENT ON SOMEONE'S POST
router.post("/:postId", authorize, controller.commentOnSomeonePost);

//UPDATE COMMENT
router.patch("/:commentId", authorize, controller.updateComment);

//DELETE COMMENT
router.delete("/:commentId", authorize, controller.deleteComment);

module.exports = router;
