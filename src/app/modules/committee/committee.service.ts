import { IGenericResponse } from "../../interface/common";
import { ICommittee } from "./committee.interface";
import { Committee } from "./committee.model";

const createCommitteeService = async (
  payload: ICommittee
): Promise<ICommittee> => {
  const result = await Committee.create(payload);

  return result;
};

const getCommitteeService = async (): Promise<
  IGenericResponse<ICommittee[]>
> => {
  const result = await Committee.find({});
  const total = await Committee.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateCommitteeService = async (
  id: string,
  payload: Partial<ICommittee>
): Promise<ICommittee | null | undefined> => {
  const result = await Committee.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteCommitteeService = async (
  id: string
): Promise<ICommittee | null> => {
  const result = await Committee.findByIdAndDelete({ _id: id });

  return result;
};

export const committeeService = {
  createCommitteeService,
  getCommitteeService,
  updateCommitteeService,
  deleteCommitteeService,
};
