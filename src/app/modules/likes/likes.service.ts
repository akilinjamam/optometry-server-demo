import { IGenericResponse } from "../../interface/common";
import { ILike } from "./likes.interface";
import { Like } from "./likes.model";

const createLikeService = async (payload: ILike): Promise<ILike> => {
  const result = await Like.create(payload);
  return result;
};

const getLikeService = async (): Promise<IGenericResponse<ILike[]>> => {
  const result = await Like.find({});

  const total = await Like.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateLikeService = async (
  id: string,
  payload: Partial<ILike>
): Promise<ILike | null | undefined> => {
  const result = await Like.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteLikeService = async (id: string): Promise<ILike | null> => {
  const result = await Like.findByIdAndDelete({ _id: id });

  return result;
};

export const likeService = {
  createLikeService,
  getLikeService,
  updateLikeService,
  deleteLikeService,
};
