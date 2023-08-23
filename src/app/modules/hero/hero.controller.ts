import { Request, Response } from "express";

import { heroService } from "./hero.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createHeroController = catchAsync(async (req: Request, res: Response) => {
  const { ...aboutData } = req.body;

  const result = await heroService.createHeroService(aboutData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "hero data is created successfully",
    data: result,
  });
});

const getHeroController = catchAsync(async (req: Request, res: Response) => {
  const result = await heroService.getHeroService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "About section is found successfully",
    data: result,
  });
});

const updateHeroController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateBodyData = req.body;
  const result = await heroService.updateHeroService(id, updateBodyData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "About section is updated successfully",
    data: result,
  });
});

export const heroController = {
  createHeroController,
  getHeroController,
  updateHeroController,
};
