import BaseLayout from "../../components/BaseLayout";
import Search from "../../components/Input/Search";
import Table from "../../components/Table";
import Filter from "../../components/Filter";
import Button from "../../components/Button";

import { Plus } from "lucide-react";

function Solicitacoes() {
  let tableTitles = [
    "Código",
    "Hospital",
    "20",
    "Item",
    "Data",
    "Urgência",
    "Status",
  ];
  let tableValues = [
    [
      "/detalhes",
      "#123",
      "Unimed Sul",
      "20",
      "Simeticona 40mg",
      "09/06 16:34",
      "URGENTE",
      "Aberto"
    ],
    [
      "/detalhes",
      "#123",
      "Unimed Sul",
      "20",
      "Simeticona 40mg",
      "09/06 16:34",
      "URGENTE",
      "Aberto"
    ],
    [
      "/detalhes",
      "#123",
      "Unimed Sul",
      "20",
      "Simeticona 40mg",
      "09/06 16:34",
      "URGENTE",
      "Aberto"
    ],
    [
      "/detalhes",
      "#123",
      "Unimed Sul",
      "20",
      "Simeticona 40mg",
      "09/06 16:34",
      "URGENTE",
      "Aberto"
    ],
    [
      "/detalhes",
      "#123",
      "Unimed Sul",
      "20",
      "Simeticona 40mg",
      "09/06 16:34",
      "URGENTE",
      "Aberto"
    ],
  ];

  return (
    <BaseLayout pageName="Solicitações">
      <div className="flex w-full items-center justify-between">
        <div className="relative flex items-center w-10/12 md:w-fit gap-x-2">
          <Search />

          <Filter />
        </div>

        <Button redirect="/solicitacoes" type="button" color="primary" label="Criar Solicitação" size="sm">
          <Plus size={18}/>
        </Button>
      </div>

      <Table titles={tableTitles} values={tableValues} hasLinks />
    </BaseLayout>
  );
}

export default Solicitacoes;
