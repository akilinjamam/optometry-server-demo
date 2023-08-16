import { Schema, model } from "mongoose";
import { IWorks, WorkModel } from "./works.interface";

const WorkSchema = new Schema<IWorks, WorkModel>(
  {
    emailOne: {
      type: String,
      required: true,
    },
    emailTwo: {
      type: String,
      required: true,
    },
    titleOne: {
      type: String,
      required: true,
    },
    titleTwo: {
      type: String,
      required: true,
    },
    descriptionOne: {
      type: String,
      required: true,
    },
    descriptionTwo: {
      type: String,
      required: true,
    },
    imgOne: {
      type: String,
      required: true,
    },
    imgTwo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Work = model<IWorks, WorkModel>("Work", WorkSchema);
