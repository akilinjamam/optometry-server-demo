import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { founderService } from "./founder.service";
import sendResponse from "../../../shared/sendResponse";

const createFounderController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...founderData } = req.body;

    const result = await founderService.createFounderService(founderData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Founder section is created successfully",
      data: result,
    });
  }
);

const getFounderController = catchAsync(async (req: any, res: Response) => {
  const result = await founderService.getFounderService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Founder section is found successfully",
    data: result,
  });
});

const updateFounderController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await founderService.updateFounderService(
      id,
      updateBodyData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Founder section is updated successfully",
      data: result,
    });
  }
);

const deleteFounderController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await founderService.deleteFounderService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Founder section is deleted successfully",
      data: result,
    });
  }
);

export const founderController = {
  createFounderController,
  getFounderController,
  updateFounderController,
  deleteFounderController,
};
