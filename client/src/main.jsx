import React from "react";
import ReactDOM from "react-dom/client";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Analise from "./pages/Analise";
import Medicamentos from "./pages/Medicamentos";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/analise",
    element: <Analise />,
  },
  {
    path: "/medicamentos",
    element: <Medicamentos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
