import { Model } from "mongoose";

export type IHero = {
  title: string;
  email: string;
  imgLink: string;
};

export type HeroModel = Model<IHero, Record<string, unknown>>;
