import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
import httpStatus from "http-status";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import router from "./app/routes";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("server for optometrist is ready to perform...");
});

// global errorHandler
app.use(globalErrorHandler);

// not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API not found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API not found",
      },
    ],
  });
  next();
});

export default app;
