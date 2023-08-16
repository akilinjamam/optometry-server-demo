import { Model } from "mongoose";

export type IAbout = {
  name: string;
  email: string;
  description: string;
  img: string;
  imgBig: string;
};

export type AboutModel = Model<IAbout, Record<string, unknown>>;
