import express from "express";
import { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  console.log(
    "Hey 👋🏿. Welcome to the Software Essentialist Backend API project!"
  );
  return res.send(
    "Hey 👋🏿. Welcome to the Software Essentialist Backend API project!"
  );
});

app.post("/users/new", (req: Request, res: Response) => {
  console.log("Create new user");
  return res.send("Create new user");
});

app.post("/users/edit/:userId ", (req: Request, res: Response) => {
  console.log("Get user by ID");
  return res.send("Get user by ID");
});

app.get("/users/email", (req: Request, res: Response) => {
  console.log("Get user by email");
  return res.send("Get user by email");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
