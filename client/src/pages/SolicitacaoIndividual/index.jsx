import { detalhesSolicitacoes } from "../../mocks/detalhesSolicitacoes";
import BaseLayout from "./../../components/BaseLayout";
import Urgency from "../../components/Urgency";



function SolicitacaoIndividual() {
  return (
    <BaseLayout pageName="Solicitação" backPath="/solicitacoes" style="p-8">
      <div className="w-full flex items-center gap-4">
        <p className="text-2xl mr-8">{detalhesSolicitacoes.cod + " - " + detalhesSolicitacoes.nome}</p>
        <Urgency urgency={'urgente'} />
      </div>
      <div className="flex justify-between">

        <div className="w-4/5">

          <div className="mt-4">
            <p className="text-lg">Detalhes da Solicitação</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <p className="text-neutral-main text-sm">Quantidade</p>
              <p className="text-lg">{detalhesSolicitacoes.quantidade}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-neutral-main text-sm">Medicamento</p>
              <p className="text-lg">{detalhesSolicitacoes.medicamento}</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-neutral-main text-sm">Solicitante</p>
            <p className="text-lg">{detalhesSolicitacoes.solicitante}</p>
          </div>

          <div className="mt-4">
            <p className="text-neutral-main text-sm">Descrição</p>
            <p className="text-lg">{detalhesSolicitacoes.descricao}</p>
          </div>

          <div className="mt-4">
            <p className="text-neutral-main text-sm">Prazo</p>
            <p className="text-lg">{detalhesSolicitacoes.prazo}</p>
          </div>

          <div className="mt-4">
            <p className="text-base">
              Criado por{' '}
              <u className="border-b border-black">Beatriz Vidal</u>
              {' '}às {detalhesSolicitacoes.criadoData}
            </p>


          </div>



        </div>
        <div className="w-2/5 ml-20 mr-20">
          {/* Novo conteúdo, agora posicionado à direita */}
          <div className="text-neutral-main text-sm">Status</div>
          {/* ... (conteúdo relacionado ao status) ... */}
          <select className="shadow-md inputLabel cursor-pointer mt-2 bg-bg-layer w-full px-4 py-2 rounded">
            <option className="bg-bg-main text-grays-disabled" value="aberto">Aberto</option>
            <option className="bg-bg-main text-grays-disabled" value="fechado">Fechado</option>
          </select>

          <div className="text-neutral-main text-sm mt-6">Data de Envio</div>
          <input
            type="date"
            className="shadow-md inputLabel cursor-pointer mt-2 bg-bg-layer w-full mt-2 rounded px-4 py-2"
          />
          <div className="text-neutral-main text-sm mt-6">Data de Devolução</div>
          <input
            type="date"
            className="shadow-md inputLabel cursor-pointer mt-2 bg-bg-layer w-full mt-2 rounded px-4 py-2"
          />

          <div className="text-neutral-main text-sm mt-6 mb-2">Atendente</div>
          <div className="relative">
            <input
              type="text"
              placeholder="Procurar atendente"
              className="shadow-md bg-bg-layer rounded px-4 py-2 w-full"
            />
            <svg
              className="absolute bg-bg-layer top-3 right-3 h-4 w-4 fill-current text-gray-400"
              viewBox="0 0 24 24"
            >
              {/* Ícone de busca */}
              <path
                d="M10 2a8 8 0 0 1 6.32 13.06l5.61 5.63a1 1 0 0 1-1.42 1.41l-5.61-5.63A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
              />
            </svg>
          </div>

        </div>
      </div>
    </BaseLayout>
  );
}

export default SolicitacaoIndividual;
