import { Schema, model } from "mongoose";
import { IOffPayment, OffPaymentModel } from "./offlinePayment.interface";

const paymentSchema = new Schema<IOffPayment, OffPaymentModel>(
  {
    total_amount: {
      type: Number,
      required: true,
    },
    cus_name: {
      type: String,
      required: true,
    },
    cus_email: {
      type: String,
      required: true,
    },
    cus_add1: {
      type: String,
      required: true,
    },
    cus_city: {
      type: String,
      required: true,
    },
    cus_postcode: {
      type: String,
      required: true,
    },

    cus_country: {
      type: String,
      required: true,
    },
    cus_phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OffPayment = model<IOffPayment, OffPaymentModel>(
  "OffPayment",
  paymentSchema
);
