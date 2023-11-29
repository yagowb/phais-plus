import { Link } from "react-router-dom";
import BaseLayout from "../../components/BaseLayout";
import { ProfileDiv } from "../../components/ProfileDiv";
import { ProfileInput } from "../../components/ProfileInput";
import { MapPin, Phone, Mail } from "lucide-react";

function Perfil() {
  return (
    <BaseLayout pageName="Perfil" backPath="/perfil" style="p-8">
      <div className="flex flex-col gap-3">
        <ProfileDiv title="Informações Gerais">
          <div className="flex flex-row px-8 gap-12">
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
          <div className="flex flex-row px-8 gap-12">
            <ProfileInput content="+55 (85) 91001-4565" icon={<Phone />} />

            <ProfileInput content="michelleavinash@robertocarlos.com.br" icon={<Mail />} />

            <ProfileInput content="Av. Benjamim Brasil, 1232" icon={<MapPin />} />
          </div>
        </ProfileDiv>

        <ProfileDiv title="Informações da Empresa">
          <div className="flex flex-row px-8 gap-12">
            <ProfileInput label="Empresa / Hospital" content="Roberto Carlos" />

            <ProfileInput label="Cargo / Função" content="Farmacêutica" />

            <ProfileInput
              label="Data de Admissão"
              content="20/09/2019"
            />

          </div>
        </ProfileDiv>

        <ProfileDiv title="Informações do Sistema">
          <div className="flex flex-row px-8 gap-12">
            <ProfileInput label="Cadastrado no Sistema em" content="18/01/2024  10:45" />

            <ProfileInput label="Último Login em" content="25/01/2024" />

          </div>
        </ProfileDiv>
      </div>
    </BaseLayout>
  );
}

export default Perfil;
