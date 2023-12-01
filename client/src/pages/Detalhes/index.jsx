import { useParams } from "react-router-dom";
import BaseLayout from "./../../components/BaseLayout";

import { detalhesMedicamentos } from "../../mocks/detalhesMedicamentos";
import { ContainerItem, InfoItem, PresentationItem } from "./DetailItem";
import { MedicationType } from "../../components/MedicationType";
import DetailSection from "./DetailSection";
import { useEffect, useState } from "react";
import { getMedication } from "../../services/api/medication";

function Detalhes() {
  const { id } = useParams();
  const [medication, setMedication] = useState(null);

  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem("accessToken");
      const { data: medicationResponse } = await getMedication(accessToken, id);

      setMedication(medicationResponse.data);
    })();
  }, []);

  if (!medication) {
    return;
  }

  return (
    <BaseLayout
      pageName="Detalhes do medicamento"
      backPath="/medicamentos"
      style="p-8"
    >
      <div className="w-full flex items-center gap-4">
        <div>
          <p className="text-2xl">
            {medication.id.substring(0, 8) + " - " + medication.name}
          </p>
        </div>
        <MedicationType
          type={
            "name" in medication.medication_type &&
            medication.medication_type.name[0].toUpperCase()
          }
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-3">
          <DetailSection title="Informações Gerais">
            <InfoItem
              title="Princípios ativos"
              content={medication.active_principle?.name}
            />

            <InfoItem
              title="Grupos Farmacológicos"
              content={
                medication.pharmacological_group.length
                  ? medication.pharmacological_group.map(({ id, name }) => (
                      <p key={id}>{name}</p>
                    ))
                  : "Não possui grupo farmacológico."
              }
            />

            <InfoItem
              title="Indicações terapeuticas"
              content={
                medication.therapeuthic_indication.length
                  ? medication.therapeuthic_indication.map(({ id, name }) => (
                      <p key={id}>{name}</p>
                    ))
                  : "Não possui indicação terapeutica"
              }
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
                <li className="text-16px p-4">
                  {medication.laboratory?.name ?? "-"}
                </li>
              </ul>
            </section>

            <section className="space-y-1">
              <div className="text-neutral-main text-sm">Risco na gravidez</div>
              {medication.pregnancy_risk ? (
                <div className="text-sm flex items-center gap-2">
                  <div className="bg-medication-other w-16 h-16 aspect-square rounded-xl flex items-center justify-center">
                    <span className="text-4xl font-bold">
                      {medication.pregnancy_risk.letter}
                    </span>
                  </div>
                  <p>{medication.pregnancy_risk.name}</p>
                </div>
              ) : (
                <p>Não causa riscos à gravidez.</p>
              )}
            </section>

            <section className="text-sm">
              <h1 className="text-neutral-main">Aprovado pela anvisa:</h1>
              <p>{medication.approvation_date ?? "-"}</p>
            </section>

            <section className="text-sm">
              <h1 className="text-neutral-main">Receituário:</h1>
              <p>{medication.prescription?.name ?? "-"}</p>
            </section>
          </section>

          <ContainerItem
            title="Genéricos Equivalentes"
            data={medication.equivalent_generic}
          />

          <ContainerItem
            title="Similares Equivalentes"
            data={medication.equivalent_similar}
          />
        </div>
      </div>
    </BaseLayout>
  );
}

export default Detalhes;
