import { Schema, model } from "mongoose";
import { HeroModel, IHero } from "./hero.interface";

const heroSchema = new Schema<IHero, HeroModel>(
  {
    title: {
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
