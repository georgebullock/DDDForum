import { Router } from "express";
import indexRouter from "./index.routes";
import usersRouter from "./features/users/users.routes";

const router = Router();

router.use("/", indexRouter);
router.use("/users", usersRouter);

export default router;
