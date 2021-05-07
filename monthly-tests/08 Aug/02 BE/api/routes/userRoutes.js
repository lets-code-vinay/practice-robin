import express from "express";
import controller from "../controllers/userController";
import authorize from "../middlewares/auth";

const router = express.Router();

//POST USER Signup
router.post("/signup", controller.signup);

//POST USER Login
router.post("/login", controller.login);

// //GET Get USER details
router.get("/", authorize, controller.get);

// //UPDATE User Details
router.patch("/update", authorize, controller.update);

// //GET
router.get("/logout", authorize, controller.logout);

export default router;
