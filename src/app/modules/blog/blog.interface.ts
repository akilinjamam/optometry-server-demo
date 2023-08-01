import { Model } from "mongoose";

export type IBlog = {
  title: string;
  name: string;
  email: string;
  release_date: string;
  imgLink: string;
  description: string;
  approval: boolean;
};

export type BlogModel = Model<IBlog, Record<string, unknown>>;
