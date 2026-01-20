import express from "express";
import indexRouter from "./api/routes/indexRoute";
import userRouter from "./api/routes/userRoutes";
import ApiErrorHandler from "./api/middlewares/ApiErrorHandler";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", indexRouter);
app.use("/users", userRouter);
app.use(ApiErrorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
