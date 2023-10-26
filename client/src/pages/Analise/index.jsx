import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

import Logo from "/logo-horizontal-green.svg";
import Progress from "./../../assets/request-progress.svg";

function Analise() {
  return (
    <main className="w-screen h-screen relative flex flex-col items-center justify-center gap-2 bg-bg-main text-white-200">
      <Link
        to="/"
        className="absolute top-7 left-14 flex gap-2 cursor-pointer hover:text-[#c0c0c7]"
      >
        <ArrowUturnLeftIcon className="w-5 h-5" />
        <p>Voltar</p>
      </Link>
      <div className="absolute top-7 right-14 cursor-pointer ">
        <InformationCircleIcon className="w-7 h-7 text-green-main hover:text-green-dark" />
      </div>

      <div className="mb-6">
        <img src={Logo} alt="" />
      </div>

      <div className="mb-6 flex flex-col w-80 items-center gap-1">
        <img src={Progress} alt="" className="w-72 mb-1" />
        <h1 className="font-medium text-xl">Informações em Análise</h1>
        <p className="text-lg">Obrigada por realizar o cadastro!</p>

        <p className="text-center mt-3">
          Recebemos seus dados e em breve enviaremos um e-mail de confirmação!
        </p>
        <p className="text-sm">
          (A confirmação leva, em média,{" "}
          <span className="font-medium">1 dia útil</span>)
        </p>
      </div>
    </main>
  );
}

export default Analise;
