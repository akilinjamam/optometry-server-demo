// import { Request, Response } from "express";
// import catchAsync from "../../../shared/catchAsync";
// import { paymentService } from "./payment.service";
// import sendResponse from "../../../shared/sendResponse";
// import httpStatus from "http-status";

// const createPaymentController = catchAsync(
//   async (req: Request, res: Response) => {
//     const { ...paymentData } = req.body;

//     const result = await paymentService.createPaymentService(paymentData);

//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "Payment section is created successfully",
//       data: result,
//     });
//   }
// );

// export const paymentController = {
//   createPaymentController,
// };
