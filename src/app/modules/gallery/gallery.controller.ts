import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { galleryService } from "./gallery.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createGalleryController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...galleryData } = req.body;

    const result = await galleryService.createGalleryService(galleryData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Gallery section is created successfully",
      data: result,
    });
  }
);

const getGalleryController = catchAsync(async (req: Request, res: Response) => {
  const searchTerm = req.query;

  const result = await galleryService.getGalleryService(searchTerm);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gallery section is found successfully",
    data: result,
  });
});

const updateGalleryController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await galleryService.updateGalleryService(
      id,
      updateBodyData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Gallery section is updated successfully",
      data: result,
    });
  }
);

const deleteGalleryController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await galleryService.deleteGalleryService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Gallery section is deleted successfully",
      data: result,
    });
  }
);

export const galleryController = {
  createGalleryController,
  getGalleryController,
  updateGalleryController,
  deleteGalleryController,
};
