import { useRef } from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import phaisPlusVerticalLogo from "/logo-large.svg";
import phaisPlusHorizontalLogo from "/logo-horizontal-green.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Back } from "../../components/Back";
import { authenticate } from "../../services/api/auth";

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

      const { data: authResponse } = await authenticate({ cnpj, password });
      localStorage.setItem("accessToken", authResponse.data.token);
      navigate("/medicamentos");

      toast.success("Usuário autenticado com sucesso!");
    } catch (exception) {
      toast.error(exception.response.data.message);
    }
  }

  return (
    <main className="w-screen h-screen relative flex flex-col items-center justify-center gap-6 bg-bg-main">
      <Back to="/" position="left" />

      <div className="text-center">
        <img
          src={phaisPlusHorizontalLogo}
          alt="Logo Phais+"
          className="w-52 mx-auto mb-3 lg:hidden"
        />

        <img
          src={phaisPlusVerticalLogo}
          alt="Logo Phais+"
          className="hidden mb-8 lg:block"
        />

        <h1 className="text-neutral-200 text-xl font-medium sm:text-2xl">
          Bem-vindo(a)!
        </h1>

        <p className="text-neutral-400 text-lg font-medium sm:mt-1">
          Acesse o sistema <span className="underline">Phais+</span>:
        </p>
      </div>

      <form className="flex flex-col items-center mx-auto max-w-md gap-6 lg:gap-2">
        <div className="flex flex-col items-center mx-auto max-w-md gap-4">
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

        <div className="w-full flex flex-col items-center justify-center gap-3 lg:flex-col-reverse lg:gap-6">
          <Button label="Acessar" color="primary" onClick={handleForm}>
            <ArrowRightOnRectangleIcon className="w-6 h-6" />
          </Button>
          <Link
            title="Funcionalidade de esquecimento de senha indisponível"
            className="text-green-main font-medium underline cursor-not-allowed hover:text-green-dark lg:self-end"
          >
            Esqueceu sua senha?
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
