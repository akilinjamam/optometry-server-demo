import express from "express";
import { aboutController } from "./about.controller";
const router = express.Router();

router.route("/create-about").post(aboutController.createAboutController);
router.route("/").get(aboutController.getAboutController);

router.route("/:id").patch(aboutController.updateAboutController);

export const aboutRouter = router;
