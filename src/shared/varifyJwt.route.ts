import express from "express";
import jwt from "jsonwebtoken";
import configuration from "../configuration/index";
const router = express.Router();

router.route("/create-jwt").post((req, res) => {
  const user = req.body;
  console.log(user);
  const token = jwt.sign(user, configuration.secret_key as string, {
    expiresIn: "1h",
  });
  console.log(token);

  res.send({ token });
});

export const jwtRouter = router;
