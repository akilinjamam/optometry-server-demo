import { Schema, model } from "mongoose";
import { FounderModel, IFounder } from "./founder.interface";

const founderSchema = new Schema<IFounder, FounderModel>(
  {
    name: {
      type: String,
      required: true,
    },
    publisherName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    publisherEmail: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    address: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Founder = model<IFounder, FounderModel>("Founder", founderSchema);
