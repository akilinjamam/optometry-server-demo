import { Schema, model } from "mongoose";
import { IMember, MemberModel } from "./member.interface";

const memberSchema = new Schema<IMember, MemberModel>(
  {
    name: {
      type: String,
      required: true,
    },
    member_id: {
      type: String,
      default: "12345",
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    imgLink: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mobile_no: {
      type: String,
      required: true,
    },
    expiration: {
      type: String,
      default: "3",
      required: true,
    },
    approval: {
      type: Boolean,
      default: false,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
    isSignOut: {
      type: Boolean,
      default: false,
      required: true,
    },
    qr_code: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Member = model<IMember, MemberModel>("Member", memberSchema);
