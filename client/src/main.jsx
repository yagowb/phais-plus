import React from "react";
import ReactDOM from "react-dom/client";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Analise from "./pages/Analise";
import Medicamentos from "./pages/Medicamentos";
// import Detalhes from "./pages/Detalhes";

import { Toaster } from "react-hot-toast";

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
  // {
  //   path: "/detalhes",
  //   element: <Detalhes />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
