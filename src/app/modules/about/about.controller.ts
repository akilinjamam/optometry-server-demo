import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { aboutService } from "./about.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createAboutController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...aboutData } = req.body;

    const result = await aboutService.createAboutService(aboutData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "About data is created successfully",
      data: result,
    });
  }
);

const getAboutController = catchAsync(async (req: Request, res: Response) => {
  const result = await aboutService.getAboutService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "About section is found successfully",
    data: result,
  });
});

const updateAboutController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await aboutService.updateAboutService(id, updateBodyData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "About section is updated successfully",
      data: result,
    });
  }
);

export const aboutController = {
  createAboutController,
  getAboutController,
  updateAboutController,
};
