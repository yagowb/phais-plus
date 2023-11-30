import { useState } from "react";
import Modal from "react-modal";
import { Plus, X, Search as IconSearch } from "lucide-react";

import BaseLayout from "../../components/BaseLayout";
import Search from "../../components/Input/Search";
import Table from "../../components/Table";
import Filter from "../../components/Filter";
import Button from "../../components/Button";
import { ModalAbrirSolicitacao } from "./ModalAbrirSolicitacao";
import { ButtonTipoSolicitacao } from "./ButtonTipoSolicitacao";

import "./index.css";

Modal.setAppElement("#root");

function Solicitacoes() {
  const [tipoSolicitacao, setTipoSolicitacao] = useState(0);
  const tipos = ["Todas as solicitações", "Minhas solicitações", "Histórico"];
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      <div className="flex w-full items-center justify-between mb-4">
        <div className="relative flex items-center w-10/12 md:w-fit gap-x-2">
          <Search />

          <Filter />
        </div>

        <Button
          redirect="/solicitacoes"
          type="button"
          color="primary"
          label="Criar Solicitação"
          size="sm"
          onClick={openModal}
        >
          <Plus size={18} />
        </Button>

        <ModalAbrirSolicitacao modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </div>

      <div className="flex w-full text-neutral-300 mb-1">
        {tipos.map((tipo, index) => {
          console.log(index);
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
        <div className="border-b-[2px] pb-0.5 flex-1 border-grays-disabled"></div>
      </div>

      <Table titles={tableTitles[tipoSolicitacao]} values={tableValues[tipoSolicitacao]} hasLinks />
    </BaseLayout>
  );
}




export default Solicitacoes;
