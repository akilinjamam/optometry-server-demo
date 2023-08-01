import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { advertiseService } from "./advertise.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createAdvertiseController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...advertiseData } = req.body;

    const result = await advertiseService.createAdvertiseService(advertiseData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Advertise section is created successfully",
      data: result,
    });
  }
);

const getAdvertiseController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await advertiseService.getAdvertiseService();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "advertise section is found successfully",
      data: result,
    });
  }
);

const updateAdvertiseController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await advertiseService.updateAdvertiseService(
      id,
      updateBodyData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Adertise section is updated successfully",
      data: result,
    });
  }
);

export const advertiseController = {
  createAdvertiseController,
  getAdvertiseController,
  updateAdvertiseController,
};
