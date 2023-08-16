import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { WorkService } from "./works.service";
import httpStatus from "http-status";

const createWorkController = catchAsync(async (req: Request, res: Response) => {
  const { ...workData } = req.body;

  const result = await WorkService.createWorkService(workData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "About data is created successfully",
    data: result,
  });
});

const getWorkController = catchAsync(async (req: Request, res: Response) => {
  const result = await WorkService.getWorkService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "work section is found successfully",
    data: result,
  });
});

const updateWorkController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateBodyData = req.body;
  const result = await WorkService.updateWorkService(id, updateBodyData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "work section is updated successfully",
    data: result,
  });
});

export const workController = {
  createWorkController,
  getWorkController,
  updateWorkController,
};
