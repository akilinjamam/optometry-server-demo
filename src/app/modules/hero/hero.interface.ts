import { Model } from "mongoose";

export type IHero = {
  titleOne: string;
  titleTwo: string;
  email: string;
  imgLink: string;
};

export type HeroModel = Model<IHero, Record<string, unknown>>;
