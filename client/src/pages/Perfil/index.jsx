import { Link } from "react-router-dom";
import BaseLayout from "../../components/BaseLayout";
import { ProfileDiv } from "../../components/ProfileDiv";
import { ProfileInput } from "../../components/ProfileInput";
import { MapPin, Phone, Mail } from "lucide-react";

function Perfil() {
  return (
    <BaseLayout pageName="Minha Conta" backPath="/perfil" style="p-8">
      <div className="flex justify-between w-full gap-16">
        <div className="flex flex-col gap-6 text-lg h-full w-52 pl-4 border-r-2 border-grays-disabled">
          <span>Geral</span>
          <span>Contato</span>
          <span>Empresa</span>
          <span>Sistema</span>
          <span>Sair da conta</span>
        </div>
        
        <div className="flex flex-col gap-3 w-full">
          <ProfileDiv title="Informações Gerais">
            <div className="flex gap-12">
              <ProfileInput label="Matrícula" content="04789" />

              <ProfileInput label="CPF" content="077.945.327-01" />

              <ProfileInput
                label="Nome Completo"
                content="Michelle Avinash Mutreja"
              />

              <ProfileInput label="Data de Nascimento" content="27/08/1994" />
            </div>
          </ProfileDiv>

          <ProfileDiv title="Informações de Contato">
            <div className="flex gap-12 flex-wrap">
              <ProfileInput
                content="+55 (85) 91001-4565"
                icon={<Phone size={18} />}
              />

              <ProfileInput
                content="michelleavinash@robertocarlos.com.br"
                icon={<Mail size={18} />}
              />

              <ProfileInput
                content="Av. Benjamim Brasil, 1232"
                icon={<MapPin size={18} />}
              />
            </div>
          </ProfileDiv>

          <ProfileDiv title="Informações da Empresa">
            <div className="flex gap-12">
              <ProfileInput
                label="Empresa / Hospital"
                content="Roberto Carlos"
              />

              <ProfileInput label="Cargo / Função" content="Farmacêutica" />

              <ProfileInput label="Data de Admissão" content="20/09/2019" />
            </div>
          </ProfileDiv>

          <ProfileDiv title="Informações do Sistema">
            <div className="flex gap-12">
              <ProfileInput
                label="Cadastrado no Sistema em"
                content="18/01/2024  10:45"
              />

              <ProfileInput label="Último Login em" content="25/01/2024" />
            </div>
            <div>
              <ProfileInput
                label="Observações"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus felis quam, eget auctor sem mollis"
              />
            </div>
          </ProfileDiv>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Perfil;
