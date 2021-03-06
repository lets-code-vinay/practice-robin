import jwt from "jsonwebtoken";

const secret_key = process.env.JWT_SECRET;

import User from "../models/userModel";

//Verify Token
export default async (req, res, next) => {
  try {
    //Get token from headers
    const header = req.headers.authorization;
    const token = header && header.split(" ")[1];

    //If token is present check if the token is valid
    if (token) {
      //Get the data
      const data = jwt.verify(token, secret_key);

      //Add _id to req
      req._id = data._id;

      const isLoggedIn = await User.findOne({
        _id: req._id,
        isLoggedIn: true,
      });
      // console.log(isLoggedIn);

      if (!isLoggedIn) throw new Error(401, "Invalid Token");

      next();
    } else {
      throw new Error(401, "Invalid Token");
    }
  } catch (e) {
    // console.log(e);
    next(e);
  }
};
