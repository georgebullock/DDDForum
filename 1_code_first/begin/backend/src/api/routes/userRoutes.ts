import { Router, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import asyncHandler from "../../utils/asyncHandler";
import ApiError from "../../utils/ApiError";
import generatePassword from "../../utils/generatePassword";

const userRouter = Router();
const prisma = new PrismaClient();

type User = {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
};

userRouter.post(
  "/new",
  asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { email, username, firstName, lastName } = req.body;

    if (!email) {
      throw new ApiError({
        statusCode: 400,
        error: "Validation Error: Email is required",
        data: undefined,
        success: false,
      });
    }

    if (!username) {
      throw new ApiError({
        statusCode: 400,
        error: "Validation Error: Username is required",
        data: undefined,
        success: false,
      });
    }

    if (!firstName) {
      throw new ApiError({
        statusCode: 400,
        error: "Validation Error: Firstname is required",
        data: undefined,
        success: false,
      });
    }

    if (!lastName) {
      throw new ApiError({
        statusCode: 400,
        error: "Validation Error: Lastname is required",
        data: undefined,
        success: false,
      });
    }

    const password = generatePassword();

    if (!password) {
      throw new ApiError({
        statusCode: 500,
        error: "Password generation failed",
        data: undefined,
        success: false,
      });
    }

    const data = await prisma.user.create({
      data: {
        email,
        username,
        firstName,
        lastName,
        password,
      },
    });

    res.status(201).json({ error: undefined, data: data, success: true });
  })
);

userRouter.post(
  "/edit/:userId",
  asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const id = req.params.userId;
    const { email, username, firstName, lastName } = req.body;

    if (!email) {
      throw new ApiError({
        statusCode: 400,
        error: "Validation Error: Email is required",
        data: undefined,
        success: false,
      });
    }

    if (!username) {
      throw new ApiError({
        statusCode: 400,
        error: "Validation Error: Username is required",
        data: undefined,
        success: false,
      });
    }

    if (!firstName) {
      throw new ApiError({
        statusCode: 400,
        error: "Validation Error: Firstname is required",
        data: undefined,
        success: false,
      });
    }

    if (!lastName) {
      throw new ApiError({
        statusCode: 400,
        error: "Validation Error: Lastname is required",
        data: undefined,
        success: false,
      });
    }

    if (typeof id === "string") {
      const data: User = await prisma.user.update({
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

      res.status(200).json({
        error: undefined,
        data,
        success: true,
      });
    }
  })
);

userRouter.get(
  "/",
  asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { email } = req.query;

    if (!email) {
      throw new ApiError({
        statusCode: 400,
        error: "Validation Error: Email is required",
        data: undefined,
        success: false,
      });
    }

    if (typeof email === "string") {
      const data: User = await prisma.user.findUniqueOrThrow({
        where: {
          email: email,
        },
      });

      res.status(200).json({
        error: undefined,
        data,
        success: true,
      });
    }
  })
);

export default userRouter;
