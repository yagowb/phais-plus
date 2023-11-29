import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

import phaisPlusHorizontalLogo from "/logo-horizontal-green.svg";
import progressBar from "/request-progress.svg";

function Analise() {
  return (
    <main className="w-screen h-screen relative flex flex-col items-center justify-center gap-2 bg-bg-main">
      <Link
        to="/"
        className="text-neutral-200 absolute top-8 left-6 flex items-center justify-center gap-2 cursor-pointer hover:text-neutral-400"
      >
        <ArrowUturnLeftIcon className="w-5 h-5" />
        <p>Voltar</p>
      </Link>

      <div
        className="absolute top-8 right-8 cursor-not-allowed"
        title="Botão de instruções não disponíveis no momento"
      >
        <InformationCircleIcon className="w-7 aspect-square text-green-main hover:text-green-dark" />
      </div>

      <div className="flex flex-col items-center justify-center p-4">
        <img
          src={phaisPlusHorizontalLogo}
          alt="Logo Phais+"
          className="w-48 mb-10 md:w-64"
        />

        <img
          src={progressBar}
          alt="Barra de progresso da solicitação de cadastro"
          className="w-72 mb-8 md:w-80"
        />

        <div className="mb-4">
          <h1 className="text-neutral-200 text-xl font-medium text-center">
            Informações em Análise
          </h1>
          <p className="text-neutral-200 text-base text-center">
            Obrigada por realizar o cadastro!
          </p>
        </div>

        <p className="text-neutral-200 text-base text-center mb-1">
          Recebemos seus dados e em breve
          <br />
          enviaremos um e-mail de confirmação!
        </p>

        <p className="text-neutral-400 text-sm text-center">
          (A confirmação leva, em média, 1 dia útil)
        </p>
      </div>
    </main>
  );
}

export default Analise;
