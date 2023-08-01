import { IGenericResponse } from "../../interface/common";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogService = async (payload: IBlog): Promise<IBlog> => {
  const result = await Blog.create(payload);

  return result;
};

const getBlogService = async (): Promise<IGenericResponse<IBlog[]>> => {
  const result = await Blog.find({});

  const total = await Blog.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateBlogService = async (
  id: string,
  payload: Partial<IBlog>
): Promise<IBlog | null | undefined> => {
  const result = await Blog.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteBlogService = async (id: string): Promise<IBlog | null> => {
  const result = await Blog.findByIdAndDelete({ _id: id });

  return result;
};

export const blogService = {
  createBlogService,
  getBlogService,
  updateBlogService,
  deleteBlogService,
};
