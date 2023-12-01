import { Link } from "react-router-dom";
import BaseLayout from "../../components/BaseLayout";
import { ProfileDiv } from "../../components/ProfileDiv";
import { ProfileInput } from "../../components/ProfileInput";
import { MapPin, Phone, Mail } from "lucide-react";

function Perfil() {
  const user = JSON.parse(localStorage.getItem("user"));

  const options = { year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"};
  const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", options);

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
              {/* <ProfileInput label="Matrícula" content="04789" /> */}

              <ProfileInput label="CNPJ" content={user.cnpj} />

              <ProfileInput
                label="Nome de Usuário"
                content={user.username}
              />
              
              <ProfileInput
                label="Identificação"
                content={user.id}
              />

              {/* <ProfileInput label="Data de Nascimento" content="27/08/1994" /> */}
            </div>
          </ProfileDiv>

          <ProfileDiv title="Informações de Contato">
            <div className="flex gap-x-12 gap-y-2 flex-wrap">
              <ProfileInput
                content={user.phone}
                icon={<Phone size={18} />}
              />

              <ProfileInput
                content={user.email}
                icon={<Mail size={18} />}
              />

              <ProfileInput
                content={user.address || '-'}
                icon={<MapPin size={18} />}
              />
            </div>
          </ProfileDiv>

          {/* <ProfileDiv title="Informações da Empresa">
            <div className="flex gap-12">
              <ProfileInput
                label="Empresa / Hospital"
                content="Roberto Carlos"
              />

              <ProfileInput label="Cargo / Função" content="Farmacêutica" />

              <ProfileInput label="Data de Admissão" content="20/09/2019" />
            </div>
          </ProfileDiv> */}

          <ProfileDiv title="Informações do Sistema">
            <div className="flex gap-12">
              <ProfileInput
                label="Cadastrado no Sistema em"
                content={dateTimeFormat.format(new Date(user.created_at))}
              />

              <ProfileInput label="Último Modificação em" content={dateTimeFormat.format(new Date(user.updated_at))} />
            </div>
            <div>
              <ProfileInput
                label="Observações"
                content={user.obs || '-'}
              />
            </div>
          </ProfileDiv>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Perfil;
