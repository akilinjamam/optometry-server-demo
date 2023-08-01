import { IGenericResponse } from "../../interface/common";
import { IAbout } from "./about.interface";
import { About } from "./about.model";

const createAboutService = async (payload: IAbout): Promise<IAbout> => {
  const result = await About.create(payload);

  return result;
};

const getAboutService = async (): Promise<IGenericResponse<IAbout[]>> => {
  const result = await About.find({});

  const total = await About.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateAboutService = async (
  id: string,
  payload: Partial<IAbout>
): Promise<IAbout | null | undefined> => {
  const result = await About.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

export const aboutService = {
  createAboutService,
  getAboutService,
  updateAboutService,
};
