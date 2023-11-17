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
      "09/06/2023"
    ],
    [
      "/detalhes",
      "#123",
      "São Carlos - Washington",
      "saocarlos_washington@saocarlos.com",
      "+558598384295",
      "09/06/2023"
    ],
    [
      "/detalhes",
      "#123",
      "São Carlos - Washington",
      "saocarlos_washington@saocarlos.com",
      "+558598384295",
      "09/06/2023"
    ],
    [
      "/detalhes",
      "#123",
      "São Carlos - Washington",
      "saocarlos_washington@saocarlos.com",
      "+558598384295",
      "09/06/2023"
    ],
    [
      "/detalhes",
      "#123",
      "São Carlos - Washington",
      "saocarlos_washington@saocarlos.com",
      "+558598384295",
      "09/06/2023"
    ],
  ];

  return (
    <BaseLayout>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <SearchInput size={20} bg="layer" id="table_search" name="table-search" />
            <Filter strokeWidth={1.5} />
          </div>

          <button className="px-3 py-1 bg-bg-layer flex gap-2 items-center rounded-sm hover:bg-bg-layer-hover">
            <Clock size={17} />
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
