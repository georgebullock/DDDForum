import { Request, Response, NextFunction } from "express";
import ApiError from "../errors/ApiError";
import errors from "../errors/errors";
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
    res.status(errors.applicationErrors.statusCode).json({
      error: `${err.meta?.target}AlreadyTaken`,
      data: undefined,
      success: false,
    });
  }

  if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
    res.status(errors.serverErrors.statusCode).json({
      error: errors.applicationErrors.userNotFound,
      data: undefined,
      success: false,
    });
  }

  res
    .status(500)
    .json({ error: "ServerError", data: undefined, success: false });
};

export default apiErrorHandler;
