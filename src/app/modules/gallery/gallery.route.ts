import express from "express";
import { galleryController } from "./gallery.controller";

const router = express.Router();

router.route("/create-gallery").post(galleryController.createGalleryController);
router.route("/").get(galleryController.getGalleryController);

router
  .route("/:id")
  .patch(galleryController.updateGalleryController)
  .delete(galleryController.deleteGalleryController);

export const galleryRoute = router;
