import express from "express";
import { heroController } from "./hero.controller";
const router = express.Router();

router.route("/create-hero").post(heroController.createHeroController);
router.route("/").get(heroController.getHeroController);

router.route("/:id").patch(heroController.updateHeroController);

export const heroRouter = router;
