import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

import phaisPlusVerticalLogo from "/logo-large.svg";
import phaisPlusHorizontalLogo from "/logo-horizontal-green.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { createRegister } from "../../services/api/register";

function Register() {
  const navigate = useNavigate();

  const cnpjInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const usernameInputRef = useRef();

  async function handleForm() {
    try {
      const cnpj = cnpjInputRef.current.value;
      const email = emailInputRef.current.value;
      const phone = phoneInputRef.current.value;
      const username = usernameInputRef.current.value;

      const errors = [];
      if (!cnpj) {
        errors.push('O campo "CNPJ" é obrigatório.');
      }

      if (!email) {
        errors.push('O campo "E-mail" é obrigatório.');
      }

      if (!phone) {
        errors.push('O campo "Telefone" é obrigatório.');
      }

      if (!username) {
        errors.push('O campo "Como devemos chamá-lo?" é obrigatório.');
      }

      if (errors.length) {
        return errors.forEach((error) => toast.error(error));
      }

      await createRegister({ cnpj, email, phone, username });
      navigate("/analise");

      toast.success("Solicitação de cadastro enviada com sucesso.");
    } catch (exception) {
      toast.error(exception.response.data.message);
    }
  }

  return (
    <main className="relative flex flex-wrap h-screen lg:items-center">
      <section className="hidden flex-col gap-8 items-center justify-center h-full w-full bg-bg-layer px-4 py-12 lg:flex lg:h-full lg:w-1/2 lg:px-8 lg:py-24">
        <img src={phaisPlusVerticalLogo} alt="Logo Phais+" />

        <div className="flex flex-col gap-4 items-center">
          <p className="text-neutral-200 text-lg font-medium">
            Se você já possui uma conta:
          </p>
          <Button to="/login" label="ACESSAR" color="secondary">
            <ArrowRightOnRectangleIcon className="h-6 w-6" />
          </Button>
        </div>
      </section>

      <section className="w-full h-full flex flex-col items-center justify-center gap-6 bg-bg-main px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-lg text-center">
          <img
            src={phaisPlusHorizontalLogo}
            alt="Logo Phais+"
            className="w-52 mx-auto mb-3 lg:hidden"
          />

          <h1 className="text-neutral-200 text-xl font-medium sm:text-2xl">
            Quer utilizar nosso sistema?
          </h1>

          <p className="text-neutral-400 text-lg font-medium sm:mt-1">
            Entre em contato conosco!
          </p>
        </div>

        <form className="flex flex-col items-center mx-auto max-w-md gap-6">
          <div className="flex flex-col items-center mx-auto max-w-md gap-4">
            <Input
              label="CNPJ"
              type="text"
              placeholder="Insira o CNPJ"
              ref={cnpjInputRef}
            />
            <Input
              label="E-mail"
              type="email"
              placeholder="Insira o endereço de e-mail"
              ref={emailInputRef}
            />
            <Input
              label="Telefone"
              type="text"
              placeholder="Insira o número de telefone"
              ref={phoneInputRef}
            />
            <Input
              label="Como devemos chamá-lo?"
              type="text"
              placeholder="Insira o nome do estabelecimento"
              ref={usernameInputRef}
            />
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-3">
            <Button label="SOLICITAR" color="primary" onClick={handleForm}>
              <UserPlusIcon className="w-6 h-6" />
            </Button>
            <Link
              to="/login"
              className="text-green-dark font-medium underline hover:text-green-dark lg:hidden"
            >
              Já possui uma conta?
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Register;
