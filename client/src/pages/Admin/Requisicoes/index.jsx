import { Filter, Clock } from "lucide-react";

import BaseLayout from "../../../components/Admin/BaseLayout";
import SearchInput from "../../../components/Admin/SearchInput";
import Table from "../../../components/Admin/Table";

export default function Admin() {
  let tableTitles = [
    "Código",
    "Hospital",
    "E-mail",
    "Telefone",
    "Solicitado em",
  ];
  let tableValues = [
    [
      "/detalhes",
      "#123",
      "São Carlos - Washington",
      "saocarlos_washington@saocarlos.com",
      "+558598384295",
      "09/06/2023",
    ],
    [
      "/detalhes",
      "#123",
      "São Carlos - Washington",
      "saocarlos_washington@saocarlos.com",
      "+558598384295",
      "09/06/2023",
    ],
    [
      "/detalhes",
      "#123",
      "São Carlos - Washington",
      "saocarlos_washington@saocarlos.com",
      "+558598384295",
      "09/06/2023",
    ],
    [
      "/detalhes",
      "#123",
      "São Carlos - Washington",
      "saocarlos_washington@saocarlos.com",
      "+558598384295",
      "09/06/2023",
    ],
    [
      "/detalhes",
      "#123",
      "São Carlos - Washington",
      "saocarlos_washington@saocarlos.com",
      "+558598384295",
      "09/06/2023",
    ],
  ];

  return (
    <BaseLayout title="Requisições - Novos Pedidos">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <SearchInput
              bg="layer"
              id="table_search"
              name="table-search"
              className="h-5 w-5 aspect-square"
            />
            <Filter strokeWidth={1.5} />
          </div>

          <button className="px-4 py-2 bg-bg-layer flex gap-2 items-center rounded-sm hover:bg-bg-layer-hover">
            <Clock className="h-4 w-4 aspect-square" />
            Histórico
          </button>
        </div>

        <div>
          <Table titles={tableTitles} values={tableValues} hasLinks />
        </div>
      </div>
    </BaseLayout>
  );
}
