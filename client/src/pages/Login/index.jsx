import { useRef } from "react";
import {
  ArrowRightOnRectangleIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import LogoLarge from "/logo-large.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { authenticate } from "../../services/api";

function Login() {
  const navigate = useNavigate();

  const cnpjInputRef = useRef();
  const passwordInputRef = useRef();

  async function handleForm() {
    try {
      const cnpj = cnpjInputRef.current.value;
      const password = passwordInputRef.current.value;

      const errors = [];
      if (!cnpj) {
        errors.push('O campo "CNPJ" é obrigatório.');
      }

      if (!password) {
        errors.push('O campo "Senha" é obrigatório.');
      }

      if (errors.length) {
        return errors.forEach((error) => toast.error(error));
      }

      await authenticate({ cnpj, password });
      navigate("/medicamentos");

      toast.success("Usuário autenticado com sucesso!");
    } catch (exception) {
      toast.error(exception.response.data.message);
    }
  }

  return (
    <main className="text-grays-component w-screen h-screen relative flex flex-col items-center justify-center bg-bg-main text-white-200">
      <Link
        to="/"
        className="absolute top-7 left-14 flex gap-2 cursor-pointer hover:text-[#c0c0c7]"
      >
        <ArrowUturnLeftIcon className="w-5 h-5" />
        <p>Voltar</p>
      </Link>

      <div className="mb-6">
        <img src={LogoLarge} alt="" />
      </div>

      <div>
        <p className="text-xl font-medium">Bem-vindo(a) de volta!</p>
        <p>
          Acesse o sistema de <span className="underline">Empresa</span>:
        </p>
      </div>

      <div className="space-y-2 w-full flex flex-col items-center justify-center px-10">
        <Input
          label="CNPJ"
          type="text"
          placeholder="Insira seu CNPJ"
          ref={cnpjInputRef}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Insira sua senha"
          ref={passwordInputRef}
        />
      </div>

      <p className="w-96 pt-1 underline text-end text-sm font-medium text-green-main">
        Esqueceu sua senha?
      </p>

      <Button
        label="ACESSAR"
        type="submit"
        color="primary"
        onClick={handleForm}
      >
        <ArrowRightOnRectangleIcon className="w-6 h-6" />
      </Button>
    </main>
  );
}

export default Login;
