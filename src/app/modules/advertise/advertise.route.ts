import express from "express";
import { advertiseController } from "./advertise.controller";

const router = express.Router();

router
  .route("/create-advertise")
  .post(advertiseController.createAdvertiseController);
router.route("/").get(advertiseController.getAdvertiseController);

router.route("/:id").patch(advertiseController.updateAdvertiseController);

export const advertiseRouter = router;
