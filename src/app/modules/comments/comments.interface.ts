import { Model } from "mongoose";

export type IComment = {
  name: string;
  email: string;
  link: string;
  comments: string;
};

export type CommentModel = Model<IComment, Record<string, unknown>>;
