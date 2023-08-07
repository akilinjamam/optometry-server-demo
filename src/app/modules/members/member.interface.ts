import { Model } from "mongoose";

export type IMember = {
  member_id: string;
  password: string;
  name: string;
  designation: string;
  email: string;
  imgLink: string;
  mobile_no: string;
  address: string;
  approval: boolean;
  expiration: string;
  isAdmin: boolean;
  isSignOut: boolean;
  qr_code: string;
};

export type MemberModel = Model<IMember, Record<string, unknown>>;
