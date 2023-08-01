import { IGenericResponse } from "../../interface/common";
import { IEvent } from "./event.interface";
import { Event } from "./event.model";

const createEventService = async (payload: IEvent): Promise<IEvent> => {
  const result = await Event.create(payload);
  return result;
};

const getEventService = async (): Promise<IGenericResponse<IEvent[]>> => {
  const result = await Event.find({});

  const total = await Event.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateEventService = async (
  id: string,
  payload: Partial<IEvent>
): Promise<IEvent | null | undefined> => {
  const result = await Event.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteEventService = async (id: string): Promise<IEvent | null> => {
  const result = await Event.findByIdAndDelete({ _id: id });

  return result;
};

export const eventService = {
  createEventService,
  getEventService,
  updateEventService,
  deleteEventService,
};
