import { Schema, model } from "mongoose";
import { CommitteeModel, ICommittee } from "./committee.interface";

const committeeSchema = new Schema<ICommittee, CommitteeModel>(
  {
    name: {
      type: String,
      required: true,
    },
    publisherName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    publisherEmail: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    address: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Committee = model<ICommittee, CommitteeModel>(
  "Committee",
  committeeSchema
);
