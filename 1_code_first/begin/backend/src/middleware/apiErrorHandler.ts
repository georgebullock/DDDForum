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
    if (
      typeof err.meta?.target === "object" &&
      Array.isArray(err.meta.target)
    ) {
      if (err.meta.target[0] === "email") {
        return res.status(errors.applicationErrors.statusCode409).json({
          error: errors.applicationErrors.emailAlreadyInUse,
          data: undefined,
          success: false,
        });
      }

      if (err.meta.target[0] === "username") {
        return res.status(errors.applicationErrors.statusCode409).json({
          error: errors.applicationErrors.usernameTaken,
          data: undefined,
          success: false,
        });
      }
    }

    return res.status(errors.applicationErrors.statusCode409).json({
      error: errors.applicationErrors.uniqueFieldConstraintViolation,
      data: undefined,
      success: false,
    });
  }

  if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
    return res.status(errors.applicationErrors.statusCode404).json({
      error: errors.applicationErrors.userNotFound,
      data: undefined,
      success: false,
    });
  }

  return res
    .status(500)
    .json({ error: "ServerError", data: undefined, success: false });
};

export default apiErrorHandler;
