import { Schema, model } from "mongoose";
import { BlogModel, IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog, BlogModel>(
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
    release_date: {
      type: String,
      required: true,
    },
    imgLink: {
      type: String,
      required: true,
    },
    description: {
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

export const Blog = model<IBlog, BlogModel>("Blog", blogSchema);
