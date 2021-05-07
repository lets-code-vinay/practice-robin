import exceltojson from "xlsx-to-json-lc";

import { asyncFuncErrorCatcher } from "../utils/catchAsyncError";
import { AppError } from "../utils/AppError";

import { PageModel } from "./../model/pageModel";

export const pageRender = asyncFuncErrorCatcher(async (req, res, next) => {
  res.render("pageView");
});

export const getFile = asyncFuncErrorCatcher(async (req, res, next) => {
  if (req.file.originalname.split(".")[1] !== "xlsx")
    return next(new AppError("Upload Only Excel Sheet", 400));

  exceltojson(
    {
      input: req.file.path, //the same path where we uploaded our file
      output: null, //since we don't need output.json
      lowerCaseHeaders: true,
    },
    (err, result) => {
      if (err) return err;

      PageModel.create(result).then((data) => {
        res.status(200).json({
          message: "File Read Successfully",
          data,
        });
      });
    }
  );
});
