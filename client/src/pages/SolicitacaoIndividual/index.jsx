import { Search } from "lucide-react";

import { detalhesSolicitacoes } from "../../mocks/detalhesSolicitacoes";
import BaseLayout from "./../../components/BaseLayout";
import { Back } from "../../components/Back";
import Urgency from "../../components/Urgency";

import './index.css'

function SolicitacaoIndividual() {
  return (
    <BaseLayout pageName="Solicitação" backPath="/solicitacoes" style="p-8" alignment="flex flex-col items-center md:items-start">
      <Back to="/solicitacoes" position="right" />

      <div className="w-full flex items-center gap-10 mb-3">
        <p className="text-neutral-200 text-xl font-semibold">
          {detalhesSolicitacoes.cod + " - " + detalhesSolicitacoes.nome}
        </p>
        <Urgency urgency={"urgente"} />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:justify-between w-full">
        <div className="w-4/5">
          <h1 className="text-neutral-200 text-lg mb-2">
            Detalhes da Solicitação
          </h1>

          <div className="flex flex-col gap-4 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-neutral-400 text-sm">Quantidade</label>
                <p className="text-neutral-100 text-lg font-light">
                  {detalhesSolicitacoes.quantidade}
                </p>
              </div>
              <div>
                <label className="text-neutral-400 text-sm">Medicamento</label>
                <p className="text-neutral-100 text-lg font-light">
                  {detalhesSolicitacoes.medicamento}
                </p>
              </div>
            </div>

            <div>
              <label className="text-neutral-400 text-sm">Solicitante</label>
              <p className="text-neutral-100 text-lg font-light">
                {detalhesSolicitacoes.solicitante}
              </p>
            </div>

            <div>
              <label className="text-neutral-400 text-sm">Descrição</label>
              <p className="text-neutral-100 text-lg font-light">
                {detalhesSolicitacoes.descricao}
              </p>
            </div>

            <div>
              <label className="text-neutral-400 text-sm">Prazo</label>
              <p className="text-neutral-100 text-lg font-light">
                {detalhesSolicitacoes.prazo}
              </p>
            </div>
          </div>

          <p className="text-base">
            Criado por <u className="border-b border-black">Beatriz Vidal</u> às{" "}
            {detalhesSolicitacoes.criadoData}
          </p>
        </div>
        <div className="md:w-1/5 w-full flex flex-col gap-6 ">
          <div className="space-y-2">
            <label className="text-neutral-400 text-sm">Status</label>
            <select className="form-select border-none text-neutral-200 shadow-md cursor-pointer bg-bg-layer w-full px-5 py-3 rounded-lg focus:ring-bg-layer-hover">
              <option className="text-neutral-200 bg-bg-main" value="aberto">
                Aberto
              </option>
              <option className="text-neutral-200 bg-bg-main" value="fechado">
                Em negociação
              </option>
              <option className="text-neutral-200 bg-bg-main" value="fechado">
                Aguardando devolução
              </option>
              <option className="text-neutral-200 bg-bg-main" value="fechado">
                Concluído
              </option>
            </select>
          </div>


          <div className="space-y-2">
            <label className="text-neutral-400 text-sm">Data de Envio</label>
            <input
              type="date"
              className="text-neutral-200 shadow-md cursor-pointer bg-bg-layer w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-bg-layer-hover"
            />
          </div>

          <div className="space-y-2">
            <label className="text-neutral-400 text-sm">
              Data de Devolução
            </label>
            <input
              type="date"
              className="text-neutral-200 shadow-md cursor-pointer bg-bg-layer w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-bg-layer-hover"
            />
          </div>

          <div className="space-y-2">
            <label className="text-neutral-400 text-sm">Atendente</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Procurar atendente"
                className="shadow-md bg-bg-layer rounded-lg ps-4 pe-10 py-2 w-full focus:outline-none focus:ring-1 focus:ring-bg-layer-hover"
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
