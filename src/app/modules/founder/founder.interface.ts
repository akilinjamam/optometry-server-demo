import { Model } from "mongoose";

export type IFounder = {
  name: string;
  publisherName: string;
  email: string;
  publisherEmail: string;
  mobile: string;
  designation: string;
  address: string;
  img: string;
};

export type FounderModel = Model<IFounder, Record<string, unknown>>;
