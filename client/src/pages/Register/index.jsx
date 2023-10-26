import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { createRegister } from "../../services/api";

import LogoLarge from "/logo-large.svg";
import LogoHorizontal from "/logo-horizontal-green.svg";

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

      if (!cnpj || !email || !phone || !username) {
        return window.alert("Todos os campos são obrigatórios!");
      }

      await createRegister({ cnpj, email, phone, username });

      navigate("/analise");
    } catch (exception) {
      window.alert(exception.response.data.message);
    }
  }

  return (
    <main className="relative flex flex-row-reverse flex-wrap lg:h-screen lg:items-center">
      <section className="w-full h-full bg-bg-main text-white-200 px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-lg text-center">
          <img
            src={LogoHorizontal}
            alt=""
            className="block mx-auto mb-6 sm:hidden"
          />
          <h1 className="text-xl font-bold sm:text-2xl">
            Quer utilizar nosso sistema?
          </h1>

          <p className="mt-2 text-gray-500 text-lg">
            Entre em contato conosco!
          </p>
        </div>

        <form
          action=""
          className="flex flex-col items-center mx-auto mb-0 mt-4 max-w-md gap-y-4"
        >
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

          <div className="flex items-center justify-center">
            <Button
              label="SOLICITAR"
              type="submit"
              color="primary"
              onClick={handleForm}
            >
              <UserPlusIcon className="w-6 h-6" />
            </Button>
          </div>
        </form>
      </section>

      <section className="flex flex-col gap-6 items-center justify-center h-full w-full bg-bg-layer text-white-200 px-4 py-12 sm:h-96 sm:px-6 sm:py-16 lg:h-full lg:w-1/2 lg:px-8 lg:py-24">
        <img src={LogoLarge} alt="" />

        <div className="flex flex-col gap-2 items-center">
          <p className="font-medium">Se você já possui uma conta:</p>
          <Button
            label="ACESSAR"
            type="button"
            color="secondary"
            redirect="login"
          >
            <ArrowRightOnRectangleIcon className="h-6 w-6 text-white-200" />
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Register;
