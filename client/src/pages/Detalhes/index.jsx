import { useState } from "react";
import Modal from "react-modal";

import BaseLayout from "./../../components/BaseLayout";
import Button from "./../../components/Button";

import riscoImg from "/risco.svg";
import receitaTipo from "/receita-tipo.svg";

import { detalhesMedicamentos } from "../../mocks/detalhesMedicamentos";
import { ContainerItem, InfoItem, PresentationItem } from "./DetailItem";
import DetailSection from "./DetailSection";

import { X, Search as IconSearch, Plus } from "lucide-react";

import "./index.css";

Modal.setAppElement("#root");

function Input({ label, placeholder, type, width, full }) {
  return (
    <div className={`space-y-1 flex flex-col ${full && 'flex-1'}`}>
      <label className="font-semibold">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        className={`bg-bg-layer border-none rounded-lg w-${width} py-2 ps-4 md:pe-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-dark`}
      />
    </div>
  );
}

function Search() {
  return (
    <div className="relative w-full">
      <input
        className="bg-bg-layer border-none rounded-lg w-full py-2 ps-4 md:pe-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-dark"
        type="text"
        placeholder="Pesquisar..."
      />

      <IconSearch
        strokeWidth={1}
        className="absolute inset-y-2 end-3 text-gray-400"
      />
    </div>
  );
}

function Detalhes() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <BaseLayout
      pageName="Detalhes do medicamento"
      backPath="/medicamentos"
      style="p-8"
    >
      {/* Titulo */}
      <div className="w-full flex items-center gap-4">
        <button onClick={openModal}>
          <p className="text-2xl">
            {detalhesMedicamentos.cod + " - " + detalhesMedicamentos.nome}
          </p>
        </button>
        <img src={receitaTipo} alt="Sua Imagem" className="w-8 h-8" />

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="absolute top-10 bottom-10 left-10 right-10 flex items-center justify-center"
          overlayClassName="overlay"
          contentLabel="Example Modal"
        >
          <div className="bg-bg-main p-6 rounded text-gray-200 space-y-6 w-[400px]">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-2xl">Abrir Solicitacao</h1>
              <button onClick={closeModal}>
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between gap-2">
                <div className="space-y-1 flex-1">
                  <label className="font-semibold">Medicamento</label>
                  <Search />
                </div>
                <Input label="Quantidade" type="number" placeholder={0} width={32} />
              </div>

              <div className="flex justify-between gap-2">
                <Input label="Data Limite" type="date" placeholder={0} width="1/2" full={true} />
                <Input label="Data de Devolução" type="date" placeholder={0} width="1/2" full={true} />
              </div>
              <div className="">
                <Input label="Descrição" type="tex" placeholder="Informações importantes para a solicitação" width="full" full={true} />
              </div>
            </div>

            <div className="flex justify-center my-8">
              <Button label="Criar Solicitação" color="primary" type="submit">
                <Plus />
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <button className="text-others-red">Cancelar</button>
              <button>Limpar Campos</button>
            </div>
          </div>
        </Modal>
      </div>

      <div className="flex flex-col gap-3">
        {/* Linha superior */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-3">
          {/* Coluna esquerda - Informações Gerais */}
          <DetailSection title="Informações Gerais">
            <InfoItem
              title="Princípios ativos"
              content={detalhesMedicamentos.principioAtivo}
            />

            <InfoItem
              title="Grupos Farmacológicos"
              content={detalhesMedicamentos.gruposFarm}
            />

            <InfoItem
              title="Indicações terapeuticas"
              content={detalhesMedicamentos.indicTerap}
            />
          </DetailSection>

          {/* Coluna direita - Apresentação */}
          <DetailSection title="Apresentação">
            <PresentationItem data={detalhesMedicamentos.apresentacao} />
          </DetailSection>
        </div>

        {/* Linha inferior - Observações */}
        <h1 className="text-xl font-semibold mt-4">Observações</h1>
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-10">
          <section className="space-y-4 flex-1">
            <section className="space-y-1">
              <div className="text-sm text-neutral-main">Laboratório</div>
              <ul className="bg-bg-layer rounded-lg divide-y divide-custom-divide">
                {detalhesMedicamentos.lab.map((item, index) => (
                  <li key={index} className="text-16px p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-1">
              <div className="text-neutral-main text-sm">Risco na gravidez</div>
              <div className="text-sm">
                <img
                  src={riscoImg}
                  alt="Imagem de risco"
                  className="w-14 h-14 float-left mr-2" // Defina o tamanho desejado usando classes Tailwind CSS
                />
                <p>{detalhesMedicamentos.risco}</p>
              </div>
            </section>

            <section className="text-sm">
              <h1 className="text-neutral-main">Aprovado pela anvisa:</h1>
              <p>{detalhesMedicamentos.dataAnvisa}</p>
            </section>

            <section className="text-sm">
              <h1 className="text-neutral-main">Receituário:</h1>
              <p>{detalhesMedicamentos.receita}</p>
            </section>
          </section>

          <ContainerItem
            title="Genéricos Equivalentes"
            data={detalhesMedicamentos.genericos}
          />

          <ContainerItem
            title="Similares Equivalentes"
            data={detalhesMedicamentos.similares}
          />
        </div>
      </div>
    </BaseLayout>
  );
}

export default Detalhes;
