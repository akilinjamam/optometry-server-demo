import { Response } from "express";
import jwt from "jsonwebtoken";
import configuration from "../configuration/index";

export const verifyJwt = (req: any, res: Response, next: any) => {
  const authorization = req.headers.authorization;

  const splitedHeadersToken: any = authorization?.split(" ")[1];

  if (!authorization) {
    const response = res.status(401).json({
      error: true,
      message: "unauthorized access",
    });

    return response;
  }

  jwt.verify(
    splitedHeadersToken,
    configuration.secret_key as string,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(403).json({
          error: true,
          message: "un-authorized access",
        });
      }

      req.decoded = decoded;

      next();
    }
  );
};
