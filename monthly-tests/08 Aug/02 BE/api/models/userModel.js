import { Schema, model } from "mongoose";

const userModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now(),
  },
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
});

userModel.pre(/^find/, function (next) {
  this.populate({
    path: "post",
    select: "-__v",
  });
  next();
});

export default new model("user", userModel);
