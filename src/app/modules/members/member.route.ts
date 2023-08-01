import express from "express";
import { memberController } from "./member.controller";

const router = express.Router();

router.route("/create-member").post(memberController.createMemberController);
router.route("/").get(memberController.getMemberController);

router
  .route("/:id")
  .patch(memberController.updateMemberController)
  .delete(memberController.deleteMemberController);

export const memberRoute = router;
