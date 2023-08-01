import { IGenericResponse } from "../../interface/common";
import { IGallery } from "./gallery.interface";
import { Gallery } from "./gallery.model";

const createGalleryService = async (payload: IGallery): Promise<IGallery> => {
  const result = await Gallery.create(payload);
  return result;
};

const getGalleryService = async (): Promise<IGenericResponse<IGallery[]>> => {
  const result = await Gallery.find({});

  const total = await Gallery.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateGalleryService = async (
  id: string,
  payload: Partial<IGallery>
): Promise<IGallery | null | undefined> => {
  const result = await Gallery.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteGalleryService = async (id: string): Promise<IGallery | null> => {
  const result = await Gallery.findByIdAndDelete({ _id: id });

  return result;
};

export const galleryService = {
  createGalleryService,
  getGalleryService,
  updateGalleryService,
  deleteGalleryService,
};
