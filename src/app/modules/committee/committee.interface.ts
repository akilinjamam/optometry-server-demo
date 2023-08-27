import { Model } from "mongoose";

export type ICommittee = {
  name: string;
  publisherName: string;
  email: string;
  publisherEmail: string;
  mobile: string;
  designation: string;
  address: string;
  img: string;
};

export type CommitteeModel = Model<ICommittee, Record<string, unknown>>;
