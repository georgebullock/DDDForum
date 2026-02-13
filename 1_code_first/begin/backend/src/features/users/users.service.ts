import * as usersRepo from "./users.repo";
import { User } from "./users.types";
import ApiError from "../../errors/ApiError";
import generatePassword from "../../utils/generatePassword";
import errors from "../../errors/errors";

export const createUser = async ({
  username,
  firstName,
  lastName,
  email,
}: Omit<User, "id" | "password">) => {
  const userExistsByUsername = await usersRepo.existsByUsername(username);
  const userExistsByEmail = await usersRepo.existsByEmail(username);

  if (userExistsByUsername) {
    throw new ApiError({
      statusCode: errors.applicationErrors.statusCode,
      error: errors.applicationErrors.usernameTaken,
      data: undefined,
      success: false,
    });
  }

  if (userExistsByEmail) {
    throw new ApiError({
      statusCode: errors.applicationErrors.statusCode,
      error: errors.applicationErrors.emailAlreadyInUse,
      data: undefined,
      success: false,
    });
  }

  const password = generatePassword();

  if (!password) {
    throw new ApiError({
      statusCode: errors.serverErrors.statusCode,
      error: errors.serverErrors.passwordGenerationFailed,
      data: undefined,
      success: false,
    });
  }

  const data = await usersRepo.insertUser({
    email,
    username,
    firstName,
    lastName,
    password,
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
  const data = await usersRepo.findUserByEmail(email);

  if (!data) {
    throw new ApiError({
      statusCode: errors.applicationErrors.statusCode,
      error: errors.applicationErrors.userNotFound,
      data: undefined,
      success: false,
    });
  }

  return data;
};
