import { Router, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const userRouter = Router();
const prisma = new PrismaClient();

userRouter.post(
  "/new",
  async (req: Request, res: Response, next: NextFunction) => {
    // Get data from the request
    const { email, username, password, firstName, lastName, id } = req.body;

    try {
      // Try to add data to the database
      await prisma.user.create({
        data: {
          id,
          email,
          username,
          firstName,
          lastName,
          password,
        },
      });

      res.send();
    } catch (err) {
      next(err);
      console.log(err);
      // If failure return error 409 | 400 | 500 with the right message
    }

    // Maybe do something else here...
  }
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
