import { IGenericResponse } from "../../interface/common";
import { IBanner } from "./banner.interface";
import { Banner } from "./banner.model";

const createBannerService = async (payload: IBanner): Promise<IBanner> => {
  const result = await Banner.create(payload);

  return result;
};

const getBannerService = async (): Promise<IGenericResponse<IBanner[]>> => {
  const result = await Banner.find({});

  const total = await Banner.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateBannerService = async (
  id: string,
  payload: Partial<IBanner>
): Promise<IBanner | null | undefined> => {
  const result = await Banner.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteBannerService = async (id: string): Promise<IBanner | null> => {
  const result = await Banner.findByIdAndDelete({ _id: id });

  return result;
};

export const BannerService = {
  createBannerService,
  getBannerService,
  updateBannerService,
  deleteBannerService,
};
