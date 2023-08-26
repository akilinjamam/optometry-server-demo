import { Schema, model } from "mongoose";
import { IPublication, PublicationModel } from "./publication.interface";

const publicationSchema = new Schema<IPublication, PublicationModel>(
  {
    title: {
      type: String,
      required: true,
      maxlength: 80,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },
    approval: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Publication = model<IPublication, PublicationModel>(
  "Publication",
  publicationSchema
);
