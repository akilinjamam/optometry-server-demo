import mongoose from "mongoose";
import { IGenericErrorResponse } from "../app/interface/common";
import { IGenericErrorMessage } from "../app/interface/error";

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );

  const statusCode = 400;
  return {
    statusCode: statusCode,
    message: "validation error",
    errorMessages: errors,
  };
};

export default handleValidationError;
