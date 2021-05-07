import { Schema, model } from "mongoose";
const commentSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: "post",
    },
    body: {
      type: String,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export default new model("comment", commentSchema);
