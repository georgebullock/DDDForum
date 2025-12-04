import express from "express";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(
    "Hey 👋🏿. Welcome to the Software Essentialist Backend API project!"
  );
  return res.send(
    "Hey 👋🏿. Welcome to the Software Essentialist Backend API project!"
  );
});

app.post(
  "/users/new",
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
