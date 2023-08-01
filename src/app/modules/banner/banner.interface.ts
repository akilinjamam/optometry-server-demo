import { Model } from "mongoose";

export type IBanner = {
  // name: string;
  // email: string;
  img: string;
};

export type BannerModel = Model<IBanner, Record<string, unknown>>;
