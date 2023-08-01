import express from "express";
import { commentsController } from "./comments.controller";

const router = express.Router();

router
  .route("/create-comment")
  .post(commentsController.createCommentsController);
router.route("/").get(commentsController.getCommentsController);

router
  .route("/:id")
  .patch(commentsController.updateCommentsController)
  .delete(commentsController.deleteCommentsController);

export const commentRouter = router;
