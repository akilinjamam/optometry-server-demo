import { Schema, model } from "mongoose";
import { HeroModel, IHero } from "./hero.interface";

const heroSchema = new Schema<IHero, HeroModel>(
  {
    titleOne: {
      type: String,
      required: true,
    },
    titleTwo: {
      type: String,
      required: true,
    },
    titleThree: {
      type: String,
      required: true,
    },
    titleFour: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    infoEmail: {
      type: String,
      required: true,
    },
    infoNumber: {
      type: String,
      required: true,
    },
    imgLink: {
      type: String,
      required: true,
    },
    employee: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Hero = model<IHero, HeroModel>("Hero", heroSchema);
