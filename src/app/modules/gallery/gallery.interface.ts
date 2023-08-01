import { Model } from "mongoose";

export type IGallery = {
  title: string;
  name: string;
  email: string;
  imgLink: string;
  approval: boolean;
};

export type GalleryModel = Model<IGallery, Record<string, unknown>>;
