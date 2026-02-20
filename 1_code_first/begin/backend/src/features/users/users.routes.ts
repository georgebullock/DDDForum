import { Router } from "express";
import asyncHandler from "../../utils/asyncHandler";
import { createUser, getUserByEmail, updateUserById } from "./users.controller";

const usersRouter = Router();

usersRouter.post("/new", asyncHandler(createUser));

usersRouter.post("/edit/:userId", asyncHandler(updateUserById));

usersRouter.get("/", asyncHandler(getUserByEmail));

export default usersRouter;
