import { Model } from "mongoose";

export type IPublication = {
  title: string;
  name: string;
  email: string;
  link: string;
  approval: boolean;
};

export type PublicationModel = Model<IPublication, Record<string, unknown>>;
