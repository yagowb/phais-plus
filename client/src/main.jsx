import React from "react";
import ReactDOM from "react-dom/client";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Analise from "./pages/Analise";
import Medicamentos from "./pages/Medicamentos";
import Detalhes from "./pages/Detalhes";
import Solicitacoes from "./pages/Solicitacoes";
import Home from "./pages/Home";
import Admin from "./pages/Admin/Requisicoes";
import SolicitacaoIndividual from "./pages/SolicitacaoIndividual";
import Perfil from "./pages/Perfil";
import Users from "./pages/Admin/Users";

import { Toaster } from "react-hot-toast";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "analise",
    element: <Analise />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "medicamentos",
    element: <Medicamentos />,
  },
  {
    path: "medicamentos/:id",
    element: <Detalhes />,
  },
  {
    path: "/solicitacoes",
    element: <Solicitacoes />,
  },
  {
    path: "/solicitacoes/:id",
    element: <SolicitacaoIndividual />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/usuarios",
    element: <Users />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
