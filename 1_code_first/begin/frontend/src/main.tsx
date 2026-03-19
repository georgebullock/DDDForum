import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import RegisterPage from "./Pages/RegisterPage.tsx";
import "./index.css";
import "./App.css";

// AIDEV-NOTE: Keep this route table tiny and explicit for the course project.
// If page complexity grows (dynamic params, nested layouts, guarded routes), migrate to React Router.
const routeAliases: Record<string, string> = {
  "/register.html": "/register",
};

const routeTable = {
  "/": <App />,
  "/register": <RegisterPage />,
};

const path = routeAliases[window.location.pathname] ?? window.location.pathname;
const page = routeTable[path as keyof typeof routeTable] ?? <App />;

createRoot(document.getElementById("root")!).render(
  <StrictMode>{page}</StrictMode>,
);
