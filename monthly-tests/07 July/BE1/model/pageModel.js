import { Schema, model } from "mongoose";

const pageSchema = new Schema({
  name: String,
  email: String,
  phonenumber: Number,
  age: Number,
  gender: {
    type: String,
    enum: ["male", "female", "Male"],
  },
  address: String,
});

export const PageModel = model("page", pageSchema);
