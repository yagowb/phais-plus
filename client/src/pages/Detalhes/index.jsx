import BaseLayout from "./../../components/BaseLayout";

import { detalhesMedicamentos } from "../../mocks/detalhesMedicamentos";
import { ContainerItem, InfoItem, PresentationItem } from "./DetailItem";
import { MedicationType } from "../../components/MedicationType";
import DetailSection from "./DetailSection";

function Detalhes() {
  return (
    <BaseLayout
      pageName="Detalhes do medicamento"
      backPath="/medicamentos"
      style="p-8"
    >
      <div className="w-full flex items-center gap-4">
        <div>
          <p className="text-2xl">
            {detalhesMedicamentos.cod + " - " + detalhesMedicamentos.nome}
          </p>
        </div>
        <MedicationType type="G" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-3">
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

          <DetailSection title="Apresentação">
            <PresentationItem data={detalhesMedicamentos.apresentacao} />
          </DetailSection>
        </div>

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
              <div className="text-sm flex items-center gap-2">
                <div className="bg-medication-other w-16 h-16 aspect-square rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-bold">C</span>
                </div>
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
