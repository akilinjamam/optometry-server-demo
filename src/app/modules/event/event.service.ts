import { IGenericResponse } from "../../interface/common";
import { ISearchTerm } from "../../interface/searchTerm";
import { eventSearchableField } from "./event.constant";
import { IEvent } from "./event.interface";
import { Event } from "./event.model";

const createEventService = async (payload: IEvent): Promise<IEvent> => {
  const result = await Event.create(payload);
  return result;
};

const getEventService = async (
  payload: ISearchTerm
): Promise<IGenericResponse<IEvent[]>> => {
  const { searchTerm } = payload;
  const condition = [];

  if (searchTerm) {
    condition.push({
      $or: eventSearchableField.map((fields) => ({
        [fields]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  const whereCondition = condition.length > 0 ? { $and: condition } : {};

  const result = await Event.find(whereCondition);

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
