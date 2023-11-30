import { Search } from "lucide-react";

import { detalhesSolicitacoes } from "../../mocks/detalhesSolicitacoes";
import BaseLayout from "./../../components/BaseLayout";
import { Back } from "../../components/Back";
import Urgency from "../../components/Urgency";

function SolicitacaoIndividual() {
  return (
    <BaseLayout pageName="Solicitação" backPath="/solicitacoes" style="p-8">
      <Back to="/solicitacoes" position="right" />

      <div className="w-full flex items-center gap-10 mb-3">
        <p className="text-neutral-200 text-xl">
          {detalhesSolicitacoes.cod + " - " + detalhesSolicitacoes.nome}
        </p>
        <Urgency urgency={"urgente"} />
      </div>
      <div className="flex gap-4 justify-between">
        <div className="w-4/5">
          <h1 className="text-neutral-200 text-lg mb-2">
            Detalhes da Solicitação
          </h1>

          <div className="flex flex-col gap-6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-neutral-400 text-sm">Quantidade</label>
                <p className="text-neutral-200 text-lg">
                  {detalhesSolicitacoes.quantidade}
                </p>
              </div>
              <div>
                <label className="text-neutral-400 text-sm">Medicamento</label>
                <p className="text-neutral-200 text-lg">
                  {detalhesSolicitacoes.medicamento}
                </p>
              </div>
            </div>

            <div>
              <label className="text-neutral-400 text-sm">Solicitante</label>
              <p className="text-neutral-200 text-lg">
                {detalhesSolicitacoes.solicitante}
              </p>
            </div>

            <div>
              <label className="text-neutral-400 text-sm">Descrição</label>
              <p className="text-neutral-200 text-lg">
                {detalhesSolicitacoes.descricao}
              </p>
            </div>

            <div>
              <label className="text-neutral-400 text-sm">Prazo</label>
              <p className="text-neutral-200 text-lg">
                {detalhesSolicitacoes.prazo}
              </p>
            </div>
          </div>

          <p className="text-base">
            Criado por <u className="border-b border-black">Beatriz Vidal</u> às{" "}
            {detalhesSolicitacoes.criadoData}
          </p>
        </div>
        <div className="w-1/5 flex flex-col gap-6">
          <div>
            <label className="text-neutral-400 text-sm">Status</label>
            <select className="text-neutral-200 max-w-xs shadow-md cursor-pointer bg-bg-layer w-full px-5 py-3 rounded">
              <option className="text-neutral-200 bg-bg-main" value="aberto">
                Aberto
              </option>
              <option className="text-neutral-200 bg-bg-main" value="fechado">
                Fechado
              </option>
            </select>
          </div>

          <div>
            <label className="text-neutral-400 text-sm">Data de Envio</label>
            <input
              type="date"
              className="text-neutral-200 shadow-md cursor-pointer bg-bg-layer w-full rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="text-neutral-400 text-sm">
              Data de Devolução
            </label>
            <input
              type="date"
              className="text-neutral-200 shadow-md cursor-pointer bg-bg-layer w-full rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="text-neutral-400 text-sm">Atendente</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Procurar atendente"
                className="shadow-md bg-bg-layer rounded ps-4 pe-10 py-2 w-full"
              />
              <Search className="h-4 w-4 aspect-square absolute right-3 top-3" />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default SolicitacaoIndividual;
