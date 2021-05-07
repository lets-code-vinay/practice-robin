import express from "express";
import controller from "../controllers/postController";
import authorize from "../middlewares/auth";

const router = express.Router();

//CREATE Post
router.post("/create", authorize, controller.create);

//Get User Post
router.get("/", authorize, controller.get);

//UPDATE Post
router.patch("/:id", authorize, controller.update);

//Delete Post
router.delete("/:id", authorize, controller.delete);

//Get ALl Post
router.get("/getAll", controller.getAll);

export default router;
