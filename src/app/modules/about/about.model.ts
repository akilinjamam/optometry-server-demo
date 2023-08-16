import { Schema, model } from "mongoose";
import { AboutModel, IAbout } from "./about.interface";

const aboutSchema = new Schema<IAbout, AboutModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 1000,
    },
    img: {
      type: String,
      required: true,
    },
    imgBig: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const About = model<IAbout, AboutModel>("About", aboutSchema);
