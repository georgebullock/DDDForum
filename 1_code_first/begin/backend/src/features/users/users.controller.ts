import { Request, Response, NextFunction } from "express";
import * as usersRepo from "./users.repo";
import ApiError from "../../errors/ApiError";
import errors from "../../errors/errors";

export const createUser = async (
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { email, username, firstName, lastName } = req.body;

  if (!email) {
    throw new ApiError({
      statusCode: errors.validationErrors.statusCode,
      error: errors.validationErrors.missingEmail,
      data: undefined,
      success: false,
    });
  }

  if (!username) {
    throw new ApiError({
      statusCode: errors.validationErrors.statusCode,
      error: errors.validationErrors.missingUsername,
      data: undefined,
      success: false,
    });
  }

  if (!firstName) {
    throw new ApiError({
      statusCode: errors.validationErrors.statusCode,
      error: errors.validationErrors.missingFirstname,
      data: undefined,
      success: false,
    });
  }

  if (!lastName) {
    throw new ApiError({
      statusCode: errors.validationErrors.statusCode,
      error: errors.validationErrors.missingLastname,
      data: undefined,
      success: false,
    });
  }

  const data = await usersRepo.insertUser({
    email,
    username,
    firstName,
    lastName,
  });

  res.status(201).json({ error: undefined, data: data, success: true });
};

export const updateUserById = async (
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const id = req.params.userId;
  const { email, username, firstName, lastName } = req.body;

  if (!email) {
    throw new ApiError({
      statusCode: errors.validationErrors.statusCode,
      error: errors.validationErrors.missingEmail,
      data: undefined,
      success: false,
    });
  }

  if (!username) {
    throw new ApiError({
      statusCode: errors.validationErrors.statusCode,
      error: errors.validationErrors.missingUsername,
      data: undefined,
      success: false,
    });
  }

  if (!firstName) {
    throw new ApiError({
      statusCode: errors.validationErrors.statusCode,
      error: errors.validationErrors.missingFirstname,
      data: undefined,
      success: false,
    });
  }

  if (!lastName) {
    throw new ApiError({
      statusCode: errors.validationErrors.statusCode,
      error: errors.validationErrors.missingLastname,
      data: undefined,
      success: false,
    });
  }

  const data = await usersRepo.updateUserById({
    id,
    email,
    username,
    firstName,
    lastName,
  });

  res.status(200).json({
    error: undefined,
    data,
    success: true,
  });
};

export const getUserByEmail = async (
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { email } = req.query;

  if (!email) {
    throw new ApiError({
      statusCode: errors.validationErrors.statusCode,
      error: errors.validationErrors.missingEmail,
      data: undefined,
      success: false,
    });
  }

  if (!(typeof email === "string")) {
    throw new ApiError({
      statusCode: errors.validationErrors.statusCode,
      error: errors.validationErrors.emailMustBeString,
      data: undefined,
      success: false,
    });
  }

  const data = await usersRepo.findUserByEmail(email);

  return res.status(200).json({
    error: undefined,
    data,
    success: true,
  });
};
