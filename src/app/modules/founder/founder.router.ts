import express from "express";
import { founderController } from "./founder.controller";

const router = express.Router();

router.route("/create-founder").post(founderController.createFounderController);
router.route("/").get(founderController.getFounderController);

router
  .route("/:id")
  .patch(founderController.updateFounderController)
  .delete(founderController.deleteFounderController);

export const founderRouter = router;
