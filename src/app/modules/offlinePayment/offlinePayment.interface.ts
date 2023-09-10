import { Model } from "mongoose";

export type IOffPayment = {
  total_amount: number;
  cus_name: string;
  cus_email: string;
  cus_add1: string;
  cus_city: string;
  cus_postcode: string;
  cus_country: string;
  cus_phone: string;
};

export type OffPaymentModel = Model<IOffPayment, Record<string, unknown>>;
