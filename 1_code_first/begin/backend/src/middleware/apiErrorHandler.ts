import { Request, Response, NextFunction } from "express";
import ApiError from "../errors/ApiError";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const apiErrorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ApiError) {
    const { statusCode, error, data, success } = err.content;
    return res.status(statusCode).json({ error, data, success });
  }

  res
    .status(500)
    .json({ error: "ServerError", data: undefined, success: false });
};

export default apiErrorHandler;
