import express from "express";
import { likeController } from "./likes.controller";

const router = express.Router();

router.route("/create-like").post(likeController.createLikeController);
router.route("/").get(likeController.getLikeController);

router
  .route("/:id")
  .patch(likeController.updateLikeController)
  .delete(likeController.deleteLikeController);

export const likeRoute = router;
