import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { offLinePaymentService } from "./offlinePayment.service";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";

const createOfflinePaymentController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...offlinePayment } = req.body;

    const result = await offLinePaymentService.createOffLinePaymentService(
      offlinePayment
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "offline-payment section is created successfully",
      data: result,
    });
  }
);

const getOfflinePaymentController = catchAsync(
  async (req: any, res: Response) => {
    const result = await offLinePaymentService.getOffLinePaymentService();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "offline-payment section is found successfully",
      data: result,
    });
  }
);

const updateOfflinePaymentController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await offLinePaymentService.updateOffLinePaymentService(
      id,
      updateBodyData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "offline-payment section is updated successfully",
      data: result,
    });
  }
);

const deleteOfflinePaymentController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await offLinePaymentService.deleteOffLinePaymentService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "offline-payment section is deleted successfully",
      data: result,
    });
  }
);

export const offlinePaymentController = {
  createOfflinePaymentController,
  getOfflinePaymentController,
  updateOfflinePaymentController,
  deleteOfflinePaymentController,
};
