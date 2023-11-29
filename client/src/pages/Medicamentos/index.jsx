import BaseLayout from "./../../components/BaseLayout";
import Search from "./../../components/Input/Search";
import Table from "./../../components/Table";
import Filter from "../../components/Filter";

function Medicamentos() {
  let tableTitles = [
    "Código",
    "Medicamento",
    "Princípio Ativo",
    "Receituário",
    "Tipo",
    "Laboratório",
  ];
  let tableValues = [
    [
      "/detalhes",
      "#123",
      "Topison",
      "Furoato de mometasona",
      "Receita Comum",
      "R",
      "LIBBS",
    ],
    [
      "/detalhes",
      "#123",
      "Topison",
      "Furoato de mometasona",
      "Receita Comum",
      "R",
      "LIBBS",
    ],
    [
      "/detalhes",
      "#123",
      "Topison",
      "Furoato de mometasona",
      "Receita Comum",
      "R",
      "LIBBS",
    ],
    [
      "/detalhes",
      "#123",
      "Topison",
      "Furoato de mometasona",
      "Receita Comum",
      "R",
      "LIBBS",
    ],
    [
      "/detalhes",
      "#123",
      "Topison",
      "Furoato de mometasona",
      "Receita Comum",
      "R",
      "LIBBS",
    ],
  ];

  return (
    <BaseLayout pageName="Todos os Medicamentos">
      <div className="relative w-full flex justify-start items-center gap-2">
        <Search placeholder="Pesquisar medicamentos" />

        <Filter />
      </div>

      <Table titles={tableTitles} values={tableValues} hasLinks />
    </BaseLayout>
  );
}

export default Medicamentos;
