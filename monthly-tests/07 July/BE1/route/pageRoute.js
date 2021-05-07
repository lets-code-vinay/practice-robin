import { Router } from "express";

import { pageRender, getFile } from "../controller/pageController";

export const pageRouter = Router();

pageRouter.route("/").get(pageRender);

pageRouter.route("/upload").post(getFile);
