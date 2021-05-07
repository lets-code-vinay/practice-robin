import { Schema, model } from "mongoose";

const likeSchema = new Schema(
  {
    like: {
      type: Boolean,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export default new model("like", likeSchema);
