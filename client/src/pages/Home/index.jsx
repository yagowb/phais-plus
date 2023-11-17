import { Link } from "react-router-dom";
import Button from "../../components/Button";
import LogoLarge from "/logo-large.svg";

import { Server, Pill, User, LogOut, Home as HomeIcon, X } from "lucide-react";
import { useState } from "react";

function Home() {
  const [modalAberturaIsActive, setModalAberturaIsActive] = useState(true);
  function closeModal() {
    setModalAberturaIsActive(false);
  }
  return (
    <main className="bg-bg-dark relative text-neutral-100 w-screen h-screen flex flex-col gap-40">
      {modalAberturaIsActive && (
        <div className="w-full h-full bg-black/30 absolute flex items-center justify-center">
          <div className="p-16 rounded-xl bg-bg-main flex flex-col">
            <button onClick={closeModal} className="self-end"><X/></button>
            <div className="flex flex-col items-center flex-1">
              <img className="" src={LogoLarge} alt="" />
              <p className="items-center">
                Bem-vindo(a) ao seu sistema gerenciador de medicamentos!
              </p>
              <button
                onClick={closeModal}
                className="flex items-center justify-center bg-green-main px-10 py-5 rounded-lg gap-4"
              >
                <HomeIcon size={20} />
                <h1 className="text-xl">Home</h1>
              </button>
            </div>
          </div>
        </div>
      )}
      <nav className="self-end flex gap-2 m-3 items-center">
        <p className="text-sm">Sair da Conta</p>
        <LogOut />
      </nav>
      <div className="flex flex-col items-center flex-1 gap-3">
        <img className="mb-3" src={LogoLarge} alt="" />
        <p>
          Bem Vindo,{" "}
          <span className="underline underline-offset-2">USERNAME!</span>
        </p>
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-center bg-bg-main px-10 py-5 rounded-lg gap-4">
            <Server size={36} />
            <h1 className="text-xl">SOLICITAÇÕES</h1>
          </div>
          <div className="flex items-center justify-center bg-bg-main px-10 py-5 rounded-lg gap-4">
            <Pill size={36} />
            <h1 className="text-xl">MEDICAMENTOS</h1>
          </div>
          <div className="flex items-center justify-center bg-bg-main px-10 py-5 rounded-lg gap-4">
            <User size={36} />
            <h1 className="text-xl">MINHA CONTA</h1>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
