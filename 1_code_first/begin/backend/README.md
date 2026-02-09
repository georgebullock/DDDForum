# DDD Forum Backend API

## Project Description

Welcome to the DDD Forum Backend API. This project is the backend for DDDForum, a Hackernews/Reddit-like forum where members can discuss and learn about Domain-Driven Design. Members can post links, ask questions, share their work, and engage in conversations about all things DDD.

This project is part of The Software Essentialist Course, providing the API infrastructure for the forum.

## Getting Started

This guide will help you set up and run the DDD Forum Backend API on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: It is recommended to use an LTS version.
- **pnpm**: A fast, disk space efficient package manager. If you don't have it, you can install it via `npm install -g pnpm`.
- **PostgreSQL Database**: You will need access to a running PostgreSQL instance.

### Installation

1.  **Clone the Repository:**

    First, clone the project repository to your local machine.

    ```bash
    git clone git@github.com:georgebullock/DDDForum.git
    cd DDDForum/1_code_first/begin/backend
    ```

2.  **Install Dependencies:**

    After entering the `backend` directory install the project dependencies using pnpm:

    ```bash
    pnpm install
    ```

3.  **Set up Environment Variables:**

    Create a `.env` file in the root of the `backend` directory. This file will store your environment variables, such as the database connection string and application port.

    ```
    # Example .env file
    DATABASE_URL="postgresql://user:password@host:port/database_name"
    PORT=3000
    ```

    - `DATABASE_URL`: Replace `user`, `password`, `host`, `port`, and `database_name` with your PostgreSQL database credentials.
    - `PORT`: The port on which the Express server will run. Defaults to `3000` if not specified.

4.  **Run Database Migrations:**

    Apply the Prisma migrations to set up your database schema. This will create the necessary tables for testing the implementation.

    ```bash
    npx prisma migrate dev --name init
    ```

### Running the Application

You can run the application in development mode (with hot-reloading) or build it for production.

- **Development Mode:**

  To run the application with `nodemon` for automatic restarts on file changes:

  ```bash
  pnpm run start:dev
  ```

  The API will be accessible at `http://localhost:3000` (or your specified `PORT`).

- **Production Mode:**

  To build the TypeScript project and then run the compiled JavaScript:

  ```bash
  pnpm start
  ```

### Running Tests

To execute the project's test suite:

```bash
pnpm test
```

**_Note: I'm in the the Code-First phase of the course, so there is no test suite. Tests will come in the Best-Practice phase when we cover TDD_**

### Prisma Studio

To interactively view and manage your database data using Prisma Studio:

```bash
pnpm run prisma-studio
```
