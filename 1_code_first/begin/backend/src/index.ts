import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routes";
import apiErrorHandler from "./middleware/apiErrorHandler";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(router);
app.use(apiErrorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
