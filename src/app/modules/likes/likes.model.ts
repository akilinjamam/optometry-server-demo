import { Schema, model } from "mongoose";
import { ILike, LikeModel } from "./likes.interface";

const likeSchema = new Schema<ILike, LikeModel>(
  {
    email: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Like = model<ILike, LikeModel>("Like", likeSchema);
