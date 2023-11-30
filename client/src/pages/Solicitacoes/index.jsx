import BaseLayout from "../../components/BaseLayout";
import Search from "../../components/Input/Search";
import Table from "../../components/Table";
import Filter from "../../components/Filter";
import Button from "../../components/Button";

import { Plus } from "lucide-react";
import { useState } from "react";

function Solicitacoes() {
  const [tipoSolicitacao, setTipoSolicitacao] = useState(0);
  const tipos = ["Todas as solicitações", "Minhas solicitações", "Histórico"];

  function setTipo(tipoIndex) {
    setTipoSolicitacao(tipoIndex);
  }

  let tableTitles = [
    ["Código", "Hospital", "Quantidade", "Item", "Data", "Urgência", "Status"],
    [
      "Código",
      "Quantidade",
      "Item",
      "Aberto em",
      "Receber em",
      "Atendente",
      "Status",
    ],
    [
      "Código",
      "Quantidade",
      "Item",
      "Aberto em",
      "Concluído em",
      "Solicitante",
      "Atendente",
    ],
  ];

  let tableValues = [
    [
      [
        "/detalhes",
        "#123",
        "Unimed Sul",
        "20",
        "Simeticona 40mg",
        "09/06 16:34",
        "URGENTE",
        "Aberto",
      ],
      [
        "/detalhes",
        "#123",
        "Unimed Sul",
        "20",
        "Simeticona 40mg",
        "09/06 16:34",
        "URGENTE",
        "Aberto",
      ],
      [
        "/detalhes",
        "#123",
        "Unimed Sul",
        "20",
        "Simeticona 40mg",
        "09/06 16:34",
        "URGENTE",
        "Aberto",
      ],
      [
        "/detalhes",
        "#123",
        "Unimed Sul",
        "20",
        "Simeticona 40mg",
        "09/06 16:34",
        "URGENTE",
        "Aberto",
      ],
      [
        "/detalhes",
        "#123",
        "Unimed Sul",
        "20",
        "Simeticona 40mg",
        "09/06 16:34",
        "URGENTE",
        "Aberto",
      ],
    ],
    [
      [
        "/detalhes",
        "#027",
        "20",
        "Simeticona 40mg",
        "09/06 16:34",
        "09/10",
        "São Carlos",
        "Aberto",
      ],
      [
        "/detalhes",
        "#024",
        "50",
        "Dipirona",
        "02/05 16:34",
        "02/09",
        "São Carlos",
        "Em negociação",
      ],
    ],
    [
      [
        "/detalhes",
        "#123",
        "20",
        "Simeticona 40mg",
        "09/06 16:34",
        "09/10 15:30",
        "Unimed Sul",
        "São Carlos",
      ],
    ],
  ];

  return (
    <BaseLayout pageName="Solicitações">
      <div className="flex w-full items-center justify-between gap-2 mb-4">
        <div className="flex items-center w-full md:w-fit gap-x-2">
          <Search placeholder="Pesquisar solicitações" />

          <Filter />
        </div>

        <div className="hidden sm:block">
          <Button label="Criar Solicitação" color="primary" size="sm">
            <Plus className="h-5 w-5 aspect-square" />
          </Button>
        </div>

        <div className="bg-green-main h-16 w-16 rounded-full flex items-center justify-center absolute bottom-8 right-6 z-50 transition-transform hover:scale-105 hover:cursor-pointer sm:hidden">
          <Plus className="h-8 w-8 aspect-square" />
        </div>
      </div>

      <div className="flex w-full text-neutral-300 mb-1 overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-neutral-700">
        {tipos.map((tipo, index) => {
          return (
            <ButtonTipoSolicitacao
              key={index}
              label={tipo}
              handleFunction={() => {
                setTipo(index);
              }}
              isActive={index === tipoSolicitacao}
            />
          );
        })}
        <div className="border-b-[2px] pb-0.5 flex-1 border-grays-disabled" />
      </div>

      <Table
        titles={tableTitles[tipoSolicitacao]}
        values={tableValues[tipoSolicitacao]}
        hasLinks
      />
    </BaseLayout>
  );
}

function ButtonTipoSolicitacao({ handleFunction, isActive, label }) {
  return (
    <button
      onClick={handleFunction}
      className={`border-b-[2px] pb-0.5 px-4 ${
        isActive ? "border-neutral-300" : "border-grays-disabled"
      }`}
    >
      {label}
    </button>
  );
}

export default Solicitacoes;
