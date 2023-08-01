import { Schema, model } from "mongoose";
import { EventModel, IEvent } from "./event.interface";

const eventSchema = new Schema<IEvent, EventModel>(
  {
    title: {
      type: String,
      required: true,
      maxlength: 80,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    eventDate: {
      type: String,
      required: true,
    },
    imgLink: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    approval: {
      type: Boolean,
      default: false,
      required: true,
    },
    deadline: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Event = model<IEvent, EventModel>("Event", eventSchema);
