import { Schema, model } from "mongoose";
import { CommentModel, IComment } from "./comments.interface";

const commentSchema = new Schema<IComment, CommentModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = model<IComment, CommentModel>("Comment", commentSchema);
