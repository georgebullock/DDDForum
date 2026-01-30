import { Router, Request, Response } from "express";

const indexRouter = Router();

indexRouter.get("/", (_req: Request, res: Response) => {
  return res.send(
    "Hey 👋🏿. Welcome to the Software Essentialist Backend API project!",
  );
});

export default indexRouter;
