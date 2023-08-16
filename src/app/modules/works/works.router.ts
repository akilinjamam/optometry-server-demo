import express from "express";
import { workController } from "./works.controller";
const router = express.Router();

router.route("/create-Work").post(workController.createWorkController);
router.route("/").get(workController.getWorkController);

router.route("/:id").patch(workController.updateWorkController);

export const workRouter = router;
