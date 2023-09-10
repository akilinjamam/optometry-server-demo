import express from "express";
import { offlinePaymentController } from "./offlinePayment.controller";
import { verifyJwt } from "../../../shared/verifyJwt";

const router = express.Router();

router
  .route("/create-offlinePayment")
  .post(offlinePaymentController.createOfflinePaymentController);
router
  .route("/")
  .get(verifyJwt, offlinePaymentController.getOfflinePaymentController);

router
  .route("/:id")
  .patch(offlinePaymentController.updateOfflinePaymentController)
  .delete(offlinePaymentController.deleteOfflinePaymentController);

export const offlinePaymentRouter = router;
