import { Router, Request, Response, NextFunction } from "express";

const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(
    "Hey 👋🏿. Welcome to the Software Essentialist Backend API project!"
  );
  return res.send(
    "Hey 👋🏿. Welcome to the Software Essentialist Backend API project!"
  );
});

indexRouter.get("/error", (req: Request, res: Response, next: NextFunction) => {
  throw new Error("Something went wrong");
});

export default indexRouter;
