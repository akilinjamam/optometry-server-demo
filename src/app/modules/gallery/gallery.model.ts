import { Schema, model } from "mongoose";
import { GalleryModel, IGallery } from "./gallery.interface";

const gallerySchema = new Schema<IGallery, GalleryModel>(
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

    imgLink: {
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

export const Gallery = model<IGallery, GalleryModel>("Gallery", gallerySchema);
