import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { User, UserWithoutPassword } from "./users.types";

export const insertUser = async ({
  email,
  username,
  firstName,
  lastName,
  password,
}: Omit<User, "id">) => {
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
  const data: UserWithoutPassword | null = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return data;
};

// Note: The functions below check for users existence
export const existsByUsername = async (
  username: User["username"],
): Promise<boolean> => {
  const data: number = await prisma.user.count({
    where: {
      username: username,
    },
  });

  return data > 0;
};

export const existsByEmail = async (email: User["email"]): Promise<boolean> => {
  const data: number = await prisma.user.count({
    where: {
      email: email,
    },
  });

  return data > 0;
};

export const existsByUserId = async (id: User["id"]): Promise<boolean> => {
  const data: number = await prisma.user.count({
    where: {
      id: id,
    },
  });

  return data > 0;
};
