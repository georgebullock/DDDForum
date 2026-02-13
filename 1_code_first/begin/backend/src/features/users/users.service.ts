import * as usersRepo from "./users.repo";
import { User } from "./users.types";
import ApiError from "../../errors/ApiError";
import errors from "../../errors/errors";

export const createUser = async ({
  username,
  firstName,
  lastName,
  email,
}: Omit<User, "id" | "password">) => {
  const userExists = await usersRepo.existsByUsername(username);

  if (userExists) {
    throw new ApiError({
      statusCode: errors.applicationErrors.statusCode,
      error: errors.applicationErrors.usernameTaken,
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

  return data;
};

export const updateUserById = async ({
  id,
  username,
  firstName,
  lastName,
  email,
}: Omit<User, "password">) => {
  const userExists = await usersRepo.existsByUserId(username);

  if (!userExists) {
    throw new ApiError({
      statusCode: errors.applicationErrors.statusCode,
      error: errors.applicationErrors.userNotFound,
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

  return data;
};

export const findUserByEmail = async (email: User["email"]) => {
  const userExists = await usersRepo.existsByEmail(email);

  if (!userExists) {
    throw new ApiError({
      statusCode: errors.applicationErrors.statusCode,
      error: errors.applicationErrors.userNotFound,
      data: undefined,
      success: false,
    });
  }

  const data = await usersRepo.findUserByEmail(email);

  return data;
};
