import { IGenericResponse } from "../../interface/common";
import { ISearchTerm } from "../../interface/searchTerm";
import { publicationSearchableField } from "./publication.constant";
import { IPublication } from "./publication.interface";
import { Publication } from "./publication.model";

const createPublicationService = async (
  payload: IPublication
): Promise<IPublication> => {
  const result = await Publication.create(payload);

  return result;
};

const getPublicationService = async (
  payload: ISearchTerm
): Promise<IGenericResponse<IPublication[]>> => {
  const { searchTerm } = payload;

  const condition = [];

  if (searchTerm) {
    condition.push({
      $or: publicationSearchableField.map((fields) => ({
        [fields]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  const whereCondition = condition.length > 0 ? { $and: condition } : {};

  const result = await Publication.find(whereCondition);

  const total = await Publication.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updatePublicationService = async (
  id: string,
  payload: Partial<IPublication>
): Promise<IPublication | null | undefined> => {
  const result = await Publication.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deletePublicationService = async (
  id: string
): Promise<IPublication | null> => {
  const result = await Publication.findByIdAndDelete({ _id: id });

  return result;
};

export const publicationService = {
  createPublicationService,
  getPublicationService,
  updatePublicationService,
  deletePublicationService,
};
