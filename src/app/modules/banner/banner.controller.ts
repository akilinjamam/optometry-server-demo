import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BannerService } from "./banner.service";
import httpStatus from "http-status";

const createBannerController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...bannerData } = req.body;

    const result = await BannerService.createBannerService(bannerData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Banner section is created successfully",
      data: result,
    });
  }
);

const getBannerController = catchAsync(async (req: Request, res: Response) => {
  const result = await BannerService.getBannerService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Banner section is found successfully",
    data: result,
  });
});

const updateBannerController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await BannerService.updateBannerService(id, updateBodyData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Banner section is updated successfully",
      data: result,
    });
  }
);

const deleteBannerController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await BannerService.deleteBannerService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Banner section is deleted successfully",
      data: result,
    });
  }
);

export const BannerController = {
  createBannerController,
  getBannerController,
  updateBannerController,
  deleteBannerController,
};
