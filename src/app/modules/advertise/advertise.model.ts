import { Schema, model } from "mongoose";
import { AdvertiseModel, IAdvertise } from "./advertise.interface";

const advertiseSchema = new Schema<IAdvertise, AdvertiseModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
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

export const Advertise = model<IAdvertise, AdvertiseModel>(
  "Advertise",
  advertiseSchema
);
