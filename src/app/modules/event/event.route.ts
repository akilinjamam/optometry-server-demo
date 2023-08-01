import express from "express";
import { eventController } from "./event.controller";

const router = express.Router();

router.route("/create-event").post(eventController.createEventController);
router.route("/").get(eventController.getEventController);

router
  .route("/:id")
  .patch(eventController.updateEventController)
  .delete(eventController.deleteEventController);

export const eventRoute = router;
