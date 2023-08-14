import { Request, Response } from "express";

import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { blogService } from "./blog.service";

const createBlogController = catchAsync(async (req: Request, res: Response) => {
  const { ...blogData } = req.body;

  const result = await blogService.createBlogService(blogData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog section is created successfully",
    data: result,
  });
});

const getBlogController = catchAsync(async (req: any, res: Response) => {
  const searchTerm = req.query;
  console.log(req.headers.authorization);
  const decoded = req.decoded;
  console.log(decoded);

  const result = await blogService.getBlogService(searchTerm);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog section is found successfully",
    data: result,
  });
});

const updateBlogController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateBodyData = req.body;
  const result = await blogService.updateBlogService(id, updateBodyData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog section is updated successfully",
    data: result,
  });
});

const deleteBlogController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await blogService.deleteBlogService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog section is deleted successfully",
    data: result,
  });
});

export const blogController = {
  createBlogController,
  getBlogController,
  updateBlogController,
  deleteBlogController,
};
