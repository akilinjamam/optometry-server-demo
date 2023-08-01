import { IGenericResponse } from "../../interface/common";
import { IAdvertise } from "./advertise.interface";
import { Advertise } from "./advertise.model";

const createAdvertiseService = async (
  payload: IAdvertise
): Promise<IAdvertise> => {
  const result = await Advertise.create(payload);

  return result;
};

const getAdvertiseService = async (): Promise<
  IGenericResponse<IAdvertise[]>
> => {
  const result = await Advertise.find({});

  const total = await Advertise.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateAdvertiseService = async (
  id: string,
  payload: Partial<IAdvertise>
): Promise<IAdvertise | null | undefined> => {
  const result = await Advertise.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

export const advertiseService = {
  createAdvertiseService,
  getAdvertiseService,
  updateAdvertiseService,
};
