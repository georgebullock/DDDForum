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

  if (err instanceof PrismaClientKnownRequestError && err.code === "P2002") {
    return res.status(409).json({
      error: `${err.meta?.target}AlreadyTaken`,
      data: undefined,
      success: false,
    });
  }

  if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
    return res.status(404).json({
      error: `UserNotFound`,
      data: undefined,
      success: false,
    });
  }

  res
    .status(500)
    .json({ error: "ServerError", data: undefined, success: false });
};

export default apiErrorHandler;
