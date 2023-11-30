import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Server, Pill, User, LogOut, Home as HomeIcon, X } from "lucide-react";

import phaisPlusVerticalLogo from "/logo-large.svg";
import phaisPlusHorizontalLogo from "/logo-horizontal-green.svg";
import Button from "../../components/Button";

function Home() {
  const navigate = useNavigate();
  const [modalAberturaIsActive, setModalAberturaIsActive] = useState(true);

  const closeModal = () => {
    setModalAberturaIsActive(false);
  };

  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <main className="bg-bg-dark relative w-screen h-screen p-5 flex flex-col items-center justify-center gap-40">
      {modalAberturaIsActive && (
        <>
          <div className="h-full w-full absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:h-auto md:w-auto">
            <div className="bg-bg-main h-full w-full p-10 flex flex-col items-center justify-center relative md:h-auto md:w-[40rem] md:rounded-xl">
              <X
                onClick={closeModal}
                className="text-neutral-200 h-8 w-8 aspect-square absolute top-4 right-4 transition-transform hover:cursor-pointer hover:scale-110"
              />
              <div className="flex flex-col items-center">
                <img
                  className="w-52 mb-2"
                  src={phaisPlusVerticalLogo}
                  alt="Logo Phais+"
                />

                <p className="text-neutral-100 text-xl font-medium text-center mb-6">
                  Bem-vindo(a) ao seu sistema
                  <br className="hidden sm:block" /> gerenciador de
                  medicamentos!
                </p>

                <Button color="primary" label="INICIAR" onClick={closeModal}>
                  <HomeIcon className="h-5 w-5 aspect-square" />
                </Button>
              </div>
            </div>
          </div>
          <div
            onClick={closeModal}
            className="bg-black/25 h-screen w-screen absolute top-0 left-0 z-10"
          />
        </>
      )}
      <div
        onClick={logOut}
        className="absolute top-8 right-8 z-0 flex items-center justify-center gap-2 hover:cursor-pointer hover:scale-105"
      >
        <p className="text-neutral-200 font-medium">Sair da Conta</p>
        <LogOut className="text-neutral-200" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={phaisPlusVerticalLogo}
          alt="Logo Phais+"
          className="w-52 mb-10 hidden md:block"
        />
        <img
          src={phaisPlusHorizontalLogo}
          alt="Logo Phais+"
          className="w-52 mb-9 md:hidden"
        />
        <p className="text-neutral-200 text-lg font-medium mb-5 md:mb-4">
          Bem-vindo,{" "}
          <span className="underline underline-offset-2">USERNAME!</span>
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <Link
            to="/solicitacoes"
            className="bg-bg-main p-4 rounded-xl aspect-square flex flex-col items-center justify-center gap-2 shadow-md transition-transform hover:scale-105"
          >
            <Server className="text-neutral-200" size={40} />
            <p className="text-neutral-200 font-medium text-xs text-center md:text-base">
              SOLICITAÇÕES
            </p>
          </Link>
          <Link
            to="/medicamentos"
            className="bg-bg-main p-4 rounded-xl aspect-square flex flex-col items-center justify-center gap-2 shadow-md transition-transform hover:scale-105"
          >
            <Pill className="text-neutral-200" size={40} />
            <p className="text-neutral-200 font-medium text-xs text-center md:text-base">
              MEDICAMENTOS
            </p>
          </Link>
          <Link
            to="/perfil"
            className="bg-bg-main p-4 rounded-xl aspect-square flex flex-col items-center justify-center gap-2 shadow-md transition-transform hover:scale-105"
          >
            <User className="text-neutral-200" size={40} />
            <p className="text-neutral-200 font-medium text-xs text-center md:text-base">
              MINHA CONTA
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
