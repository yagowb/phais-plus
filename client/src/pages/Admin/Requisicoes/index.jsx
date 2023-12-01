import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Filter,
  Clock,
  CheckCircle,
  XCircle,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

import BaseLayout from "../../../components/Admin/BaseLayout";
import SearchInput from "../../../components/Admin/SearchInput";
import Table from "../../../components/Admin/Table";
import Button from "../../../components/Button";
import {
  approveRegister,
  disapproveRegister,
  getRegisters,
} from "../../../services/api/register";

export default function Admin() {
  const titles = [
    "Código",
    "Hospital",
    "E-mail",
    "Telefone",
    "Solicitado em",
    "",
  ];

  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [isDisapproveModalOpen, setIsDisapproveModalOpen] = useState(false);
  const [currentRegister, setCurrentRegister] = useState(null);
  const [registers, setRegisters] = useState(null);

  const toggleApproveModal = () => {
    setIsApproveModalOpen((previous) => !previous);
  };

  const toggleDisapproveModal = () => {
    setIsDisapproveModalOpen((previous) => !previous);
  };

  const renderApproveButton = (register) => {
    return (
      <CheckCircle
        onClick={() => {
          setCurrentRegister(register);
          toggleApproveModal();
        }}
        className="text-neutral-200 transition-transform hover:cursor-pointer hover:scale-110"
      />
    );
  };

  const renderDisapproveButton = (register) => {
    return (
      <XCircle
        onClick={() => {
          setCurrentRegister(register);
          toggleDisapproveModal();
        }}
        className="text-neutral-200 transition-transform hover:cursor-pointer hover:scale-110"
      />
    );
  };

  const approveCurrentRegister = async () => {
    if (!currentRegister) {
      throw new Error("No register selected.");
    }

    await approveRegister(currentRegister.id);

    setRegisters(
      registers.filter(
        (register) => !register.includes(currentRegister.id.substring(0, 8))
      )
    );
    toggleApproveModal();
    toast.success("Solicitação aprovada com sucesso!");
  };

  const disapproveCurrentRegister = async () => {
    if (!currentRegister) {
      throw new Error("No register selected.");
    }

    await disapproveRegister(currentRegister.id, "Informações inválidas.");

    setRegisters(
      registers.filter(
        (register) => !register.includes(currentRegister.id.substring(0, 8))
      )
    );
    toggleDisapproveModal();
    toast.success("Solicitação reprovada com sucesso!");
  };

  useEffect(() => {
    (async () => {
      const { data: registersResponse } = await getRegisters();

      setRegisters(
        registersResponse.data
          .filter(({ approved, disapproved }) => !approved && !disapproved)
          .map((register) => {
            return [
              register.id.substring(0, 8),
              register.username,
              register.email,
              register.phone,
              new Date(register.created_at).toLocaleDateString("pt-BR", {
                timeZone: "utc",
              }),
              <div className="flex gap-4">
                {renderApproveButton(register)}
                {renderDisapproveButton(register)}
              </div>,
            ];
          })
      );
    })();
  }, []);

  return (
    <BaseLayout title="Requisições - Novos Pedidos">
      {currentRegister && isApproveModalOpen && (
        <>
          <div className="h-full w-full absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:h-auto md:w-auto">
            <div className="bg-bg-main h-full w-full p-10 flex flex-col items-center justify-center relative md:h-auto md:w-[32rem] md:rounded-xl">
              <X
                className="text-neutral-200 h-8 w-8 aspect-square absolute top-4 right-4 transition-transform hover:cursor-pointer hover:scale-110"
                onClick={toggleApproveModal}
              />
              <div className="flex flex-col items-center">
                <AlertTriangle className="h-16 w-16 aspect-square mb-2" />
                <p className="text-neutral-100 text-xl font-medium text-center mb-4">
                  Você tem certeza que deseja{" "}
                  <span className="text-urgencyColor-green">aprovar</span> a
                  solicitação do hospital {currentRegister.username}?
                </p>

                <div className="w-full flex gap-2">
                  <Button
                    color="info"
                    label="CANCELAR"
                    full
                    onClick={toggleApproveModal}
                  />
                  <Button
                    color="success"
                    label="CONFIRMAR"
                    full
                    onClick={approveCurrentRegister}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-black/25 h-screen w-screen absolute top-0 left-0 z-10"
            onClick={toggleApproveModal}
          />
        </>
      )}
      {currentRegister && isDisapproveModalOpen && (
        <>
          <div className="h-full w-full absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:h-auto md:w-auto">
            <div className="bg-bg-main h-full w-full p-10 flex flex-col items-center justify-center relative md:h-auto md:w-[32rem] md:rounded-xl">
              <X
                className="text-neutral-200 h-8 w-8 aspect-square absolute top-4 right-4 transition-transform hover:cursor-pointer hover:scale-110"
                onClick={toggleDisapproveModal}
              />
              <div className="flex flex-col items-center">
                <AlertTriangle className="h-16 w-16 aspect-square mb-2" />
                <p className="text-neutral-100 text-xl font-medium text-center mb-4">
                  Você tem certeza que deseja{" "}
                  <span className="text-urgencyColor-red">reprovar</span> a
                  solicitação do hospital {currentRegister.username}?
                </p>

                <div className="w-full flex gap-2">
                  <Button
                    color="info"
                    label="CANCELAR"
                    full
                    onClick={toggleDisapproveModal}
                  />
                  <Button
                    color="danger"
                    label="CONFIRMAR"
                    full
                    onClick={disapproveCurrentRegister}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-black/25 h-screen w-screen absolute top-0 left-0 z-10"
            onClick={toggleDisapproveModal}
          />
        </>
      )}
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

          <div
            className="px-4 py-2 bg-bg-layer flex gap-2 items-center rounded-sm hover:bg-bg-layer-hover hover:cursor-not-allowed"
            title="Histórico ainda não disponível."
          >
            <Clock className="h-4 w-4 aspect-square" />
            Histórico
          </div>
        </div>

        <div>{registers && <Table titles={titles} values={registers} />}</div>
      </div>
    </BaseLayout>
  );
}
