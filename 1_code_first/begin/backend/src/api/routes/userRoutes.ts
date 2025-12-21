import { Router, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import asyncHandler from "../../utils/asyncHandler";
import ApiError from "../../utils/ApiError";

const userRouter = Router();
const prisma = new PrismaClient();

userRouter.post(
  "/new",
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    console.log("req.body:", req.body);

    const { email, username, firstName, lastName, password } = req.body;

    if (!email) {
      throw new ApiError({
        statusCode: 400,
        error: "Validation Error: Email is required",
        data: undefined,
        success: false,
      });
    }

    await prisma.user.create({
      data: {
        email,
        username,
        firstName,
        lastName,
        password,
      },
    });

    res.status(201).json({ email, username, firstName, lastName, password });
  })
);

userRouter.post("/edit/:userId ", (req: Request, res: Response) => {
  console.log("Get user by ID");
  return res.send("Get user by ID");
});

userRouter.get("/email", (req: Request, res: Response) => {
  console.log("Get user by email");
  return res.send("Get user by email");
});

export default userRouter;
