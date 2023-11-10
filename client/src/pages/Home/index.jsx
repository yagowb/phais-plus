import { Link } from "react-router-dom";
import Button from "../../components/Button";
import LogoLarge from "/logo-large.svg";

import { Server, Pill, User, LogOut } from "lucide-react";

function Home() {
  return (
    <main className="bg-bg-dark text-neutral-100 w-screen h-screen flex flex-col gap-40">
      <nav className="self-end flex gap-2 m-3 items-center">
        
        <p className="text-sm">Sair da Conta</p>
        <LogOut/>
      </nav>
      <div className="flex flex-col items-center flex-1 gap-3">
        <img className="mb-3" src={LogoLarge} alt="" />
        <p>
          Bem Vindo, <span className="underline underline-offset-2">USERNAME!</span>
        </p>
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-center bg-bg-main px-10 py-5 rounded-lg gap-4">
            <Server size={36} />
            <h1 className="text-xl">Solicitacoes</h1>
          </div>
          <div className="flex items-center justify-center bg-bg-main px-10 py-5 rounded-lg gap-4">
            <Pill size={36} />
            <h1 className="text-xl">Medicamentos</h1>
          </div>
          <div className="flex items-center justify-center bg-bg-main px-10 py-5 rounded-lg gap-4">
            <User size={36} />
            <h1 className="text-xl">Minha Conta</h1>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Button label="SOLICITAÇÃO" type="terciary">
            <Server size={20} />
          </Button>

          <Button label="MEDICAMENTOS" type="terciary">
            <Pill size={20} />
          </Button>
          <Button label="MINHA CONTA" type="terciary">
            <User size={20} />
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Home;
