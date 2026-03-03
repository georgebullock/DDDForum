# DDD Forum Frontend

## Project Description

Welcome to the DDD Forum Frontend. This project is the frontend for DDDForum, a Hackernews/Reddit-like forum where members can discuss and learn about Domain-Driven Design. Members can post links, ask questions, share their work, and engage in conversations about all things DDD.

This project is part of The Software Essentialist Course, providing the UI for the forum.

## Getting Started

This guide will help you set up and run the DDD Forum Frontend on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: It is recommended to use an LTS version.
- **pnpm**: A fast, disk space efficient package manager. If you don't have it, you can install it via `npm install -g pnpm`.

### Installation

1.  **Clone the Repository:**

    First, clone the project repository to your local machine.

    ```bash
    git clone git@github.com:georgebullock/DDDForum.git
    cd DDDForum/1_code_first/begin/frontend
    ```

2.  **Install Dependencies:**

    After entering the `frontend` directory install the project dependencies using pnpm:

    ```bash
    pnpm install
    ```

### Running the Application

You can run the application in development mode (with hot-reloading) or build it for production.

- **Development Mode:**

  To run the application with `Vite` for automatic restarts on file changes:

  ```bash
  pnpm run start:dev
  ```

  The API will be accessible at `http://localhost:5173`.

- **Production Mode:**

  To build the TypeScript project and then run the compiled JavaScript:

  ```bash
  pnpm build
  ```

### Running Tests

To execute the project's test suite:

```bash
pnpm test
```
