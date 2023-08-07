import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { eventService } from "./event.service";

const createEventController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...eventData } = req.body;

    const result = await eventService.createEventService(eventData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Event section is created successfully",
      data: result,
    });
  }
);

const getEventController = catchAsync(async (req: Request, res: Response) => {
  const searchTerm = req.query;
  const result = await eventService.getEventService(searchTerm);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event section is found successfully",
    data: result,
  });
});

const updateEventController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await eventService.updateEventService(id, updateBodyData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Event section is updated successfully",
      data: result,
    });
  }
);

const deleteEventController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await eventService.deleteEventService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Event section is deleted successfully",
      data: result,
    });
  }
);

export const eventController = {
  createEventController,
  getEventController,
  updateEventController,
  deleteEventController,
};
