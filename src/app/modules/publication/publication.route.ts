import express from "express";
import { publicationController } from "./publication.controller";

const router = express.Router();

router
  .route("/create-publication")
  .post(publicationController.createPublicationController);
router.route("/").get(publicationController.getPublicationController);

router
  .route("/:id")
  .patch(publicationController.updatePublicationController)
  .delete(publicationController.deletePublicationController);

export const publicationRouter = router;
