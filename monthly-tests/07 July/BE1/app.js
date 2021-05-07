//Development Mode Error Handler For Catching miscellaneous Code Entry
process.on("uncaughtException", (err) => {
  console.log(err.message);
});

import { resolve } from "path";
import { config } from "dotenv";

config({
  path: resolve("config.env"),
});

import express from "express";

import { pageNotFoundError, errorHandler } from "./handlers/errorHandler";
import multer from "multer";

import { pageRouter } from "./route/pageRoute";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(resolve(__dirname, "views")));
app.set("view engine", "pug");
app.set("views", resolve(__dirname, "views"));

//Multer Setup
var storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    //req.body is empty...
    //How could I get the new_file_name property sent from client here?
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

//Uplaod
app.use(upload.single("excel"));

app.use(pageRouter);

app.use("*", pageNotFoundError);

app.use(errorHandler);
