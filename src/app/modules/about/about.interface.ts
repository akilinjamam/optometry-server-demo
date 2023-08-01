import { Model } from "mongoose";

export type IAbout = {
  name: string;
  email: string;
  description: string;
  img: string;
};

export type AboutModel = Model<IAbout, Record<string, unknown>>;
