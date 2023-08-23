import { Schema, model } from "mongoose";
import { HeroModel, IHero } from "./hero.interface";

const heroSchema = new Schema<IHero, HeroModel>(
  {
    titleOne: {
      type: String,
      required: true,
      maxlength: 80,
    },
    titleTwo: {
      type: String,
      required: true,
      maxlength: 80,
    },
    email: {
      type: String,
    },

    imgLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Hero = model<IHero, HeroModel>("Hero", heroSchema);
