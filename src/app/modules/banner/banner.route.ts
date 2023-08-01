import express from "express";
import { BannerController } from "./banner.controller";

const router = express.Router();

router.route("/create-banner").post(BannerController.createBannerController);
router.route("/").get(BannerController.getBannerController);

router
  .route("/:id")
  .patch(BannerController.updateBannerController)
  .delete(BannerController.deleteBannerController);

export const bannerRouter = router;
