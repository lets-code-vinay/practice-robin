import express from "express";

import userRoutes from "../routes/userRoutes";
import postRoutes from "../routes/postRoutes";

import commentRoutes from "../routes/commentRoutes";

const routes = express.Router();

//User Routes
routes.use("/user", userRoutes);

//Post Routes
routes.use("/post", postRoutes);

//Comment Routes
// routes.use("/comment", commentRoutes);

export default routes;
