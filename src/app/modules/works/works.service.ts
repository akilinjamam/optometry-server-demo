import { IGenericResponse } from "../../interface/common";
import { IWorks } from "./works.interface";
import { Work } from "./works.model";

const createWorkService = async (payload: IWorks): Promise<IWorks> => {
  const result = await Work.create(payload);

  return result;
};

const getWorkService = async (): Promise<IGenericResponse<IWorks[]>> => {
  const result = await Work.find({});

  const total = await Work.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateWorkService = async (
  id: string,
  payload: Partial<IWorks>
): Promise<IWorks | null | undefined> => {
  const result = await Work.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

export const WorkService = {
  createWorkService,
  getWorkService,
  updateWorkService,
};
