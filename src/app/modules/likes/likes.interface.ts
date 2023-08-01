import { Model } from "mongoose";

export type ILike = {
  email: string;
  link: string;
};

export type LikeModel = Model<ILike, Record<string, unknown>>;
