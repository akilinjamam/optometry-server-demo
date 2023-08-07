import { Request, Response } from "express";
import { memberService } from "./member.service";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import httpStatus from "http-status";

const createMemberController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...memberData } = req.body;

    const result = await memberService.createMemberService(memberData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Member section is created successfully",
      data: result,
    });
  }
);

const getMemberController = catchAsync(async (req: Request, res: Response) => {
  const searchTerm = req.query;
  const result = await memberService.getMemberService(searchTerm);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member section is found successfully",
    data: result,
  });
});

const updateMemberController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateBodyData = req.body;
    const result = await memberService.updateMemberService(id, updateBodyData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Member section is updated successfully",
      data: result,
    });
  }
);

const deleteMemberController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await memberService.deleteMemberService(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Member section is deleted successfully",
      data: result,
    });
  }
);

export const memberController = {
  createMemberController,
  getMemberController,
  updateMemberController,
  deleteMemberController,
};
