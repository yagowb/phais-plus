import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BaseLayout from "./../../components/BaseLayout";
import { Back } from "../../components/Back";
import { MedicationType } from "../../components/MedicationType";
import { getMedication } from "../../services/api/medication";

const Detalhes = () => {
  const { id } = useParams();
  const [medication, setMedication] = useState(null);

  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem("accessToken");

      const { data: medicationResponse } = await getMedication(id, accessToken);

      setMedication(medicationResponse.data);
    })();
  }, []);

  if (!medication) {
    return <></>;
  }

  return (
    <BaseLayout pageName="Detalhes do medicamento">
      <Back to="/medicamentos" position="right" />

      <div className="rounded-lg flex w-full flex-col bg-bg-main">
        <div className="w-full bg-bg-main flex items-center justify-start gap-8 mb-6">
          <p className="text-xl">
            <span className="text-green-light">
              {medication.id.substring(0, 8)}
            </span>{" "}
            - {medication.name}
          </p>
          <MedicationType
            type={(medication.medication_type?.name[0]).toUpperCase()}
          />
        </div>

        <div className="h-auto w-full flex gap-6 bg-bg-main">
          <div className="w-1/2 h-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">Princípios ativos</p>
              <p className="text-neutral-200">
                {medication.active_principle?.name}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">Grupos Farmacológicos</p>

              {medication.pharmacological_group ? (
                <ul className="text-neutral-200 list-disc pl-4">
                  {medication.pharmacological_group.map(({ name }, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              ) : (
                <p>Sem grupos farmacológicos.</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">
                Indicações terapeuticas
              </p>
              {medication.therapeutic_indication ? (
                <ul className="text-neutral-200 list-disc pl-4">
                  {medication.therapeutic_indication.map(({ name }, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              ) : (
                <p>Sem indicações terapeuticas.</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">Risco na gravidez</p>
              {medication.pregnancy_risk ? (
                <div className="flex items-center gap-4">
                  <div className="bg-medication-other w-16 h-16 aspect-square rounded-xl flex items-center justify-center">
                    <span className="text-4xl font-bold">
                      {medication.pregnancy_risk.letter}
                    </span>
                  </div>
                  <p className="text-neutral-200">
                    {medication.pregnancy_risk.name}
                  </p>
                </div>
              ) : (
                <p>Sem risco na gravidez.</p>
              )}
            </div>

            <div>
              <p className="text-neutral-400 text-sm">
                Aprovado pela Anvisa:{" "}
                <span className="text-neutral-200">
                  {medication.approvaction_date ?? "-"}
                </span>
              </p>
              <p className="text-neutral-400 text-sm">
                Receituário:{" "}
                <span className="text-neutral-200">
                  {medication.prescription ?? "-"}
                </span>
              </p>
            </div>
          </div>

          <div className="w-1/4 h-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">Laboratório</p>
              <ul className="bg-bg-layer rounded-lg divide-custom-divide px-4 py-1">
                <li className="text-neutral-200 py-2">
                  {medication.laboratory?.name ?? "-"}
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">Genéricos Equivalentes</p>
              <ul className="bg-bg-layer rounded-lg divide-y divide-custom-divide px-4 py-1">
                {medication.generic_equivalent_to.length ? (
                  medication.generic_equivalent_to.map(
                    ({ name, laboratory }, index) => (
                      <li key={index} className="flex flex-col py-2">
                        <span className="text-neutral-200">{name}</span>
                        <span className="text-neutral-400 text-sm font-thin">
                          {laboratory?.name ?? "-"}
                        </span>
                      </li>
                    )
                  )
                ) : (
                  <li className="flex flex-col py-2">
                    <span className="text-neutral-200">-</span>
                  </li>
                )}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-400 text-sm">Similares Equivalentes</p>
              <ul className="bg-bg-layer rounded-lg divide-y divide-custom-divide px-4 py-1">
                {medication.similar_equivalent_to.length ? (
                  medication.similar_equivalent_to.map(
                    ({ name, laboratory }, index) => (
                      <li key={index} className="flex flex-col py-2">
                        <span className="text-neutral-200">{name}</span>
                        <span className="text-neutral-400 text-sm font-thin">
                          {laboratory?.name ?? "-"}
                        </span>
                      </li>
                    )
                  )
                ) : (
                  <li className="flex flex-col py-2">
                    <span className="text-neutral-200">-</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* <div className="p-2 w-1/4 bg-bg-layer max-h-100 rounded-lg px-4 py-6">
            <p className="text-center text-xl font-semibold mb-4">
              APRESENTAÇÃO
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-neutral-200">Creme dematológico 1 MG/G</p>
                <ul className="text-neutral-400 list-disc pl-4">
                  <li>Caixa com 10 ou 20 g</li>
                  <li>Uso dermatológico.</li>
                  <li>Uso adulto e pediátrico acima de 2 anos.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-neutral-200">Dosagem</p>
                <ul className="text-neutral-400 list-disc pl-4">
                  <li>
                    Aplicar 1 camada fina sobre a área afetada, 1 vez ao dia
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-neutral-200">Creme dematológico 1 MG/G</p>
                <ul className="text-neutral-400 list-disc pl-4">
                  <li>Caixa com 10 ou 20 g</li>
                  <li>Uso dermatológico.</li>
                  <li>Uso adulto e pediátrico acima de 2 anos.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-neutral-200">Dosagem</p>
                <ul className="text-neutral-400 list-disc pl-4">
                  <li>
                    Aplicar 1 camada fina sobre a área afetada, 1 vez ao dia
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Detalhes;
