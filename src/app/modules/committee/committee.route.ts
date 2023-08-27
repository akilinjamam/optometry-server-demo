import express from "express";
import { committeeController } from "./committee.controller";

const router = express.Router();

router
  .route("/create-committee")
  .post(committeeController.createCommitteeController);
router.route("/").get(committeeController.getCommitteeController);

router
  .route("/:id")
  .patch(committeeController.updateCommitteeController)
  .delete(committeeController.deleteCommitteeController);

export const committeeRouter = router;
