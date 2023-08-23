import { IGenericResponse } from "../../interface/common";
import { IHero } from "./hero.interface";
import { Hero } from "./hero.model";

const createHeroService = async (payload: IHero): Promise<IHero> => {
  const result = await Hero.create(payload);

  return result;
};

const getHeroService = async (): Promise<IGenericResponse<IHero[]>> => {
  const result = await Hero.find({});

  const total = await Hero.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateHeroService = async (
  id: string,
  payload: Partial<IHero>
): Promise<IHero | null | undefined> => {
  const result = await Hero.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

export const heroService = {
  createHeroService,
  getHeroService,
  updateHeroService,
};
