import { useEffect, useState } from "react";

import BaseLayout from "./../../components/BaseLayout";
import Search from "./../../components/Input/Search";
import Table from "./../../components/Table";
import Filter from "../../components/Filter";
import { MedicationType } from "../../components/MedicationType";
import { getMedications } from "../../services/api/medication";

function Medicamentos() {
  const [medications, setMedications] = useState([]);

  const titles = [
    "Código",
    "Medicamento",
    "Princípio Ativo",
    "Receituário",
    "Tipo",
    "Laboratório",
  ];

  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem("accessToken");

      const { data: medicationsResponse } = await getMedications(accessToken);

      const foundMedications = medicationsResponse.data.map(
        (
          {
            id,
            name,
            active_principle,
            prescription,
            medication_type,
            laboratory,
          },
          index
        ) => [
          `/medicamentos/${id}`,
          id.substring(0, 8),
          name,
          active_principle?.name,
          prescription?.name,
          "name" in medication_type && (
            <MedicationType type={(medication_type?.name[0]).toUpperCase()} />
          ),
          laboratory?.name,
        ]
      );

      setMedications(foundMedications);
    })();
  }, []);

  return (
    <BaseLayout pageName="Todos os Medicamentos">
      <div className="relative w-full flex justify-start items-center gap-2">
        <Search placeholder="Pesquisar medicamentos" />

        <Filter />
      </div>

      <Table titles={titles} values={medications} hasLinks />
    </BaseLayout>
  );
}

export default Medicamentos;
