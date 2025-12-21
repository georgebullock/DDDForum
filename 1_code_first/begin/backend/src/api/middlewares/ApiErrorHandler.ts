import { Request, Response, NextFunction } from "express";
import ApiError from "../../utils/ApiError";

const ApiErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    const { statusCode, error, data, success } = err.content;
    res.status(statusCode).json({ error, data, success });
  }

  console.error(err.stack);
  res.status(500).send("Something broke!");
};

export default ApiErrorHandler;
