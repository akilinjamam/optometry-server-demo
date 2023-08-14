import express from "express";
import jwt from "jsonwebtoken";
import configuration from "../configuration/index";
const router = express.Router();

router.route("/create-jwt").post((req, res) => {
  const user = req.body;

  const token = jwt.sign(user, configuration.secret_key as string, {
    expiresIn: "1h",
  });

  res.send({ token });
});

export const jwtRouter = router;
