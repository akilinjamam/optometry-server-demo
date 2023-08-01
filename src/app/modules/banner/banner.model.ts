import { Schema, model } from "mongoose";
import { BannerModel, IBanner } from "./banner.interface";

const bannerSchema = new Schema<IBanner, BannerModel>(
  {
    // name: {
    //   type: String,
    //   required: true,
    // },
    // email: {
    //   type: String,
    //   required: true,
    // },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Banner = model<IBanner, BannerModel>("Banner", bannerSchema);
