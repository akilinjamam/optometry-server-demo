import { Model } from "mongoose";

export type IEvent = {
  title: string;
  name: string;
  email: string;
  eventDate: string;
  imgLink: string;
  deadline: string;
  description: string;
  approval: boolean;
};

export type EventModel = Model<IEvent, Record<string, unknown>>;
