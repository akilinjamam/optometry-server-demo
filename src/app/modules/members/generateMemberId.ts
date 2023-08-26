import { Member } from "./member.model";

export const findLastMemberId = async (): Promise<string | undefined> => {
  const lastMemberId = await Member.findOne({}).sort({ createdAt: -1 }).lean();
  return lastMemberId?.member_id
    ? lastMemberId.member_id.substring(4)
    : undefined;
};

export const generateMemberId = async () => {
  const currentId =
    (await findLastMemberId()) || (0).toString().padStart(5, "0");
  const increamentedId = parseInt(currentId) + 1;
  let increamentedIdString = increamentedId.toString().padStart(5, "0");

  increamentedIdString = `M-${increamentedIdString}`;

  return increamentedIdString;
};
