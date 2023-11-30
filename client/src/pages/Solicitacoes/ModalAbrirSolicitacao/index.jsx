import { useRef } from "react";
import Modal from "react-modal";
import { Plus, X } from "lucide-react";
import toast from "react-hot-toast";

import Button from "../../../components/Button";
import Search from "../../../components/Input/Search";
import { Small as SmallInput } from "../../../components/Input/Small";
import { createRequest } from "../../../services/api/request";

export function ModalAbrirSolicitacao({ modalIsOpen, closeModal, addRequest }) {
  const medicationInputRef = useRef(null);
  const quantityInputRef = useRef(null);
  const dueDateInputRef = useRef(null);
  const returnDateInputRef = useRef(null);
  const descriptionInputRef = useRef(null);

  const handleForm = async () => {
    const medicationId = medicationInputRef.current.value;
    const quantity = Number(quantityInputRef.current.value);
    const dueDate = new Date(dueDateInputRef.current.value);
    const returnDate = new Date(returnDateInputRef.current.value);
    const description = descriptionInputRef.current.value;

    const accessToken = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user"));

    const { data: createdRequestResponse } = await createRequest(accessToken, {
      hospitalId: user.id,
      medicationId,
      priorityId: "746a842d-0607-4017-b195-1e3a01e96b0c",
      statusId: "fcda13ce-6b13-4d94-8f65-0f3389266a22",
      description,
      dueDate,
      returnDate,
      quantity,
    });

    addRequest(createdRequestResponse.data);

    closeModal();
    toast.success("Solicitação criada com sucesso!");
  };

  const clearFields = () => {
    medicationInputRef.current.value = "";
    quantityInputRef.current.value = "";
    dueDateInputRef.current.value = "";
    returnDateInputRef.current.value = "";
    descriptionInputRef.current.value = "";
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="absolute top-10 bottom-10 left-10 right-10 flex items-center justify-center"
      overlayClassName="overlay"
      contentLabel="Example Modal"
    >
      <div className="bg-bg-main p-6 rounded text-gray-200 space-y-6 w-[400px]">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-2xl">Abrir Solicitacao</h1>
          <button onClick={closeModal}>
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-2">
            <div className="space-y-1 flex-1">
              <label className="font-semibold">Medicamento</label>
              <Search
                ref={medicationInputRef}
                placeholder="Pesquise por medicamentos"
              />
            </div>
            <SmallInput
              label="Quantidade"
              type="number"
              placeholder={0}
              width={32}
              ref={quantityInputRef}
            />
          </div>

          <div className="flex justify-between gap-2">
            <SmallInput
              label="Data Limite"
              type="date"
              placeholder={0}
              width="1/2"
              full={true}
              ref={dueDateInputRef}
            />
            <SmallInput
              label="Data de Devolução"
              type="date"
              placeholder={0}
              width="1/2"
              full={true}
              ref={returnDateInputRef}
            />
          </div>
          <div>
            <SmallInput
              label="Descrição"
              type="tex"
              placeholder="Informações importantes para a solicitação"
              width="full"
              full={true}
              ref={descriptionInputRef}
            />
          </div>
        </div>

        <div className="flex justify-center my-8">
          <Button
            label="Criar Solicitação"
            color="primary"
            type="submit"
            onClick={handleForm}
          >
            <Plus />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <button className="text-others-red" onClick={closeModal}>
            Cancelar
          </button>
          <button onClick={clearFields}>Limpar Campos</button>
        </div>
      </div>
    </Modal>
  );
}
