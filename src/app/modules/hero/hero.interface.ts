import { Model } from "mongoose";

export type IHero = {
  titleOne: string;
  titleTwo: string;
  titleThree:string;
  titleFour: string;
  email: string;
  infoEmail:string;
  infoNumber:string;
  imgLink: string;
  employee:string;
  branch:string;
};

export type HeroModel = Model<IHero, Record<string, unknown>>;
