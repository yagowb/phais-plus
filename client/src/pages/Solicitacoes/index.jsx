import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Plus, X, Search as IconSearch } from "lucide-react";

import BaseLayout from "../../components/BaseLayout";
import Search from "../../components/Input/Search";
import Table from "../../components/Table";
import Filter from "../../components/Filter";
import Button from "../../components/Button";
import { ModalAbrirSolicitacao } from "./ModalAbrirSolicitacao";
import { ButtonTipoSolicitacao } from "./ButtonTipoSolicitacao";
import { getRequests } from "../../services/api/request";

import "./index.css";

Modal.setAppElement("#root");

function Solicitacoes() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [requests, setRequests] = useState(null);
  const [tipoSolicitacao, setTipoSolicitacao] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function setTipo(tipoIndex) {
    setTipoSolicitacao(tipoIndex);
  }

  const tipos = [
    "Todas as solicitações",
    // "Minhas solicitações",
    // "Histórico"
  ];

  const titles = [
    ["Código", "Hospital", "Quantidade", "Item", "Data", "Urgência", "Status"],
    // [
    //   "Código",
    //   "Quantidade",
    //   "Item",
    //   "Aberto em",
    //   "Receber em",
    //   "Atendente",
    //   "Status",
    // ],
    // [
    //   "Código",
    //   "Quantidade",
    //   "Item",
    //   "Aberto em",
    //   "Concluído em",
    //   "Solicitante",
    //   "Atendente",
    // ],
  ];

  // const tableValues = [
  //   [
  //     [
  //       "/solicitacao-individual",
  //       "#123",
  //       "Unimed Sul",
  //       "20",
  //       "Simeticona 40mg",
  //       "09/06 16:34",
  //       "URGENTE",
  //       "Aberto",
  //     ],
  //     [
  //       "/solicitacao-individual",
  //       "#123",
  //       "Unimed Sul",
  //       "20",
  //       "Simeticona 40mg",
  //       "09/06 16:34",
  //       "URGENTE",
  //       "Aberto",
  //     ],
  //     [
  //       "/solicitacao-individual",
  //       "#123",
  //       "Unimed Sul",
  //       "20",
  //       "Simeticona 40mg",
  //       "09/06 16:34",
  //       "URGENTE",
  //       "Aberto",
  //     ],
  //     [
  //       "/solicitacao-individual",
  //       "#123",
  //       "Unimed Sul",
  //       "20",
  //       "Simeticona 40mg",
  //       "09/06 16:34",
  //       "URGENTE",
  //       "Aberto",
  //     ],
  //     [
  //       "/solicitacao-individual",
  //       "#123",
  //       "Unimed Sul",
  //       "20",
  //       "Simeticona 40mg",
  //       "09/06 16:34",
  //       "URGENTE",
  //       "Aberto",
  //     ],
  //   ],
  // [
  //   [
  //     "/solicitacao-individual",
  //     "#027",
  //     "20",
  //     "Simeticona 40mg",
  //     "09/06 16:34",
  //     "09/10",
  //     "São Carlos",
  //     "Aberto",
  //   ],
  //   [
  //     "/solicitacao-individual",
  //     "#024",
  //     "50",
  //     "Dipirona",
  //     "02/05 16:34",
  //     "02/09",
  //     "São Carlos",
  //     "Em negociação",
  //   ],
  // ],
  // [
  //   [
  //     "/solicitacao-individual",
  //     "#123",
  //     "20",
  //     "Simeticona 40mg",
  //     "09/06 16:34",
  //     "09/10 15:30",
  //     "Unimed Sul",
  //     "São Carlos",
  //   ],
  // ],
  // ];

  const addRequest = ({
    id,
    hospital,
    quantity,
    medication,
    due_date,
    priority,
    status,
  }) => {
    setRequests((previous) => [
      [
        ...previous[0],
        [
          `/solicitacoes/${id}`,
          id.substring(0, 8),
          hospital.username,
          quantity,
          medication.name,
          new Date(due_date).toLocaleDateString("pt-BR", { timeZone: "utc" }),
          priority.name,
          status.name,
        ],
      ],
    ]);
  };

  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem("accessToken");

      const { data: requestsResponse } = await getRequests(accessToken);

      const allRequests = requestsResponse.data.map(
        ({
          id,
          hospital,
          quantity,
          medication,
          due_date,
          priority,
          status,
        }) => [
          `/solicitacoes/${id}`,
          id.substring(0, 8),
          hospital.username,
          quantity,
          medication.name,
          new Date(due_date).toLocaleDateString("pt-BR", { timeZone: "utc" }),
          priority.name,
          status.name,
        ]
      );

      setRequests([allRequests]);
    })();
  }, []);

  return (
    <BaseLayout pageName="Solicitações">
      <div className="flex w-full items-center justify-between gap-2 mb-4">
        <div className="flex items-center w-full md:w-fit gap-x-2">
          <Search placeholder="Pesquisar solicitações" />

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

        <ModalAbrirSolicitacao
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          addRequest={addRequest}
        />
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

      {requests && (
        <Table
          titles={titles[tipoSolicitacao]}
          values={requests[tipoSolicitacao]}
          hasLinks
        />
      )}
    </BaseLayout>
  );
}

export default Solicitacoes;
