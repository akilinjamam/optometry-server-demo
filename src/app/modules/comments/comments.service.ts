import { IGenericResponse } from "../../interface/common";
import { IComment } from "./comments.interface";
import { Comment } from "./comments.model";

const createCommentService = async (payload: IComment): Promise<IComment> => {
  const result = await Comment.create(payload);

  return result;
};

const getCommentService = async (): Promise<IGenericResponse<IComment[]>> => {
  const result = await Comment.find({});

  const total = await Comment.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateCommentService = async (
  id: string,
  payload: Partial<IComment>
): Promise<IComment | null | undefined> => {
  const result = await Comment.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteCommentService = async (id: string): Promise<IComment | null> => {
  const result = await Comment.findByIdAndDelete({ _id: id });

  return result;
};

export const commentService = {
  createCommentService,
  getCommentService,
  updateCommentService,
  deleteCommentService,
};
