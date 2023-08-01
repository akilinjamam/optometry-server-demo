import configuration from "../../../configuration";
import { IGenericResponse } from "../../interface/common";
import { generateMemberId } from "./generateMemberId";
import { IMember } from "./member.interface";
import { Member } from "./member.model";

const createMemberService = async (payload: IMember): Promise<IMember> => {
  if (!payload.password) {
    payload.password = configuration.password as string;
  }

  if (!payload.member_id) {
    const id = await generateMemberId(payload);
    payload.member_id = id;
  }

  console.log(payload.member_id);

  const result = await Member.create(payload);
  return result;
};

const getMemberService = async (): Promise<IGenericResponse<IMember[]>> => {
  const result = await Member.find({});

  const total = await Member.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateMemberService = async (
  id: string,
  payload: Partial<IMember>
): Promise<IMember | null | undefined> => {
  const result = await Member.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteMemberService = async (id: string): Promise<IMember | null> => {
  const result = await Member.findByIdAndDelete({ _id: id });

  return result;
};

export const memberService = {
  createMemberService,
  getMemberService,
  updateMemberService,
  deleteMemberService,
};
