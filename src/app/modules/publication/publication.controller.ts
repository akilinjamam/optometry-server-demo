import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { publicationService } from "./publication.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createPublicationController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...publicationData } = req.body;

    const result = await publicationService.createPublicationService(
      publicationData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Publication section is created successfully",
      data: result,
    });
  }
);

const getPublicationController = catchAsync(async (req: any, res: Response) => {
  const searchTerm = req.query;

  const result = await publicationService.getPublicationService(searchTerm);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Publication section is found successfully",
    data: result,
  });
});

const updatePublicationController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await publicationService.updatePublicationService(
      id,
      updateBodyData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Publication section is updated successfully",
      data: result,
    });
  }
);

const deletePublicationController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await publicationService.deletePublicationService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Publication section is deleted successfully",
      data: result,
    });
  }
);

export const publicationController = {
  createPublicationController,
  getPublicationController,
  updatePublicationController,
  deletePublicationController,
};
