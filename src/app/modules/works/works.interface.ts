import { Model } from "mongoose";

export type IWorks = {
  emailOne: string;
  emailTwo: string;
  titleOne: string;
  titleTwo: string;
  descriptionOne: string;
  descriptionTwo: string;
  imgOne: string;
  imgTwo: string;
  approvalOne: boolean;
  approvalTwo: boolean;
};

export type WorkModel = Model<IWorks, Record<string, unknown>>;
