import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import ApiError from "../../errors/ApiError";
import generatePassword from "../../utils/generatePassword";
import errors from "../../errors/errors";
import { User, UserWithoutPassword } from "./users.types";

export const insertUser = async ({
  email,
  username,
  firstName,
  lastName,
}: Omit<User, "id" | "password">) => {
  const password = generatePassword();

  if (!password) {
    throw new ApiError({
      statusCode: errors.serverErrors.statusCode,
      error: errors.serverErrors.passwordGenerationFailed,
      data: undefined,
      success: false,
    });
  }

  const data: User = await prisma.user.create({
    data: {
      email,
      username,
      firstName,
      lastName,
      password,
    },
  });

  const userWithoutPassword: UserWithoutPassword = {
    id: data.id,
    email: data.email,
    username: data.username,
    firstName: data.firstName,
    lastName: data.lastName,
  };

  return userWithoutPassword;
};

export const updateUserById = async ({
  id,
  email,
  username,
  firstName,
  lastName,
}: UserWithoutPassword) => {
  const data: UserWithoutPassword = await prisma.user.update({
    where: {
      id,
    },
    data: {
      email,
      username,
      firstName,
      lastName,
    },
  });

  const userWithoutPassword: UserWithoutPassword = {
    id: data.id,
    email: data.email,
    username: data.username,
    firstName: data.firstName,
    lastName: data.lastName,
  };

  return userWithoutPassword;
};

export const findUserByEmail = async (email: User["email"]) => {
  const data: UserWithoutPassword = await prisma.user.findUniqueOrThrow({
    where: {
      email: email,
    },
  });

  const userWithoutPassword: UserWithoutPassword = {
    id: data.id,
    email: data.email,
    username: data.username,
    firstName: data.firstName,
    lastName: data.lastName,
  };

  return userWithoutPassword;
};

export const existsByUsername = async (username: User["username"]) => {
  const data: number = await prisma.user.count({
    where: {
      username: username,
    },
  });

  if (!data) {
    return false;
  }

  return true;
};

export const existsByEmail = async (email: User["email"]) => {
  const data: number = await prisma.user.count({
    where: {
      email: email,
    },
  });

  if (!data) {
    return false;
  }

  return true;
};

export const existsByUserId = async (id: User["id"]) => {
  const data: number = await prisma.user.count({
    where: {
      id: id,
    },
  });

  if (!data) {
    return false;
  }

  return true;
};
