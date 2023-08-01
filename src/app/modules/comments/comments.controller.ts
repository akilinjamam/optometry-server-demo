import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { commentService } from "./comments.service";

const createCommentsController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...blogData } = req.body;

    const result = await commentService.createCommentService(blogData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Comment section is created successfully",
      data: result,
    });
  }
);

const getCommentsController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await commentService.getCommentService();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Comment section is found successfully",
      data: result,
    });
  }
);

const updateCommentsController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await commentService.updateCommentService(
      id,
      updateBodyData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Comment section is updated successfully",
      data: result,
    });
  }
);

const deleteCommentsController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await commentService.deleteCommentService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Comment section is deleted successfully",
      data: result,
    });
  }
);

export const commentsController = {
  createCommentsController,
  getCommentsController,
  updateCommentsController,
  deleteCommentsController,
};
