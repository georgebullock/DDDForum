import { Router, Request, Response, NextFunction } from "express";

const indexRouter = Router();

indexRouter.get("/", (_req: Request, res: Response, _next: NextFunction) => {
  return res.send(
    "Hey 👋🏿. Welcome to the Software Essentialist Backend API project!"
  );
});

export default indexRouter;
