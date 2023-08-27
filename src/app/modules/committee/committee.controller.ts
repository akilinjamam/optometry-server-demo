import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { committeeService } from "./committee.service";

const createCommitteeController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...committeeData } = req.body;

    const result = await committeeService.createCommitteeService(committeeData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Committee section is created successfully",
      data: result,
    });
  }
);

const getCommitteeController = catchAsync(async (req: any, res: Response) => {
  const result = await committeeService.getCommitteeService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Committee section is found successfully",
    data: result,
  });
});

const updateCommitteeController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await committeeService.updateCommitteeService(
      id,
      updateBodyData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Committee section is updated successfully",
      data: result,
    });
  }
);

const deleteCommitteeController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await committeeService.deleteCommitteeService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Committee section is deleted successfully",
      data: result,
    });
  }
);

export const committeeController = {
  createCommitteeController,
  getCommitteeController,
  updateCommitteeController,
  deleteCommitteeController,
};
