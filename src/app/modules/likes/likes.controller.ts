import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { likeService } from "./likes.service";

const createLikeController = catchAsync(async (req: Request, res: Response) => {
  const { ...likeData } = req.body;

  const result = await likeService.createLikeService(likeData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "like section is created successfully",
    data: result,
  });
});

const getLikeController = catchAsync(async (req: Request, res: Response) => {
  const result = await likeService.getLikeService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "like section is found successfully",
    data: result,
  });
});

const updateLikeController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateBodyData = req.body;
  const result = await likeService.updateLikeService(id, updateBodyData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "like section is updated successfully",
    data: result,
  });
});

const deleteLikeController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await likeService.deleteLikeService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "like section is deleted successfully",
    data: result,
  });
});

export const likeController = {
  createLikeController,
  getLikeController,
  updateLikeController,
  deleteLikeController,
};
