import { Model } from "mongoose";

export type IAdvertise = {
  name: string;
  email: string;
  img: string;
};

export type AdvertiseModel = Model<IAdvertise, Record<string, unknown>>;
