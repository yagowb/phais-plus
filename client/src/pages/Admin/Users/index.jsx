import { useEffect, useState } from "react";
import { Filter, Clock } from "lucide-react";

import BaseLayout from "../../../components/Admin/BaseLayout";
import SearchInput from "../../../components/Admin/SearchInput";
import Table from "../../../components/Admin/Table";
import { getUsers } from "../../../services/api/user";

export default function Users() {
  const [users, setUsers] = useState(null);

  const titles = ["Hospital", "CNPJ", "E-mail", "Telefone", "Cadastro"];

  useEffect(() => {
    (async () => {
      const { data: usersResponse } = await getUsers();

      setUsers(
        usersResponse.data.map(
          ({ username, cnpj, email, phone, created_at }) => [
            username,
            cnpj,
            email,
            phone,
            new Date(created_at).toLocaleString("pt-BR"),
          ]
        )
      );
    })();
  }, []);

  return (
    <BaseLayout title="Usuários">
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
        </div>

        <div>{users && <Table titles={titles} values={users} />}</div>
      </div>
    </BaseLayout>
  );
}
