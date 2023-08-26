import configuration from "../../../configuration";
import { IGenericResponse } from "../../interface/common";
import { ISearchTerm } from "../../interface/searchTerm";
import { generateMemberId } from "./generateMemberId";
import { memberSearchableField } from "./member.constant";
import { IMember } from "./member.interface";
import { Member } from "./member.model";

const createMemberService = async (payload: IMember): Promise<IMember> => {
  if (!payload.password) {
    payload.password = configuration.password as string;
  }

  if (!payload.member_id) {
    const id = await generateMemberId();
    payload.member_id = id;
  }

  const result = await Member.create(payload);
  return result;
};

const getMemberService = async (
  payload: ISearchTerm
): Promise<IGenericResponse<IMember[]>> => {
  const { searchTerm } = payload;
  const condition = [];

  if (searchTerm) {
    condition.push({
      $or: memberSearchableField.map((fields) => ({
        [fields]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  const whereCondition = condition.length > 0 ? { $and: condition } : {};

  const result = await Member.find(whereCondition);

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
