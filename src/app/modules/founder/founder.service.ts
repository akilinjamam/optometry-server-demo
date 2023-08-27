import { IGenericResponse } from "../../interface/common";
import { IFounder } from "./founder.interface";
import { Founder } from "./founder.model";

const createFounderService = async (payload: IFounder): Promise<IFounder> => {
  const result = await Founder.create(payload);

  return result;
};

const getFounderService = async (): Promise<IGenericResponse<IFounder[]>> => {
  const result = await Founder.find({});
  const total = await Founder.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateFounderService = async (
  id: string,
  payload: Partial<IFounder>
): Promise<IFounder | null | undefined> => {
  const result = await Founder.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteFounderService = async (id: string): Promise<IFounder | null> => {
  const result = await Founder.findByIdAndDelete({ _id: id });

  return result;
};

export const founderService = {
  createFounderService,
  getFounderService,
  updateFounderService,
  deleteFounderService,
};
