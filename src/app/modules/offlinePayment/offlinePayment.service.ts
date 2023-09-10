import { IGenericResponse } from "../../interface/common";
import { IOffPayment } from "./offlinePayment.interface";
import { OffPayment } from "./offlinePayment.model";

const createOffLinePaymentService = async (
  payload: IOffPayment
): Promise<IOffPayment> => {
  const result = await OffPayment.create(payload);

  return result;
};

const getOffLinePaymentService = async (): Promise<
  IGenericResponse<IOffPayment[]>
> => {
  const result = await OffPayment.find({});

  const total = await OffPayment.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateOffLinePaymentService = async (
  id: string,
  payload: Partial<IOffPayment>
): Promise<IOffPayment | null | undefined> => {
  const result = await OffPayment.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteOffLinePaymentService = async (
  id: string
): Promise<IOffPayment | null> => {
  const result = await OffPayment.findByIdAndDelete({ _id: id });

  return result;
};

export const offLinePaymentService = {
  createOffLinePaymentService,
  getOffLinePaymentService,
  updateOffLinePaymentService,
  deleteOffLinePaymentService,
};
